import type { BaseHTMLAttributes } from 'react';
import styled from 'styled-components';

import UnreadableVisibleText from '@c-atoms/UnreadableVisibleText';

export default AccessibleText;
export type { Props };

type Props = {
   readAs: string;
   showAs: string;
} & Omit<BaseHTMLAttributes<HTMLSpanElement>, 'children'>;

function AccessibleText({ showAs, readAs, ...restProps }: Props) {
   return (
      <Base {...restProps}>
         <UnreadableVisibleText>{showAs}</UnreadableVisibleText>
         <ReadableHiddenText>{readAs}</ReadableHiddenText>
      </Base>
   );
}

const Base = styled.span`
   position: relative;
`;

const ReadableHiddenText = styled.span`
   white-space: nowrap;

   visibility: hidden;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`;
