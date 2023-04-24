import { ThemeProvider } from 'styled-components';

import theme from './theme/default';
import GlobalStyles from './Global';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
