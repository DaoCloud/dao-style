// import all svg
const requireAll = requireContext => requireContext.keys().forEach(requireContext);
const req = require.context('@/components/dao-svg', true, /\.svg$/);
requireAll(req);
