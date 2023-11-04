module.exports = {
  routes: [
    {
      method: "POST",
      path: "/product/:id/update",
      handler: "product.updateProduct",
      config: {
        auth: false,
      },
    },
  ],
};
