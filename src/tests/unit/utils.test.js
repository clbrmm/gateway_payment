// src/tests/unit/utils.test.js
import { formatCurrency } from '../../utils/helpers';

test('formatCurrency should format currency correctly', () => {
  const formattedValue = formatCurrency(1000);
  expect(formattedValue).toBe('$1,000.00');
});
