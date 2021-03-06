const CONTENT_MANAGER_PREFIX = 'plugins::content-manager.explorer';
const ATTRIBUTES_PERMISSIONS_ACTIONS = ['create', 'read', 'update'];

const STATIC_ATTRIBUTE_ACTIONS = ATTRIBUTES_PERMISSIONS_ACTIONS.map(
  action => `${CONTENT_MANAGER_PREFIX}.${action}`
);

export { ATTRIBUTES_PERMISSIONS_ACTIONS, CONTENT_MANAGER_PREFIX, STATIC_ATTRIBUTE_ACTIONS };
