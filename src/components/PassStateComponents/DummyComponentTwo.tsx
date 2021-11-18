import { NestableComponent } from '../NestableComponent/NestableComponent';
import { BoilerplateText } from './BoilerplateText';
import { DummyComponentThree } from './DummyComponentThree';

interface DummyComponentTwoProps {
  count: number;
}

export const DummyComponentTwo = ({ count }: DummyComponentTwoProps) => (
  <>
    <BoilerplateText componentNumber={2} />
    <NestableComponent borderColor="purple">
      <DummyComponentThree count={count} />
    </NestableComponent>
  </>
);
