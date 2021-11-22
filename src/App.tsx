import { CodeBlock } from './components/CodeBlock/CodeBlock';
import { Header } from './components/Header';
import { Implementation } from './components/Implementation';
import { Layout } from './components/Layout';
import { useCodeMarkdown } from './hooks/useCodeMarkdown';
import { Provider } from 'react-redux';
import store from './state/store';
import { Counter } from './components/Counter/Counter';

function App() {
  const codeMarkdown = useCodeMarkdown('welcome');

  return (
    <Layout>
      <Header title="Gestión de estados" subtitle="Página de bienvenida" />
      <main className="row-span-3 grid grid-cols-5 gap-x-16 mt-4 justify-center items-center">
        <CodeBlock codeMarkdown={codeMarkdown} />
        <Implementation>
          <Provider store={store}>
            <Counter />
          </Provider>
        </Implementation>
      </main>
    </Layout>
  );
}

export default App;
