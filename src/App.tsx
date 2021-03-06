import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { Logo } from './components/Logo';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('welcome');

  return (
    <Layout>
      <Header title="Gestión de estados" subtitle="Página de bienvenida" />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeMarkdown={codeMarkdown} />
        <Implementation>
          <p className="text-3xl font-semibold">Implementación</p>
          <Logo />
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
