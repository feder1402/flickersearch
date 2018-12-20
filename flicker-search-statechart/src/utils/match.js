const executeIfFunction = f => typeof f === 'function' ? f() : f;
const switchcase = cases => defaultCase => key => cases.hasOwnProperty(key) ? cases[key] : defaultCase;
export const match = cases => defaultCase => key => switchcase(cases)(defaultCase)(key);
