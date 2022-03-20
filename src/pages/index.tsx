import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PageSection from '@c-atoms/PageSection';
import Heading from '@c-atoms/Heading';
import Button from '@c-atoms/Button';

export default connect()(Login);

type Props = {};

function Login({ dispatch }: any) {
   const navigate = useNavigate();

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch({
         type: 'LOGIN',
         payload: {
            username: (
               event.currentTarget.elements as HTMLFormControlsCollection &
                  Record<'username' | 'password', HTMLInputElement>
            ).username.value,
         },
      });
      navigate('/dashboard');
   };

   return (
      <Page>
         <Heading>Aqui ficará um formulário</Heading>
         <Form onSubmit={handleSubmit}>
            <RequiredInput //
               name='username'
               placeholder='Usuário'
               required
            />
            <RequiredInput
               name='password'
               type='password'
               placeholder='Senha'
               required
            />
            <SubmitButton>Entrar</SubmitButton>
         </Form>
      </Page>
   );
}

const Page = styled(PageSection)`
   max-width: 500px;
`;

const Form = styled.form`
   display: grid;
   gap: 2.4rem;
`;

const RequiredInput = styled.input.attrs((props) => ({
   required: true,
}))`
   padding: 0.8rem;

   border: none;
   border-radius: 0.4rem;

   font-size: 1.8rem;
`;

const SubmitButton = styled(Button).attrs((props) => ({
   type: 'submit',
   textColor: 'var(--c-white)',
   bgColor: 'var(--c-blue-900)',
}))`
   font-size: 2.4rem;
`;
