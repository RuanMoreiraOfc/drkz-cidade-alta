import sanitize from '@libs/inputSanitizer';

import { describe, it, expect } from 'vitest';

describe('InputSanitizer', () => {
  describe('sanitize', () => {
    it('should return a string lowercase with `+` as a separator', () => {
      const input = 'Text with spaces, but no naïve';

      const output = sanitize(input, '+');

      expect(output).toEqual('text+with+spaces,+but+no+naive');
    });

    it('should return a string lowercase with `-` as a separator', () => {
      const input = 'Text    with a lot of    spaces,      ';

      const output = sanitize(input, '-');

      expect(output).toEqual('text-with-a-lot-of-spaces,');
    });
  });
});
