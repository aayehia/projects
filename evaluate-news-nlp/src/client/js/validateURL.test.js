import { validateUrl } from './validateURL'

test('validate url', () => {
  expect(validateUrl('https://www.google.com')).toBe(true);
  expect(validateUrl('abcabc')).toBe(false);
});
