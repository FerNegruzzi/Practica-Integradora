const app = require("./app");
const { port } = require('./config/app.config')
const { Server } = require('socket.io');
const ChatsDao = require("./dao/Messages.dao");


const Chats = new ChatsDao()

const messages = []

const httpServer = app.listen(port, () => {
    console.log(`sv running at port ${port}`);
})

const io = new Server(httpServer)

io.on('connection', socket => {
    console.log(`Client connectd with id ${socket}`);

    socket.on('message', data => {
        messages.push(data)
        // socket.broadcast.emit manda a todos menos a mi --- io.emit manda a TODOS incluso yo
        io.emit('messageLogs', messages)
    })
    socket.on('message', async ({sender, message}) => {
        const chat = await Chats.create(sender, message)
        io.emit('message', chat)
    })
})
