import { vi, describe, beforeEach, afterEach, it, expect } from 'vitest';

import { createPageContainer } from '@t-utils/domManipulator';

import type { Routes } from '@services/api';
import api from '@services/api';

import Dashboard from '@pages/dashboard';

describe('Dashboard', () => {
  const codigoPenalApiData = [
    {
      id: 1,
      nome: 'B',
      dataCriacao: '2021-04-29T01:26:35.700Z',
      multa: 10,
      status: 1,
    },
    {
      id: 2,
      nome: 'A',
      dataCriacao: '2021-04-29T01:26:35.700Z',
      multa: 20,
      status: 1,
    },
    {
      id: 3,
      nome: 'C',
      dataCriacao: '2021-04-29T01:26:35.700Z',
      multa: 30,
      status: 2,
    },
  ];

  const statusApiData = [
    {
      id: 1,
      descricao: 'Ativo',
    },
    {
      id: 2,
      descricao: 'Inativo',
    },
  ];

  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(async (path: Routes) => {
      if (path === '/codigopenal') {
        return [null, { data: codigoPenalApiData }];
      }

      return [null, { data: statusApiData }];
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Table', () => {
    it('should render all fields', () => {
      const { render, query } = createPageContainer();

      render(Dashboard);

      const tableHeaderList = query.many('th');
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
      const { render, query, interact } = createPageContainer();

      render(Dashboard);
      const nonFirstCheckboxList = query.many(
        '*:nth-child(1n+2) > input[type=checkbox]',
      );
      nonFirstCheckboxList.forEach((checkbox) =>
        interact.change(checkbox, {
          target: { checked: true },
        }),
      );

      const tableHeaderList = query.many('th');
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
