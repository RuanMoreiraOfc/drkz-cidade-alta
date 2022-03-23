import type { Store } from '@store/index';

import type {
   ReactNode,
   ChangeEvent,
   ChangeEventHandler,
   MouseEvent,
} from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
   FaDoorOpen as QuitIcon,
   FaPencilAlt as EditIcon,
   FaEye as ViewIcon,
   FaTrash as DeleteIcon,
} from 'react-icons/fa';

import parseCurrency from '@libs/parseCurrency';
import parseCurrencyDescription from '@libs/parseCurrencyDescription';
import sortByNumber from '@libs/sortByNumber';
import sortByString from '@libs/sortByString';

import api from '@services/api';

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';
import ReadableHiddenText from '@c-atoms/ReadableHiddenText';
import Button from '@c-atoms/Button';

import AccessibleText from '@c-molecules/AccessibleText';

export default connect<{}, Pick<Props, 'dispatch'>, {}, {}>(
   undefined,
   (dispatch) => ({ dispatch: dispatch as Props['dispatch'] }),
)(Dashboard);

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
   dateLabel: string;
   penalty: number;
   penaltyAsString: string;
   penaltyLabel: string;
   status: string;
};

type ApiTreatedFields = Exclude<
   keyof ApiTreatedData,
   'id' | 'penaltyAsString' | 'penaltyLabel' | 'dateLabel'
>;

type Props = {
   dispatch: (param: Store['action'][keyof Store['action']]) => void;
};

function Dashboard({ dispatch }: Props) {
   const navigate = useNavigate();
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
   const [tableData, setTableData] = useState<ApiTreatedData[]>([]);
   const [orderDirection, setOrderDirection] = useState({
      lastField: null as ApiTreatedFields | null,
      isAscendingMap: {
         name: null,
         date: null,
         penalty: null,
         status: null,
      } as Record<ApiTreatedFields, boolean | null>,
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

         const __createDateString =
            (item: ApiData) => (style: 'short' | 'long') =>
               new Date(item.dataCriacao).toLocaleDateString(['pt-br'], {
                  dateStyle: style,
               });

         const treatedData = criminalCodeResponse.data.flatMap<ApiTreatedData>(
            (item) => {
               return {
                  id: item.id,
                  name: item.nome,
                  date: __createDateString(item)('short'),
                  dateLabel: __createDateString(item)('long'),
                  penalty: item.multa,
                  penaltyAsString: parseCurrency(['pt-br'], 'BRL')(item.multa),
                  penaltyLabel: parseCurrencyDescription()(item.multa),
                  status: statusResponse.data.find(
                     ({ id }) => id === item.status,
                  )!.descricao,
               };
            },
         );

         const sortedData = Array.from(treatedData).sort((a, b) =>
            sortByString(true)(a.name, b.name),
         );

         setError(null);
         setApiData(sortedData);
         setTableData(sortedData);
      }

      fetchData();
   }, []);

   useEffect(() => {
      const { lastField, isAscendingMap } = orderDirection;

      if (lastField === null) {
         return;
      }

      const isAscending = isAscendingMap[lastField];

      if (isAscending === null) {
         setTableData(apiData);
         return;
      }

      setTableData((oldState) => {
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

   function handleLogout() {
      dispatch({ type: 'LOGOUT' });

      navigate('/');
   }

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
                     oldLastField !== orderBy ||
                     oldIsAscendingMap[orderBy] === false
                        ? {
                             ...oldIsAscendingMap,
                             [orderBy]: null,
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

         setTableData((oldState) => oldState.filter((data) => id !== data.id));

         const [hasCriminalCodeFailed] = await api.delete(`/codigopenal/${id}`);

         if (hasCriminalCodeFailed) {
            setTableData(tableData);
            setError({
               blockingRender: false,
               message: (
                  <Fragment>
                     Não foi possível deletar esse código penal de nome{' '}
                     <strong>
                        {tableData.find((data) => id === data.id)!.name}
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
         <Helmet>
            <title>Códigos Penais - Cidade Alta</title>
         </Helmet>

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

         <ReadableHiddenText id='table-description'>
            Tabela de códigos penais
         </ReadableHiddenText>
         <Table aria-describedby='table-description'>
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
                  tableData.map((data) => (
                     <TableRow key={data.id} aria-atomic='true'>
                        <TableData hidden={isColumnHidden('name')}>
                           {data.name}
                        </TableData>
                        <TableData
                           hidden={isColumnHidden('date')}
                           title={data.dateLabel}
                        >
                           <AccessibleText
                              readAs={data.dateLabel}
                              showAs={data.date}
                           />
                        </TableData>
                        <TableData
                           hidden={isColumnHidden('penalty')}
                           title={data.penaltyLabel}
                        >
                           <AccessibleText
                              readAs={data.penaltyLabel}
                              showAs={data.penaltyAsString}
                           />
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
                                 title={`Deletar '${data.name}'`}
                              />
                              <LinkButton
                                 to={`./view/${data.id}`}
                                 children={<ViewIcon />}
                                 title={`Ver mais sobre '${data.name}'`}
                              />
                              <LinkButton
                                 to={`./edit/${data.id}`}
                                 children={<EditIcon />}
                                 title={`Editar '${data.name}'`}
                              />
                           </TableDataActions>
                        </TableData>
                     </TableRow>
                  ))}
            </tbody>
         </Table>
         <ActionsBox>
            <QuitButton onClick={handleLogout}>
               <QuitIcon /> Sair
            </QuitButton>
            <LinkButton to='./create'>Adicionar</LinkButton>
         </ActionsBox>
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

   &:focus-within {
      outline-style: auto;
   }
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

const TableHeader = styled.th<{ isAscending?: boolean | null }>`
   padding: 0.8rem;
   padding-right: 3.2rem;

   border: 1px solid var(--c-gray-400);

   color: var(--c-blue-500);
   background-color: var(--c-gray-800);

   cursor: pointer;
   user-select: none;

   position: relative;

   &:before,
   &:after {
      content: '';

      width: 0;
      height: 0;
      margin: 0 auto;

      border: 0.8rem solid transparent;
      border-top-color: var(--c-white);
      // border-bottom-color: var(--c-white);

      text-align: center;

      display: block;
      transform-origin: center;

      position: absolute;
      right: 0.8rem;
   }

   &:before {
      opacity: ${(props) =>
         props.isAscending === undefined || props.isAscending === true
            ? '0'
            : '1'};

      transform: rotateX(180deg) translateY(50%);
   }

   &:after {
      opacity: ${(props) =>
         props.isAscending === undefined || props.isAscending === false
            ? '0'
            : '1'};

      transform: translateY(-50%);
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

const ActionsBox = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const QuitButton = styled(Button).attrs({
   textColor: 'var(--c-white)',
   bgColor: 'firebrick',
})`
   font-size: 2.4rem;

   display: flex;
   align-items: center;
   gap: 0.8rem;
`;
