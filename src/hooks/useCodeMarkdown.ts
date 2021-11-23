import { useEffect, useState } from 'react';

type CodeMarkdownType = 'welcome' | 'global-state-redux-toolkit';

const basePath = 'src/assets/code-markdown';

export const useCodeMarkdown = (codeMarkdownType: CodeMarkdownType): string => {
  const [codeMarkdown, setCodeMarkdown] = useState<string>('');

  useEffect(() => {
    const importCodeMarkdown = async () => {
      const codeMarkdown = await fetch(
        `${basePath}/${codeMarkdownType}-code.md`,
      );
      const code = await codeMarkdown.text();
      setCodeMarkdown(code);
    };

    importCodeMarkdown();
  }, [codeMarkdownType]);

  return codeMarkdown;
};
