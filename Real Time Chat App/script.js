const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// Getting the name of new user
const name = prompt('What is your name?')
appendMessage('You joined')
// brodcast to all about the user
socket.emit('new-user', name)

// appending chat message with the name
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

// user connection alert
socket.on('user-connected', name => {
  appendMessage(`${name} joined the server`)
})

// user disconnection alert
socket.on('user-disconnected', name => {
  appendMessage(`${name} left the server`)
})