import untils from "@strapi/utils";
const { PolicyError } = untils.errors;
export default (policyContext, config, { strapi }) => {
  const { body } = policyContext.request;
  const { user } = policyContext.state;
  const route = policyContext.request.route;
  console.log("route", route);

  if (user) {
    return true;
  } else {
    throw new PolicyError("Bạn không có quyền thực hiện !", {
      policy: "test",
      myCustomKey: "myCustomValue",
    });
  }
};
