module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products",
      handler: "product.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/products/find-by-slug/:slug",
      handler: "product.findBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
