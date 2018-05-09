export const getCallbacks = props => {
  const callbacks = {};
  Object.keys(props).forEach(prop => {
    if (typeof props[prop] === 'function') {
      callbacks[prop] = props[prop];
    }
  });
  return callbacks;
};