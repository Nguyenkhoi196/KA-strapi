export default () => async (ctx, next) => {
  await next();

  const { data, meta } = ctx.body;
  console.log(ctx);

  if (!ctx.request.header.authorization) {
    ctx.body = {
      data: data.map(({ id, name, price, inventory }) => ({
        id,
        name,
        price,
        inventory,
      })),
      meta,
    };
  }
};
