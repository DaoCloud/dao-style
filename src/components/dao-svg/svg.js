// import all svg
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('@/components/dao-svg', true, /\.svg$/);
requireAll(req);
