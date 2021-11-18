import { CodeBlock } from './components/Code/CodeBlock';
import { Header } from './components/Header';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="grid grid-flow-row h-screen py-32 items-center">
      <Header title="Gestión de estados">
        <Logo />
      </Header>
      <main className="flex justify-center self-start">
        <CodeBlock />
      </main>
    </div>
  );
}

export default App;
