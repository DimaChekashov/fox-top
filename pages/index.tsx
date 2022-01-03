import { Htag } from "../components";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h2">Text</Htag>
      <Button appearance="primary">Button 1</Button>
      <Button appearance="ghost">Button 2</Button>
      <Button appearance="primary" arrow="right">Button arrow</Button>
      <Button appearance="ghost" arrow="down">Button arrow down</Button>
    </div>
  );
}
