interface CodeLineProps {
  code: string;
  lineNumber: number;
}

const commentRegex = /^[(//)|(#)]/;

export const CodeLine = ({ code, lineNumber }: CodeLineProps) => (
  <code className="flex gap-x-4 text-xl font-light text-white">
    <span className="col-span-2 text-gray-500 select-none">{lineNumber}</span>
    <span className={`${code.match(commentRegex) ? 'text-gray-400' : ''}`}>
      {code}
    </span>
  </code>
);
