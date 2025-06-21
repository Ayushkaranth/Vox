declare module 'react-syntax-highlighter' {
  import * as React from 'react';

  export interface SyntaxHighlighterProps {
    language?: string;
    customStyle?: React.CSSProperties; 
    style?: object;
    children?: string | string[];
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    lineProps?: Record<string, unknown> | ((lineNumber: number) => Record<string, unknown>);
  }

  const SyntaxHighlighter: React.FC<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
  export const atomOneDark: object;
}
