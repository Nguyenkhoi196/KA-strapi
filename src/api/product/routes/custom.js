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
    {
      method: "GET",
      path: "/product/test",
      handler: "product.getTotalProducts",
      config: {
        auth: false,
      },
    },
  ],
};
