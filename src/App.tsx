import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import themeDefault from './config/themes/Default';
import themeDark from './config/themes/Dark';
import GlobalStyles from './config/styles/GlobalStyles';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import { State } from './store';

export default function App() {
    const theme = useSelector((state:State)=>state.theme)
    
    
    return (
        
            <ThemeProvider theme={theme === 'light' ? themeDefault : themeDark}>
                <GlobalStyles fontFamily='Arial' />
                <Routers/>
            </ThemeProvider>
    
    );
};