import { BoilerplateText } from './BoilerplateText';

interface DummyComponentThreeProps {
  count: number;
}

export const DummyComponentThree = ({ count }: DummyComponentThreeProps) => (
  <>
    <BoilerplateText componentNumber={3} />
    <p className="text-2xl mt-3">➡ {count}</p>
  </>
);
