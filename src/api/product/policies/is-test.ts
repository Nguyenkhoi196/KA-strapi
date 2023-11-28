export default (policyContext, config, { strapi }) => {
  const { body } = policyContext.request;
  const { user, isAuthenticated } = policyContext.state;
  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return false;
  }
  // Return an error if there is no authenticated user with the request
  return true;
};
