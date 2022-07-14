import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../themes/Dark';

type GlobalProps = {
    fontFamily: string;
    theme?: ThemeType;
}

const GlobalStyles = createGlobalStyle<GlobalProps> `
    * {
        font-family: ${ ({fontFamily}: GlobalProps) => fontFamily }
    }

    body {
        background: ${ ({theme}: GlobalProps) => theme?.bg };
        margin: 0px;
        padding: 0px;
    }
`;

export default GlobalStyles;