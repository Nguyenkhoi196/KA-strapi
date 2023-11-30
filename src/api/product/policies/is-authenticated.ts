import untils from "@strapi/utils";
const { PolicyError } = untils.errors;
export default (policyContext, config, { strapi }) => {
  const { body } = policyContext.request;
  const { user } = policyContext.state;
  const route = policyContext.request.route;
  console.log("route", route);

  if (user) {
    return true;
  }
  return new PolicyError("Bạn chưa xác thực tài khoản");
};
