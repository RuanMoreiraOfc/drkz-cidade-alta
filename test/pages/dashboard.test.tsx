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

    it('should render only active fields', () => {
      const { container, render, interact } = createPageContainer();

      render(Dashboard);
      const nonFirstCheckboxList = container.querySelectorAll(
        '*:nth-child(1n+2) > input[type=checkbox]',
      );
      nonFirstCheckboxList.forEach((checkbox) =>
        interact.change(checkbox, {
          target: { checked: true },
        }),
      );

      const tableHeaderList = Array.from(container.querySelectorAll('th'));
      const activeTableHeaderList = tableHeaderList.filter(
        (element) => element.hidden !== true,
      );
      expect(tableHeaderList).toHaveLength(5);
      expect(activeTableHeaderList).toHaveLength(2);
      expect(
        activeTableHeaderList.map((element) => element.textContent),
      ).toEqual([
        'Nome', //
        '',
      ]);
    });
  });
});
