import type { FormEvent, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import api from '@services/api';

import { Helmet } from 'react-helmet';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';
import Form from '@c-atoms/Form';
import RequiredInput from '@c-atoms/RequiredInput';
import Button from '@c-atoms/Button';

import ReturnLink from '@c-molecules/ReturnLink';

export default DashboardCreate;

type ApiFields = {
   nome: string;
   descricao: string;
   dataCriacao: string;
   multa: number;
   tempoPrisao: number;
   status: number;
};

type Props = {};

function DashboardCreate({}: Props) {
   const navigate = useNavigate();
   const [error, setError] = useState<string | null>(null);

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const form = event.currentTarget;
      const fields = form.elements;
      const namedFields = Object.entries(fields).filter(([key]) =>
         Number.isNaN(Number(key)),
      ) as [keyof ApiFields, HTMLInputElement | HTMLTextAreaElement][];

      const rawBody = Object.fromEntries(
         namedFields.map(([key, element]) => [key, element.value]),
      ) as unknown as ApiFields;

      const treatedBody = {
         ...rawBody,
         dataCriacao: new Date().toISOString(),
         multa: Number(rawBody.multa),
         tempoPrisao: Number(rawBody.tempoPrisao),
      } as ApiFields;

      const [hasCriminalCodeFailed] = await api.post(
         `/codigopenal`,
         treatedBody,
      );

      if (hasCriminalCodeFailed) {
         setError('Não foi possível criar o código penal, tente novamente.');
         return;
      }

      navigate('/dashboard');
   }

   return (
      <Page>
         <Helmet>
            <title>Criar Código Penal - Cidade Alta</title>
         </Helmet>

         <ReturnLink />

         <Heading>Criar Código Penal</Heading>

         {error && <ErrorMessage>{error}</ErrorMessage>}

         <CustomForm onSubmit={handleSubmit}>
            <FormInputs>
               <LabeledField //
                  label='Nome'
                  name='nome'
               />
               <LabeledField //
                  label='Descrição'
                  type='text-area'
                  name='descricao'
               />
               <LabeledField //
                  label='Multa (R$)'
                  type='number'
                  name='multa'
               />
               <LabeledField //
                  label='Dias Preso'
                  type='number'
                  name='tempoPrisao'
               />
            </FormInputs>
            <FormActions>
               <ClearButton>Limpar Campos</ClearButton>
               <SubmitButton>Criar</SubmitButton>
            </FormActions>
         </CustomForm>
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
   name: keyof ApiFields;
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
