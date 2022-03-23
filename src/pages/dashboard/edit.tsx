import type { ReactNode, FormEvent, InputHTMLAttributes } from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import api from '@services/api';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';
import Form from '@c-atoms/Form';
import RequiredInput from '@c-atoms/RequiredInput';
import Button from '@c-atoms/Button';

import ReturnLink from '@c-molecules/ReturnLink';

export default DashboardEdit;

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
   penalty: number;
   jailTime: number;
   status: string;
};

type ApiFields = Exclude<keyof ApiData, 'id' | 'dataCriacao'>;

type Props = {};

function DashboardEdit({}: Props) {
   const idParam = Number(useLocation().pathname.split('/').slice(-1)[0]);
   const navigate = useNavigate();
   const [error, setError] = useState<{
      blockingRender: boolean;
      message: ReactNode;
   } | null>(null);
   const [formData, setFormData] = useState({} as ApiTreatedData);

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

         setFormData(() => {
            const criminalCodeData = criminalCodeResponse.data;
            const statusData = statusResponse.data;

            return {
               id: criminalCodeData.id,
               name: criminalCodeData.nome,
               description: criminalCodeData.descricao,
               penalty: criminalCodeData.multa,
               jailTime: criminalCodeData.tempoPrisao,
               status: statusData.find(
                  ({ id }) => id === criminalCodeData.status,
               )!.descricao,
            };
         });
      }

      fetchData();
   }, []);

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const form = event.currentTarget;
      const fields = form.elements;
      const namedFields = Object.entries(fields).filter(([key]) =>
         Number.isNaN(Number(key)),
      ) as [ApiFields, HTMLInputElement | HTMLTextAreaElement][];

      const rawBody = Object.fromEntries(
         namedFields.map(([key, element]) => [key, element.value]),
      ) as unknown as Pick<ApiData, ApiFields>;

      const treatedBody = {
         ...rawBody,
         multa: Number(rawBody.multa),
         tempoPrisao: Number(rawBody.tempoPrisao),
      } as Pick<ApiData, ApiFields>;

      const [hasCriminalCodeFailed] = await api.put(
         `/codigopenal/${formData.id}`,
         treatedBody,
      );

      if (hasCriminalCodeFailed) {
         setError({
            blockingRender: false,
            message:
               'Não foi possível atualizar o código penal, tente novamente.',
         });
         return;
      }

      navigate('/dashboard');
   }

   return (
      <Page>
         <Helmet>
            <title>Editar Código Penal - Cidade Alta</title>
         </Helmet>

         {error && error.blockingRender ? (
            <p>{error.message}</p>
         ) : (
            formData.name && (
               <Fragment>
                  <ReturnLink to='../..' />

                  <Heading>Editando - {formData.name}</Heading>

                  {error && <ErrorMessage>{error.message}</ErrorMessage>}

                  <CustomForm onSubmit={handleSubmit}>
                     <FormInputs>
                        <LabeledField //
                           label='Nome'
                           name='nome'
                           defaultValue={formData.name}
                        />
                        <LabeledField //
                           label='Descrição'
                           type='text-area'
                           name='descricao'
                           defaultValue={formData.description}
                        />
                        <LabeledField //
                           label='Multa (R$)'
                           type='number'
                           name='multa'
                           defaultValue={formData.penalty}
                        />
                        <LabeledField //
                           label='Dias Preso'
                           type='number'
                           name='tempoPrisao'
                           defaultValue={formData.jailTime}
                        />
                     </FormInputs>
                     <FormActions>
                        <ClearButton>Limpar alterações</ClearButton>
                        <SubmitButton>Confirmar edição</SubmitButton>
                     </FormActions>
                  </CustomForm>
               </Fragment>
            )
         )}
      </Page>
   );
}

const Page = styled(PageSection)`
   max-width: 450px;
   width: 100%;
`;

const ErrorMessage = styled.p`
   color: red;

   text-weight: bold;
`;

const CustomForm = styled(Form)`
   display: grid;
   gap: 2.4rem;
`;

const FormInputs = styled.div`
   display: grid;
   gap: 1.6rem;
`;

const FormActions = styled.div`
   display: flex;
   gap: 0.8rem;
`;

const Label = styled.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`;

const TextArea = styled(RequiredInput).attrs({
   as: 'textarea',
   rows: 3,
})``;

const Input = styled(RequiredInput)``;

const LabeledField = ({
   label,
   type,
   ...restProps
}: {
   label: string;
   type?: InputHTMLAttributes<HTMLInputElement>['type'] | 'text-area';
   name: ApiFields;
   defaultValue: string | number;
}) => (
   <Label>
      <span>{label}:</span>
      {type === 'text-area' ? (
         <TextArea {...restProps} />
      ) : (
         <Input type={type} {...restProps} />
      )}
   </Label>
);

const CustomButton = styled(Button).attrs({
   textColor: 'var(--c-white)',
   bgColor: 'green',
})`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`;

const ClearButton = styled(CustomButton).attrs({
   type: 'reset',
   bgColor: 'firebrick',
})``;

const SubmitButton = styled(CustomButton).attrs({
   type: 'submit',
})``;
