module.exports = {
  routes: [
    // {
    //   method: "GET",
    //   path: "/products/find-all-info",
    //   handler: "product.findAllInfo",
    //   config: {
    //     auth: false,
    //   },
    // },
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
