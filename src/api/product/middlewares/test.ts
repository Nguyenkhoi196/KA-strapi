export default (ctx, { strapi }) => {
  return async (ctx, next) => {
    console.log("berfore ");
    await next();
    console.log("affer ");
  };
};
