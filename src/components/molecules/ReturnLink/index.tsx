import styled from 'styled-components';

import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaReply as ArrowIcon } from 'react-icons/fa';

import type { ButtonProps } from '@c-atoms/Button';
import Button from '@c-atoms/Button';

export default ReturnLink;

const GoBackButton = styled(Button as typeof Link).attrs({
   as: Link,
   textColor: 'var(--c-white)',
   bgColor: 'var(--c-blue-500)',
})`
   text-decoration: unset;

   justify-self: left;
`;

type Props = Partial<ButtonProps> & LinkProps;

function ReturnLink({ to, ...restProps }: Props) {
   return (
      <GoBackButton to={to} {...restProps}>
         <ArrowIcon /> Voltar
      </GoBackButton>
   );
}

ReturnLink.defaultProps = {
   to: '..',
} as Props;
