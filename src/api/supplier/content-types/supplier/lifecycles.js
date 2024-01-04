module.export = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.service('plugin::email.email').send({
          to: 'nguyenkhoi196@gmail.com',
          from: 'noreply@khoianh.com',
          subject: 'you created a new supplier',
          text: `${result}`
      })
      // await strapi.plugins['email'].service.email.send({
      //   to: 'nguyenkhoi196@gmail.com',
      //   from: 'noreply@khoianh.com',
      //   subject: 'you created a new supplier',
      //   text: `${result}`
      // });
      console.log('send successful');
    }
    catch (err) {
      console.log(err);

    }
  }
}
