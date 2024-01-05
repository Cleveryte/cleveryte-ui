import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CustomCodeBlock({ code, language }) {

    const storedDarkMode = localStorage.getItem('darkMode');
    const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;

    return (
        <SyntaxHighlighter language={language} style={docco}>
            {code}
        </SyntaxHighlighter>
        
    );
}
