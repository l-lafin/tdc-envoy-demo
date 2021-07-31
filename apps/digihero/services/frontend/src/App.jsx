import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Header } from './components';

const App = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
};

export default App;
