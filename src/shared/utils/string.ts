const generateRandomString = (count = 20, prefix = '') =>
  `${prefix}${Math.random().toString(count)}`.replaceAll('.', '');

export { generateRandomString };
