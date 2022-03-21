import type {
   ReactNode,
   ChangeEvent,
   ChangeEventHandler,
   MouseEvent,
} from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
   FaPencilAlt as EditIcon,
   FaEye as ViewIcon,
   FaTrash as DeleteIcon,
} from 'react-icons/fa';

import sortByNumber from '@libs/sortByNumber';
import sortByString from '@libs/sortByString';

import api from '@services/api';

import { Fragment } from 'react';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';
import Button from '@c-atoms/Button';

export default Dashboard;

type ApiData = {
   id: number;
   nome: string;
   dataCriacao: string;
   multa: number;
   status: number;
};

type ApiTreatedData = {
   id: number;
   name: string;
   date: string;
   penalty: number;
   penaltyAsString: string;
   status: string;
};

type ApiTreatedFields = Exclude<keyof ApiTreatedData, 'id' | 'penaltyAsString'>;

type Props = {};

function Dashboard({}: Props) {
   const [activeField, setActiveField] = useState<
      Record<ApiTreatedFields, boolean>
   >({
      name: true,
      date: true,
      penalty: true,
      status: true,
   });
   const [error, setError] = useState<{
      blockingRender: boolean;
      message: ReactNode;
   } | null>(null);
   const [apiData, setApiData] = useState<ApiTreatedData[]>([]);
   const [orderDirection, setOrderDirection] = useState({
      lastField: null as ApiTreatedFields | null,
      isAscendingMap: {
         name: true,
         date: true,
         penalty: true,
         status: true,
      } as Record<ApiTreatedFields, boolean>,
   });

   useEffect(() => {
      // TODO: Cache with react-query
      async function fetchData() {
         const [criminalCode, status] = await Promise.all([
            api.get<ApiData[]>('/codigopenal'),
            api.get<{ id: number; descricao: string }[]>('/status'),
         ]);

         const [hasCriminalCodeFailed, criminalCodeResponse] = criminalCode;
         const [hasStatusFailed, statusResponse] = status;

         if (hasCriminalCodeFailed || hasStatusFailed) {
            setError({
               blockingRender: true,
               message: 'Não foi possível carregar os dados!',
            });
            return;
         }

         setError(null);
         setApiData(() => {
            const treatedData =
               criminalCodeResponse.data.flatMap<ApiTreatedData>((item) => {
                  return {
                     id: item.id,
                     name: item.nome,
                     date: new Date(item.dataCriacao).toLocaleDateString([
                        'pt-br',
                     ]),
                     penalty: item.multa,
                     penaltyAsString: Intl.NumberFormat(['pt-br'], {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                     }).format(item.multa),
                     status: statusResponse.data.find(
                        ({ id }) => id === item.status,
                     )!.descricao,
                  };
               });

            const sortedData = Array.from(treatedData).sort((a, b) =>
               sortByString(true)(a.name, b.name),
            );

            return sortedData;
         });
      }

      fetchData();
   }, []);

   useEffect(() => {
      const { lastField, isAscendingMap } = orderDirection;

      if (lastField === null) {
         return;
      }

      const isAscending = isAscendingMap[lastField];

      setApiData((oldState) => {
         const apiDataClone = Array.from(oldState);

         return apiDataClone.sort((a, b) =>
            typeof a[lastField] === 'number'
               ? sortByNumber(isAscending)(
                    a[lastField] as number,
                    b[lastField] as number,
                 )
               : sortByString(isAscending)(
                    a[lastField] as string,
                    b[lastField] as string,
                 ),
         );
      });
   }, [orderDirection]);

   function handleToggleField(field: ApiTreatedFields) {
      return _handler;

      function _handler(event: ChangeEvent) {
         setActiveField((oldState) => ({
            ...oldState,
            [field]: !oldState[field],
         }));
      }
   }

   function handleSort(orderBy: ApiTreatedFields) {
      return _handler;

      function _handler(event: MouseEvent) {
         setOrderDirection(
            ({
               lastField: oldLastField,
               isAscendingMap: oldIsAscendingMap,
            }) => {
               const invertedMap = Object.fromEntries(
                  Object.entries(oldIsAscendingMap).map(([key, oldValue]) => [
                     key,
                     !oldValue,
                  ]),
               );

               return {
                  lastField: orderBy,
                  isAscendingMap:
                     oldLastField !== orderBy
                        ? {
                             ...oldIsAscendingMap,
                             [orderBy]: true,
                          }
                        : {
                             ...oldIsAscendingMap,
                             [orderBy]: invertedMap[orderBy],
                          },
               };
            },
         );
      }
   }

   function handleDelete(id: number) {
      return _handler;

      async function _handler(event: MouseEvent) {
         setError(null);

         const deleteConfirmation = confirm(
            'Deseja realmente apagar esse código penal?',
         );

         if (deleteConfirmation === false) {
            return;
         }

         setApiData((oldState) => oldState.filter((data) => id !== data.id));

         const [hasCriminalCodeFailed] = await api.delete(`/codigopenal/${id}`);

         if (hasCriminalCodeFailed) {
            setApiData(apiData);
            setError({
               blockingRender: false,
               message: (
                  <Fragment>
                     Não foi possível deletar esse código penal de nome{' '}
                     <strong>
                        {apiData.find((data) => id === data.id)!.name}
                     </strong>
                  </Fragment>
               ),
            });
         }
      }
   }

   // ***

   const isColumnHidden = (column: ApiTreatedFields) =>
      activeField[column] === false;

   const isColumnAscending = (column: ApiTreatedFields) =>
      orderDirection.lastField === column
         ? orderDirection.isAscendingMap[column]
         : undefined;

   return (
      <Page>
         <Heading>Dashboard</Heading>

         <Form>
            <LabeledCheckbox
               label='Nome'
               name='field-visibility'
               value='name'
               isChecked={activeField.name}
               onToggle={handleToggleField('name')}
            />
            <LabeledCheckbox
               label='Data'
               name='field-visibility'
               value='date'
               isChecked={activeField.date}
               onToggle={handleToggleField('date')}
            />
            <LabeledCheckbox
               label='Multa'
               name='field-visibility'
               value='penalty'
               isChecked={activeField.penalty}
               onToggle={handleToggleField('penalty')}
            />
            <LabeledCheckbox
               label='Status'
               name='field-visibility'
               value='status'
               isChecked={activeField.status}
               onToggle={handleToggleField('status')}
            />
         </Form>

         {error?.message && <p>{error.message}</p>}
         <Table>
            <thead>
               <TableRow>
                  <TableHeader
                     hidden={isColumnHidden('name')}
                     isAscending={isColumnAscending('name')}
                     onClick={handleSort('name')}
                  >
                     Nome
                  </TableHeader>
                  <TableHeader
                     hidden={isColumnHidden('date')}
                     isAscending={isColumnAscending('date')}
                     onClick={handleSort('date')}
                  >
                     Data
                  </TableHeader>
                  <TableHeader
                     hidden={isColumnHidden('penalty')}
                     isAscending={isColumnAscending('penalty')}
                     onClick={handleSort('penalty')}
                  >
                     Multa
                  </TableHeader>

                  <TableHeader
                     hidden={isColumnHidden('status')}
                     isAscending={isColumnAscending('status')}
                     onClick={handleSort('status')}
                  >
                     Status
                  </TableHeader>
                  <TableHeader
                     hidden={
                        isColumnHidden('name') &&
                        isColumnHidden('date') &&
                        isColumnHidden('penalty') &&
                        isColumnHidden('status')
                     }
                  />
               </TableRow>
            </thead>
            <tbody>
               {error?.blockingRender !== true &&
                  apiData.map((data) => (
                     <TableRow key={data.id}>
                        <TableData hidden={isColumnHidden('name')}>
                           {data.name}
                        </TableData>
                        <TableData hidden={isColumnHidden('date')}>
                           {data.date}
                        </TableData>
                        <TableData hidden={isColumnHidden('penalty')}>
                           {data.penaltyAsString}
                        </TableData>
                        <TableData hidden={isColumnHidden('status')}>
                           {data.status}
                        </TableData>
                        <TableData
                           hidden={
                              isColumnHidden('name') &&
                              isColumnHidden('date') &&
                              isColumnHidden('penalty') &&
                              isColumnHidden('status')
                           }
                        >
                           <TableDataActions>
                              <CustomButton
                                 onClick={handleDelete(data.id)}
                                 children={<DeleteIcon />}
                              />
                              <LinkButton
                                 to={`./view/${data.id}`}
                                 children={<ViewIcon />}
                              />
                              <LinkButton
                                 to={`./edit/${data.id}`}
                                 children={<EditIcon />}
                              />
                           </TableDataActions>
                        </TableData>
                     </TableRow>
                  ))}
            </tbody>
         </Table>
         <LinkButton to='./create'>Adicionar</LinkButton>
      </Page>
   );
}

const Page = styled(PageSection)``;

const Form = styled.form`
   justify-content: center;
   display: flex;
   gap: 2.4rem;
`;

const Label = styled(Button).attrs({
   as: 'label',
})`
   user-select: none;
`;

const Checkbox = styled.input.attrs({
   type: 'checkbox',
})`
   width: 0;
`;

const LabeledCheckbox = (props: {
   label: string;
   name: string;
   value: string;
   isChecked: boolean;
   onToggle: ChangeEventHandler;
}) => (
   <Label
      textColor='var(--c-white)'
      bgColor={props.isChecked ? 'var(--c-blue-500)' : 'var(--c-gray-400)'}
   >
      <Checkbox
         name={props.value}
         checked={props.isChecked}
         onChange={props.onToggle}
      />
      {props.label}
   </Label>
);

const CustomButton = styled(Button).attrs({
   textColor: 'var(--c-white)',
   bgColor: 'green',
})`
   font-size: 1.6rem;
`;

// FIXME: React props leaking
const LinkButton = styled(CustomButton as typeof Link).attrs({
   as: Link,
})`
   text-decoration: unset;

   justify-self: right;
`;

const Table = styled.table`
   border-collapse: collapse;

   text-align: left;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th<{ isAscending?: boolean }>`
   padding: 0.8rem;

   border: 1px solid var(--c-gray-200);

   color: var(--c-blue-500);

   cursor: pointer;
   user-select: none;

   &:after {
      content: '';

      opacity: ${(props) => (props.isAscending === undefined ? '0' : '1')};

      width: 0;
      height: 0;
      margin: 0 auto;

      border: 0.8rem solid transparent;
      border-top-color: var(--c-white);

      text-align: center;

      display: block;
      transform-origin: center;
      ${(props) =>
         props.isAscending === false
            ? 'transform: translateY(-25%) rotate(180deg)'
            : 'transform: translateY(50%)'};

      @media (min-width: 768px) {
         display: inline-block;
         margin: 0 0.8rem;
      }
   }
`;

const TableData = styled.td`
   padding: 0.8rem;
   border: 1px solid var(--c-gray-600);
`;

const TableDataActions = styled.div`
   display: grid;
   gap: 0.4rem;

   @media (min-width: 768px) {
      display: flex;
   }
`;
