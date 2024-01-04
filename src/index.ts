"use strict";
// /ts-ignore

export function register( /*{ strapi }*/) { }
export function bootstrap({ strapi }) {
  let interval;
  var io = require("socket.io")(strapi.server.httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      // transports: ['websocket', 'polling'],
      // credentials: true

    },
  });
  io.use(async (socket, next) => {
    try {
      //Socket Authentication
      let result = await strapi.plugins["users-permissions"].services.jwt.verify(socket.handshake.query.token);
      //Save the User ID to the socket connection
      socket.user = result.id;
      console.log(socket.user);
      next();
    } catch (error) {
      console.log(error);
    }
  });
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('ping', (data) => {
      console.log('Received ping:', data);
      socket.emit('pong', JSON.stringify({ msg: 'pong' }));
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  // Make the socket global
  strapi.io = io;
}
