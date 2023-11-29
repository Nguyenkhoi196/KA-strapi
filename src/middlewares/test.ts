export default (ctx, { strapi }) => {
  return async (ctx, next) => {
    await next();
  };
};
