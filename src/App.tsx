import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { PokemonList } from './components/Pokemon/PokemonList';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';

function App() {
  const codeMarkdown = useCodeMarkdown('global-state-redux-toolkit');

  return (
    <Layout>
      <Header
        title="Gestión de estados"
        subtitle="Estado global externo con Redux Toolkit Query"
      />
      <main className="row-span-6 mt-4">
        <div className="grid grid-cols-5 gap-x-16 justify-center items-center">
          <CodeBlock codeMarkdown={codeMarkdown} />
          <Implementation>
            <Counter />
          </Implementation>
        </div>
        <div>
          <Implementation fullRow>
            <PokemonList />
          </Implementation>
        </div>
      </main>
    </Layout>
  );
}

export default App;
