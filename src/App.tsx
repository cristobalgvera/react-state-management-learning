import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { CounterImplementation } from './components/Counter/CounterImplementation';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { useCodeLines } from './hooks/useCodeLines';

function App() {
  const codeLines = useCodeLines('global-state-context-api');

  return (
    <Layout>
      <Header
        title="Gestión de estados"
        subtitle="Estado global - Context API"
      />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeLines={codeLines} />
        <Implementation>
          <CounterImplementation />
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
