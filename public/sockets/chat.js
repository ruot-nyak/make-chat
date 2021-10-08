module.exports = (io, socket) => {

    // Listen for "new user" socket emits
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat! ✋`);
        //Send the username to all clients currently connected
        io.emit("new user", username);
    })

    socket.on('new message', (data) => {
        console.log(`${data.sender} just posted a new message!`);
        //posting the message to all users
        io.emit('new message', data);
    })
    
}