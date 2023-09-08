module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/test",
      handler: "product.findMany",
      config: {
        auth: false,
      },
    },
  ],
};
