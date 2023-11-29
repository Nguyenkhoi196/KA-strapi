export default {
  routes: [
    {
      method: "POST",
      path: "/product/:id/update",
      handler: "product.updateProduct",
      config: {
        policies: ["is-test"],
        middlewares: ["api::product.test"],
      },
    },
  ],
};
