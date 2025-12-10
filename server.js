const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// --- ВАЖНОЕ ИЗМЕНЕНИЕ ЗДЕСЬ ---
// Говорим серверу искать файлы в текущей папке (в корне), а не в 'public'
app.use(express.static(__dirname));

// При заходе на главную страницу отдаем index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// ------------------------------

let players = {};
let hostId = null;

io.on('connection', (socket) => {
    console.log('Игрок подключился:', socket.id);

    // Если это первый игрок, он становится хостом ботов
    if (!hostId) {
        hostId = socket.id;
        socket.emit('setHost', true);
    } else {
        socket.emit('setHost', false);
    }

    // Игрок выбрал героя и зашел в игру
    socket.on('joinGame', (data) => {
        players[socket.id] = {
            id: socket.id,
            heroType: data.heroType,
            x: 0,
            z: 10,
            hp: data.hp,
            maxHp: data.maxHp
        };
        
        // Отправляем новому игроку список всех текущих
        socket.emit('currentPlayers', players);
        
        // Сообщаем всем остальным о новом игроке
        socket.broadcast.emit('newPlayer', players[socket.id]);
    });

    // Обновление позиции и состояния игрока
    socket.on('playerUpdate', (data) => {
        if (players[socket.id]) {
            players[socket.id].x = data.x;
            players[socket.id].z = data.z;
            players[socket.id].rot = data.rot;
            players[socket.id].hp = data.hp;
            socket.broadcast.emit('playerMoved', {
                id: socket.id,
                x: data.x,
                z: data.z,
                rot: data.rot,
                hp: data.hp
            });
        }
    });

    // Игрок использовал способность
    socket.on('abilityUsed', (data) => {
        socket.broadcast.emit('remoteAbility', {
            id: socket.id,
            abilityIndex: data.abilityIndex,
            target: data.target
        });
    });

    // Синхронизация ботов (только от хоста)
    socket.on('updateBots', (botsData) => {
        if (socket.id === hostId) {
            socket.broadcast.emit('botsSync', botsData);
        }
    });

    socket.on('disconnect', () => {
        console.log('Игрок отключился:', socket.id);
        delete players[socket.id];
        io.emit('playerDisconnected', socket.id);
        
        // Если ушел хост, назначаем нового
        if (socket.id === hostId) {
            const remainingIds = Object.keys(players);
            if (remainingIds.length > 0) {
                hostId = remainingIds[0];
                io.to(hostId).emit('setHost', true);
            } else {
                hostId = null;
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
