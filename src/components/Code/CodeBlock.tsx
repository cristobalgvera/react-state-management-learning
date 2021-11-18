import { CodeLine } from './CodeLine';
import codeLines from '../../assets/code-lines.json';

export const CodeBlock = () => (
  <div className="bg-indigo-900 w-[55rem] max-h-full rounded py-5 px-6 shadow-xl">
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
