import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { LocalStateCounter } from './components/LocalStateCounter/LocalStateCounter';
import { NestableComponent } from './components/NestableComponent/NestableComponent';
import { useCodeLines } from './hooks/useCodeLines';

function App() {
  const codeLines = useCodeLines('pass-local-state');

  return (
    <Layout>
      <Header
        title="Gestión de estados"
        subtitle="Traspaso de estado local entre componentes"
      />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeLines={codeLines} />
        <Implementation>
          <NestableComponent borderColor="pink">
            <LocalStateCounter />
          </NestableComponent>
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
