import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';

const __isFunction = (obj: unknown): obj is Function =>
   typeof obj === 'function';

export default styled.button.withConfig<Props>({
   shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
})`
   padding: 0.8rem;

   border-radius: 0.4rem;
   border: none;

   color: ${(props) => {
      const { textColor: thisProp } = props;

      if (__isFunction(thisProp)) {
         return thisProp(props);
      }

      return thisProp;
   }};
   background-color: ${(props) => {
      const { bgColor: thisProp } = props;

      if (__isFunction(thisProp)) {
         return thisProp(props);
      }

      return thisProp;
   }};

   cursor: pointer;

   &:hover {
      filter: brightness(1.2);
   }

   &:active {
      filter: brightness(1.4);
   }
`;
export type { Props as ButtonProps };

type Props = {
   textColor: string | ((props: { theme: DefaultTheme }) => string);
   bgColor: string | ((props: { theme: DefaultTheme }) => string);
};
