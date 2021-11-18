import { CodeLine } from './CodeLine';

interface CodeBlockProps {
  codeLines: string[];
}

export const CodeBlock = ({ codeLines }: CodeBlockProps) => (
  <div className="col-span-3 bg-indigo-900 max-w-full h-auto max-h-[30rem] rounded py-5 px-6 shadow-xl overflow-auto">
    {codeLines.map((code, index) => (
      <CodeLine
        key={index}
        code={code}
        lineNumber={index + 1}
        isLastLine={index + 1 === codeLines.length}
      />
    ))}
  </div>
);
