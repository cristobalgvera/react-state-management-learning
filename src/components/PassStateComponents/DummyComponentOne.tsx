import { NestableComponent } from '../NestableComponent/NestableComponent';
import { BoilerplateText } from './BoilerplateText';
import { DummyComponentTwo } from './DummyComponentTwo';

interface DummyComponentOneProps {
  count: number;
}

export const DummyComponentOne = ({ count }: DummyComponentOneProps) => (
  <>
    <BoilerplateText componentNumber={1} />
    <NestableComponent borderColor="yellow">
      <DummyComponentTwo count={count} />
    </NestableComponent>
  </>
);
