import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
export var toLocaleCurrency = function toLocaleCurrency(number, locale, decimals) {
  var _Math$floor2;
  if (decimals === void 0) {
    decimals = 0;
  }
  if (locale === 'es') {
    var _Math$floor;
    return ((_Math$floor = Math.floor(number)) == null ? void 0 : _Math$floor.toLocaleString('es-AR', {
      maximumFractionDigits: decimals
    })) + " \u20AC";
  }
  return (_Math$floor2 = Math.floor(number)) == null ? void 0 : _Math$floor2.toLocaleString(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: decimals
  });
};
export var toLocaleInteger = function toLocaleInteger(number, locale, decimals) {
  var _Math$floor3;
  if (decimals === void 0) {
    decimals = 0;
  }
  return (_Math$floor3 = Math.floor(number)) == null ? void 0 : _Math$floor3.toLocaleString(locale === 'es' ? 'es-AR' : locale, {
    maximumFractionDigits: decimals
  });
};
export var hidePorotocol = function hidePorotocol(link) {
  return link == null ? void 0 : link.replace(/^(https?:\/\/)?(www\.)?/, '');
};