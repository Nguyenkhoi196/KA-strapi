"use strict";
// /ts-ignore

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    let interval;
    var io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
    // io.use(async (socket, next) => {
    //   try {
    //     //Socket Authentication
    //     let result = await strapi.plugins[
    //       "users-permissions"
    //     ].services.jwt.verify(socket.handshake.query.token);
    //     //Save the User ID to the socket connection
    //     socket.user = result.id;
    //     console.log(socket.user);
    //     next();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }).on("connection", function (socket) {
    //   console.log("User connected");
    //   const pingInterval = setInterval(() => {
    //     socket.emit("ping", JSON.stringify({ msg: "ping" }));
    //   }, 30000);
    //   socket.on("pong", () => {
    //     console.log("pong");
    //   });
    //   socket.on("disconnect", () => {
    //     console.log("Client disconnected");
    //     clearInterval(pingInterval);
    //   });
    // });
    //Make the socket global
    strapi.io = io;
    io.on("connection", function (socket) {
      io.emit("test", "hello");
      console.log(socket.id);
      console.log("test");
      socket.on("bla", (data) => {});
    });
  },
};
