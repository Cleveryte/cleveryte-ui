import { CodeBlock, monoBlue } from "react-code-blocks";

export default function CustomCodeBlock({ code, language}) {

 

    return (
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={false}
            theme={monoBlue}
            startingLineNumber={0}
        />
    );
}
