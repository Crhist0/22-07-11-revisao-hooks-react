import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import themeDefault from './config/themes/Default';
import themeDark from './config/themes/Dark';
import GlobalStyles from './config/styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
    const theme = 1 + 1 === 2 ? themeDark : themeDefault;
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles fontFamily='Arial' />
                <Routers/>
            </ThemeProvider>
        </Provider>        
    );
};