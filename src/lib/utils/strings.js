export const toLocaleCurrency = (number, locale, decimals = 0) => {
  if (locale === 'es') {
    return `${Math.floor(number)?.toLocaleString('es-AR', {
      maximumFractionDigits: decimals,
    })} €`;
  }

  return Math.floor(number)?.toLocaleString(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: decimals,
  });
};

export const toLocaleInteger = (number, locale, decimals = 0) => {
  return Math.floor(number)?.toLocaleString(
    locale === 'es' ? 'es-AR' : locale,
    {
      maximumFractionDigits: decimals,
    }
  );
};

export const hidePorotocol = (link) => {
  return link?.replace(/^(https?:\/\/)?(www\.)?/, '');
};
