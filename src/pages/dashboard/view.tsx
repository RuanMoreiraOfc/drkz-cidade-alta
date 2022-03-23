import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import parseCurrency from '@libs/parseCurrency';
import parseCurrencyDescription from '@libs/parseCurrencyDescription';

import api from '@services/api';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';

import ReturnLink from '@c-molecules/ReturnLink';
import AccessibleText from '@c-molecules/AccessibleText';

export default DashboardView;

type ApiData = {
   id: number;
   nome: string;
   descricao: string;
   dataCriacao: string;
   multa: number;
   tempoPrisao: number;
   status: number;
};

type ApiTreatedData = {
   id: number;
   name: string;
   description: string;
   date: string;
   dateLabel: string;
   penaltyAsString: string;
   penaltyLabel: string;
   jailTime: number;
   status: string;
};

type Props = {};

function DashboardView({}: Props) {
   const idParam = Number(useLocation().pathname.split('/').slice(-1)[0]);
   const navigate = useNavigate();
   const [error, setError] = useState<{
      blockingRender: boolean;
      message: ReactNode;
   } | null>(null);
   const [apiData, setApiData] = useState({} as ApiTreatedData);

   useEffect(() => {
      // TODO: Cache with react-query
      async function fetchData() {
         const [criminalCode, status] = await Promise.all([
            api.get<ApiData>(`/codigopenal/${idParam}`),
            api.get<{ id: number; descricao: string }[]>('/status'),
         ]);

         const [hasCriminalCodeFailed, criminalCodeResponse] = criminalCode;
         const [hasStatusFailed, statusResponse] = status;

         if (hasCriminalCodeFailed || hasStatusFailed) {
            const ErrorMessageWithCounter = () => {
               const [counter, setCounter] = useState(5);

               useEffect(() => {
                  const interval = setInterval(
                     setCounter.bind(null, (oldState) => oldState - 1),
                     1000 * 1, // 1 segundo,
                  );

                  return () => {
                     clearTimeout(interval);
                  };
               }, []);

               useEffect(() => {
                  if (counter >= 0) return;

                  navigate('/dashboard');
               }, [counter]);

               return (
                  <Fragment>
                     <div>
                        Não foi possível carregar os dados ou esse código penal
                        não existe!
                     </div>
                     <br />
                     <div>
                        Você será redirecionado em{' '}
                        <strong>{counter} segundos</strong>.
                     </div>
                  </Fragment>
               );
            };

            setError({
               blockingRender: true,
               message: <ErrorMessageWithCounter />,
            });
            return;
         }

         setApiData(() => {
            const criminalCodeData = criminalCodeResponse.data;
            const statusData = statusResponse.data;

            const __getDateString = (style: 'short' | 'long') =>
               new Date(criminalCodeData.dataCriacao).toLocaleDateString(
                  ['pt-br'],
                  {
                     dateStyle: style,
                  },
               );

            return {
               id: criminalCodeData.id,
               name: criminalCodeData.nome,
               date: __getDateString('short'),
               dateLabel: __getDateString('long'),
               description: criminalCodeData.descricao,
               penaltyAsString: parseCurrency(
                  ['pt-br'],
                  'BRL',
               )(criminalCodeData.multa),
               penaltyLabel: parseCurrencyDescription()(criminalCodeData.multa),
               jailTime: criminalCodeData.tempoPrisao,
               status: statusData.find(
                  ({ id }) => id === criminalCodeData.status,
               )!.descricao,
            };
         });
      }

      fetchData();
   }, []);

   return (
      <Page>
         <Helmet>
            <title>Visualizar Código Penal - Cidade Alta</title>
         </Helmet>

         {error?.blockingRender ? (
            <p>{error.message}</p>
         ) : (
            apiData.name && (
               <Fragment>
                  <ReturnLink to='../..' />

                  <Heading id='table-description'>
                     Código penal - {apiData.name}
                  </Heading>

                  <Table aria-describedby='table-description'>
                     <tbody>
                        <TableRow>
                           <TableHeader>Nome</TableHeader>
                           <TableData>{apiData.name}</TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Descrição</TableHeader>
                           <TableData>{apiData.description}</TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Data de Criação</TableHeader>
                           <TableData>
                              <AccessibleText
                                 showAs={apiData.date}
                                 readAs={apiData.dateLabel}
                              />
                           </TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Multa</TableHeader>
                           <TableData>
                              <AccessibleText
                                 showAs={apiData.penaltyAsString}
                                 readAs={apiData.penaltyLabel}
                              />
                           </TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Tempo de Prisão</TableHeader>
                           <TableData>{apiData.jailTime} dias</TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Status</TableHeader>
                           <TableData>{apiData.status}</TableData>
                        </TableRow>
                     </tbody>
                  </Table>
               </Fragment>
            )
         )}
      </Page>
   );
}

const Page = styled(PageSection)`
   max-width: 750px;
`;

const Table = styled.table`
   border-collapse: collapse;

   color: black;

   text-align: left;
`;

const TableRow = styled.tr`
   color: ${(props) => props.theme.colors.white};
   background-color: ${(props) => props.theme.colors.blue.s500};

   &:nth-child(2n) {
      color: ${(props) => props.theme.colors.blue.s900};
      background-color: ${(props) => props.theme.colors.blue.s50};
   }
`;

const TableHeader = styled.th`
   width: 15ch;
   padding: 0.8rem;

   border: 5px solid ${(props) => props.theme.colors.gray.s900};

   vertical-align: initial;

   user-select: none;

   position: relative;
`;

const TableData = styled.td`
   padding: 0.8rem;

   border: 5px solid ${(props) => props.theme.colors.gray.s900};

   text-align: justify;
`;
