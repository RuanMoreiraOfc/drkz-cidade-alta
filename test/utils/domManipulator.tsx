import type {
   PropsWithChildren,
   FunctionComponent,
   Component as ComponentType,
   SyntheticEvent,
} from 'react';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@store/index';
import { RecursivePartial } from '@~types/recursivePartial';

export { createPageContainer };

function createPageContainer() {
   const AppDependencies = ({ children }: PropsWithChildren<{}>) => (
      <ReduxProvider store={store}>
         <BrowserRouter>{children}</BrowserRouter>
      </ReduxProvider>
   );

   const container = document.createElement('div');
   container.id = 'root';

   return {
      render: (Component: FunctionComponent<any>) => {
         act(() => {
            render(<AppDependencies children={<Component />} />, container);
         });
      },
      query: {
         single<T = HTMLElement>(selector: string) {
            return container.querySelector(selector) as unknown as T;
         },
         many<T = HTMLElement>(selector: string) {
            return Array.from(
               container.querySelectorAll(selector),
            ) as unknown as T[];
         },
      },
      interact: (() => {
         const interactions = { ...Simulate };

         type PossibleElements = HTMLElement | HTMLInputElement;
         type CustomEvent = { target: EventTarget & PossibleElements };

         return interactions as unknown as Record<
            keyof typeof interactions,
            (
               element: Element | ComponentType<any>,
               eventData?: RecursivePartial<
                  SyntheticEvent<PossibleElements> & CustomEvent
               >,
            ) => void
         >;
      })(),
   };
}
