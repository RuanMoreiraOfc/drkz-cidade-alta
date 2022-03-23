import { theme } from '@styles/theme/index';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

type Theme = typeof theme;
