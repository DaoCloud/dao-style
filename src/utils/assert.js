const assert = (function () {
  let condition = null;
  let componentName = null;
  function expect(con) {
    condition = con;
    return this;
  }
  function component(con) {
    componentName = con;
    return this;
  }
  function print(type, msg) {
    if (!condition) {
      const conMsg = componentName ? `:${componentName}` : '';
      console[type](`[dao-style${conMsg}]:${msg}`);
      componentName = null;
      condition = null;
    }
  }
  function error(msg) {
    print('error', msg);
    return this;
  }
  function warn(msg) {
    print('warn', msg);
    return this;
  }
  function log(msg) {
    print('log', msg);
    return this;
  }
  return {
    expect,
    component,
    error,
    warn,
    log,
  };
}());
export default assert;
