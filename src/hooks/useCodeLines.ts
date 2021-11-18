import { useEffect, useState } from 'react';

type CodeLineType = 'welcome' | 'local-state' | 'pass-local-state';

const basePath = '../assets/code-lines';

export const useCodeLines = (codeLineType: CodeLineType): string[] => {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    const importCodeLines = async () => {
      const codeLines = await import(
        /* @vite-ignore */ `${basePath}/${codeLineType}-lines.json`
      );
      setCodeLines(codeLines.default as string[]);
      return codeLines;
    };

    importCodeLines();
  }, [codeLineType]);

  return codeLines;
};
