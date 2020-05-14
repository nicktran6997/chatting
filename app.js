const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);
const cors = require('cors');

app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//     //res.send('<h1> Hello World </h1>'); OLD Way
//     res.sendFile(__dirname + '/join.html');
// })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})
server.listen(process.env.PORT || 5000, () => console.log('Server has started'));