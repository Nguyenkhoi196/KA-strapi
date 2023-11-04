module.exports = (plugin) => {
  const updateUser = async (ctx) => {
    const { user } = ctx.state;

    if (!user || !user.id) {
      ctx.response.status = 401;
      return;
    }

    try {
      const { body } = ctx.request;
      ctx.param = 4;
      const updatedUserData = {
        data: {
          ...body,
          info: [
            {
              id: 21,
              __component: "information.contacts",
              phone: body.phone,
              email: body.email,
            },
            {
              id: 19,
              __component: "information.location",
              address: body.address,
              city: body.city,
            },
          ],
        },
      };

      const res = await strapi.entityService.update(
        "plugin::users-permissions.user",
        user.id,
        updatedUserData
      );

      ctx.response.status = 200;
      // return res;
    } catch (error) {
      console.error(error);
      ctx.response.status = 500;
    }
  };

  plugin.controllers.user.updateMe = updateUser;

  plugin.controllers.user.updateProfilePicture = async (ctx) => {
    const user = ctx.state.user;
    if (!user || !user.id) {
      ctx.response.status = 401;
      return;
    }
    const userData = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: { id: user.id },
        populate: { avatar: true },
      });
    const newPic = ctx.request;
    await strapi.query("plugin::users-permissions.user").update({
      where: { id: user.id },
      data: {
        profilePicture: null,
      },
    });
    console.log(ctx.request);
    await strapi.plugin("upload").services.upload.upload({
      where: {
        id: 4,
      },
      data: {
        ref: "plugin::users-permissions.user",
        refId: user.id,
        field: "profilePicture",
        source: "users-permissions",
      },
      files: {
        path: newPic.path,
        name: newPic.name,
        type: newPic.type,
        size: newPic.size,
      },
    });

    return (ctx.body = {
      message: "Profile picture updated",
    });
  };

  plugin.routes["content-api"].routes.push(
    {
      method: "PUT",
      path: "/user/me",
      handler: "user.updateMe",
      config: {
        prefix: "",
        policies: [],
      },
    }
    // {
    //   method: "POST",
    //   path: "/upload",
    //   handler: "user.updateProfilePicture",
    //   config: {
    //     prefix: "",
    //     policies: [],
    //   },
    // }
  );

  return plugin;
};
