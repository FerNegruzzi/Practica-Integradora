const socket = io()
const user = prompt('Ingrese su email')
const chat = document.querySelector('#messageLogs')
const btn = document.querySelector('#btn')
const message = document.querySelector('#chatBox')
btn.addEventListener('click', () => {
    const newMessage = {
        sender: user,
        message: message.value
    }
    socket.emit('message', newMessage)
})
console.log(user);

const pChat = (newMessage) => {
    const { sender, message } = newMessage
    const chat = document.createElement('p')
    chat.innerHTML = `
        ${sender}: ${message}
    `
    return chat
}

socket.on('message', (newMessage) => {
    chat.append(pChat(newMessage))
})
