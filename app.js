
//app.js
const express = require('express');
const app = express();
const server = require('http').Server(app);

//Socket.io
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log('User Connected')
    require('./public/sockets/chat')(io, socket);
})


const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index.handlebars');
})

server.listen('3000', () => {
    console.log('Server listening on Port 3000');
})