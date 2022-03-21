import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import parseCurrency from '@libs/parseCurrency';

import api from '@services/api';

import { Fragment } from 'react';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';

import ReturnLink from '@c-molecules/ReturnLink';

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
   penaltyAsString: string;
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

            return {
               id: criminalCodeData.id,
               name: criminalCodeData.nome,
               date: new Date(criminalCodeData.dataCriacao).toLocaleDateString([
                  'pt-br',
               ]),
               description: criminalCodeData.descricao,
               penaltyAsString: parseCurrency(
                  ['pt-br'],
                  'BRL',
               )(criminalCodeData.multa),
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
         {error?.blockingRender ? (
            <p>{error.message}</p>
         ) : (
            apiData.name && (
               <Fragment>
                  <ReturnLink to='../..' />

                  <Heading>Código penal - {apiData.name}</Heading>

                  <Table>
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
                           <TableData>{apiData.date}</TableData>
                        </TableRow>
                        <TableRow>
                           <TableHeader>Multa</TableHeader>
                           <TableData>{apiData.penaltyAsString}</TableData>
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
   color: var(--c-white);
   background-color: var(--c-blue-500);

   &:nth-child(2n) {
      color: var(--c-blue-900);
      background-color: var(--c-blue-50);
   }
`;

const TableHeader = styled.th`
   width: 15ch;
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   vertical-align: initial;

   user-select: none;

   position: relative;
`;

const TableData = styled.td`
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   text-align: justify;
`;
