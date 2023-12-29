export default async () => {
  process.nextTick(() => {
    var io = require("socket.io")(strapi.server,{
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
    io.on("connection", (socket) => {
      socket.emit('hello',{
        message:'hello Khoi'
      })
    });
    strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
  });
};
