import { NestableComponent } from '../NestableComponent/NestableComponent';
import { Count } from './Count';
import { CountActions } from './CountActions';
import { CountReset } from './CountReset';
import { CountSet } from './CountSet';

export const Counter = () => (
  <NestableComponent>
    Componente 1
    <Count />
    <NestableComponent borderColor="green">
      Componente 2
      <NestableComponent borderColor="pink">
        Componente 3
        <CountSet />
        <NestableComponent borderColor="purple">
          Componente 4
          <NestableComponent borderColor="yellow">
            Componente 5
            <CountActions />
          </NestableComponent>
        </NestableComponent>
      </NestableComponent>
      <CountReset />
    </NestableComponent>
  </NestableComponent>
);
