import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Heading from '@c-atoms/Heading';

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
            <Input //
               name='username'
               placeholder='Usuário'
               required
            />
            <Input
               name='password'
               type='password'
               placeholder='Senha'
               required
            />
            <SubmitButton type='submit'>Entrar</SubmitButton>
         </Form>
      </Page>
   );
}

const Page = styled.div`
   max-width: 500px;
   padding: 0 4rem;

   display: grid;
   gap: 2.4rem;
`;

const Form = styled.form`
   display: grid;
   gap: 2.4rem;
`;

const Input = styled.input`
   padding: 0.8rem;

   border: none;
   border-radius: 0.4rem;

   font-size: 1.8rem;
`;

const SubmitButton = styled.button`
   padding: 0.8rem;

   border-radius: 0.4rem;
   border: none;

   color: var(--c-white);
   background-color: var(--c-blue-900);

   font-size: 2.4rem;

   &:hover {
      filter: brightness(1.2);
   }

   &:active {
      filter: brightness(1.4);
   }
`;
