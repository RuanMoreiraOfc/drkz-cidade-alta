import styled from 'styled-components';

import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaReply as ArrowIcon } from 'react-icons/fa';

import type { ButtonProps } from '@c-atoms/Button';
import Button from '@c-atoms/Button';

export default ReturnLink;

type Props = Partial<ButtonProps> & LinkProps;

function ReturnLink(props: Props) {
   return (
      <GoBackButton {...props}>
         <ArrowIcon /> Voltar
      </GoBackButton>
   );
}

ReturnLink.defaultProps = {
   to: '..',
} as Props;

// FIXME: MAKE AVAILABLE `textColor` & `bgColor` PROPS
const GoBackButton = styled(Button as typeof Link).attrs<Props>(
   ({ theme }) => ({
      as: Link,
      textColor: theme.colors.white,
      bgColor: theme.colors.blue.s500,
   }),
)`
   text-decoration: unset;

   justify-self: left;
`;
