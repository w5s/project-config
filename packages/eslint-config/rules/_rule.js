/** @type {'error'} */
const error = 'error';

/** @type {'warn'} */
const warn = 'warn';

/** @type {'off'} */
const off = 'off';

module.exports = {
  error,
  fixme: (/** @type {'off'|'warn'|'error'} */ _status) => off,
  off,
  warn,
};
