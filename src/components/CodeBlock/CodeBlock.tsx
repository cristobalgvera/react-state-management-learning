import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CodeBlockProps {
  codeMarkdown: string;
}

export const CodeBlock = ({ codeMarkdown }: CodeBlockProps) => (
  <div className="col-span-3 bg-indigo-900 max-w-full h-auto max-h-[30rem] rounded py-5 px-6 shadow-xl overflow-auto">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{codeMarkdown}</ReactMarkdown>
  </div>
);
