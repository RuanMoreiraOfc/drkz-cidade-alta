import { describe, it, expect } from 'vitest';

import { createPageContainer } from '@t-utils/domManipulator';

import Dashboard from '@pages/dashboard';

describe('Dashboard', () => {
  describe('Table', () => {
    it('should render all fields', () => {
      const { container, render } = createPageContainer();

      render(Dashboard);

      const tableHeaderList = Array.from(container.querySelectorAll('th'));
      const activeTableHeaderList = tableHeaderList.filter(
        (element) => element.hidden !== true,
      );
      expect(tableHeaderList).toHaveLength(5);
      expect(activeTableHeaderList).toHaveLength(5);
      expect(
        activeTableHeaderList.map((element) => element.textContent),
      ).toEqual([
        'Nome', //
        'Data',
        'Multa',
        'Status',
        '',
      ]);
    });
  });
});
