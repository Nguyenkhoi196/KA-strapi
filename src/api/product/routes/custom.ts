export default {
  routes: [
    {
      method: "POST",
      path: "/product/:id/update",
      handler: "product.updateProduct",
      config: {
        policies: ["is-authenticated"],
      },
    },
  ],
};
