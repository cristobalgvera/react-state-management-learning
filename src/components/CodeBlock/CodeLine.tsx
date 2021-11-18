interface CodeLineProps {
  code: string;
  lineNumber: number;
  isLastLine?: boolean;
}

const commentRegex = /^( *\/\/|#| *\/?\*)/;

export const CodeLine = ({ code, lineNumber, isLastLine }: CodeLineProps) => (
  <code className="flex gap-x-4 text-xl font-light text-white w-max whitespace-pre-wrap">
    <span className="col-span-2 w-6 text-gray-500 select-none">
      {lineNumber}
    </span>
    <span className={`${code.match(commentRegex) ? 'text-gray-400' : ''}`}>
      {code}
      {isLastLine && <span className="animate-ping select-none">█</span>}
    </span>
  </code>
);
