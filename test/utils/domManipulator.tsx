import store from '@store/index';

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
      renderAndPromise: async (Component: FunctionComponent<any>) => {
         await act(async () => {
            await render(
               <AppDependencies children={<Component />} />,
               container,
            );
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
      interactAndPromise: (() => {
         const interactions = { ...Simulate };

         type PossibleElements = HTMLElement | HTMLInputElement;
         type CustomEvent = { target: EventTarget & PossibleElements };

         const delayedInteractions = Object.fromEntries(
            Object.entries(interactions).map(([key, action]) => [
               key,
               async (...args: [any, any]) => {
                  return await act(async () => {
                     return await action(...args);
                  });
               },
            ]),
         );

         return delayedInteractions as unknown as Record<
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
