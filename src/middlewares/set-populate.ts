const populate = "*";
export default () => async (ctx, next) => {
  ctx.query = {
    populate,
    ...ctx.query,
  };
  await next();
};
