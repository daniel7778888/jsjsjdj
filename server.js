const express = require('express');
const http = require('http');
const path = require('path'); // Добавили модуль путей
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// --- ИСПРАВЛЕНИЕ ПУТЕЙ ---
// Мы говорим серверу: "Ищи файлы и в папке public, и просто рядом с сервером"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Если пользователь просто открывает сайт, отдаем ему index.html принудительно
app.get('/', (req, res) => {
    const fs = require('fs');
    const pathInPublic = path.join(__dirname, 'public', 'index.html');
    const pathInRoot = path.join(__dirname, 'index.html');

    // Проверяем, где лежит файл, и отдаем его
    if (fs.existsSync(pathInPublic)) {
        res.sendFile(pathInPublic);
    } else {
        res.sendFile(pathInRoot);
    }
});
// --------------------------

// Храним пользователей: { "username": "socket_id" }
let users = {};

io.on('connection', (socket) => {
    console.log('Новое подключение:', socket.id);

    // 1. Регистрация пользователя
    socket.on('login', (username) => {
        users[username] = socket.id;
        socket.username = username;
        console.log(`Пользователь ${username} вошел.`);
        io.emit('users-update', Object.keys(users));
    });

    // 2. Отправка сообщения
    socket.on('chat-message', (data) => {
        const { targetUser, message } = data;
        const targetSocket = users[targetUser];
        if (targetSocket) {
            io.to(targetSocket).emit('chat-message', {
                from: socket.username,
                message: message
            });
        }
    });

    // 3. Логика звонков (WebRTC)
    socket.on('call-user', (data) => {
        const targetSocket = users[data.userToCall];
        if (targetSocket) {
            io.to(targetSocket).emit('call-made', {
                offer: data.offer,
                socket: socket.id,
                from: socket.username
            });
        }
    });

    socket.on('make-answer', (data) => {
        io.to(data.to).emit('answer-made', {
            socket: socket.id,
            answer: data.answer
        });
    });

    socket.on('ice-candidate', (data) => {
        const targetSocket = users[data.target];
        if (targetSocket) {
            io.to(targetSocket).emit('ice-candidate', {
                candidate: data.candidate,
                from: socket.username
            });
        }
    });

    socket.on('disconnect', () => {
        if (socket.username) {
            delete users[socket.username];
            io.emit('users-update', Object.keys(users));
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});