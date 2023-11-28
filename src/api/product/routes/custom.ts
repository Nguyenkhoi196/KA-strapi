export default {
  routes: [
    {
      method: "POST",
      path: "/product/:id/update",
      handler: "product.updateProduct",
      config: {
        policy: ["is-test"],
      },
    },
  ],
};
