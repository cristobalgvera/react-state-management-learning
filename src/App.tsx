import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { LocalStateCounter } from './components/LocalStateCounter/LocalStateCounter';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('welcome');

  return (
    <Layout>
      <Header title="Gestión de estados" subtitle="Estado local" />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeMarkdown={codeMarkdown} />
        <Implementation>
          <LocalStateCounter />
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
