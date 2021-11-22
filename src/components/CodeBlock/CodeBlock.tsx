import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialOceanic as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface CodeBlockProps {
  codeMarkdown: string;
}

export const CodeBlock = ({ codeMarkdown }: CodeBlockProps) => (
  <div className="col-span-3 bg-gray-800 max-w-full h-auto max-h-[30rem] rounded py-5 px-6 shadow-xl overflow-auto">
    <ReactMarkdown
      components={{
        code({ className, children }) {
          // Removing "language-" because React-Markdown already added "language-"
          const language = className?.replace('language-', '');
          return (
            <SyntaxHighlighter
              style={codeTheme}
              showLineNumbers
              language={language}
            >
              {children[0]}
            </SyntaxHighlighter>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {codeMarkdown}
    </ReactMarkdown>
  </div>
);
