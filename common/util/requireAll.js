const requireAll = (requireContext) => {
  const resource = {};
  requireContext.keys().forEach((item) => {
    const src = item.replace(/(?:.*?)(\w+)\.js$/, '$1');
    const result = requireContext(item);
    resource[src] = 'default' in result ? result.default : result;
  });
  return resource;
};

export default requireAll;
