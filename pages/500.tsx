import { Htag } from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";

function Error500(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Ошибка 500</Htag>
    </>
  );
}

export default withLayout(Error500);