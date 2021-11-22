import { CounterProvider } from '../../context/counterContext';
import { NestableComponent } from '../NestableComponent/NestableComponent';
import { Count } from './Count';
import { CountActions } from './CountActions';
import { CountReset } from './CountReset';

export const CounterImplementation = () => (
  <CounterProvider>
    <NestableComponent>
      Componente 1
      <Count />
      <NestableComponent borderColor="green">
        Componente 2
        <NestableComponent borderColor="pink">
          Componente 3
          <NestableComponent borderColor="purple">
            Componente 4
            <NestableComponent borderColor="red">
              Componente 5
              <CountActions />
            </NestableComponent>
          </NestableComponent>
          <CountReset />
        </NestableComponent>
      </NestableComponent>
    </NestableComponent>
  </CounterProvider>
);
