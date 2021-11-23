import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('global-state-redux');

  return (
    <Layout>
      <Header title="Gestión de estados" subtitle="Estado global con Redux" />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeMarkdown={codeMarkdown} />
        <Implementation>
          <Counter />
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
