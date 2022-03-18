import type { ReactNode } from 'react';
import styled from 'styled-components';

export default Heading;

type Props = {
   children: ReactNode;
};

function Heading({ children }: Props) {
   return <HeadingComponent>{children}</HeadingComponent>;
}

const HeadingComponent = styled.h1``;
