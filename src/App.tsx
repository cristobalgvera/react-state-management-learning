import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { Counter } from './components/Counter/Counter';
import { NestableComponent } from './components/NestableComponent/NestableComponent';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('pass-local-state');

  return (
    <Layout>
      <Header
        title="Gestión de estados"
        subtitle="Traspaso de estado local entre componentes"
      />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeMarkdown={codeMarkdown} />
        <Implementation>
          <NestableComponent borderColor="pink">
            <Counter />
          </NestableComponent>
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
