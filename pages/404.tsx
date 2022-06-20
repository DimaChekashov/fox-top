import { Htag } from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Ошибка 404</Htag>
    </>
  );
}

export default withLayout(Error404);