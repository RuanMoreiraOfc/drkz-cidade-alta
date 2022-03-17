import styled from 'styled-components';

export default Home;

type Props = {};

function Home({}: Props) {
   return <Page>Aqui ficará um formulário</Page>;
}

const Page = styled.div`
   max-width: 350px;

   display: flex;
   gap: 2rem;
`;
