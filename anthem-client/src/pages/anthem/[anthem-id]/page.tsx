import { useParams } from "react-router-dom";

type Params = {
  anthemId: string;
};

export function AnthemPage() {
  const params = useParams<Params>() as Params;
  return <div>usted llego hasta el himno {params.anthemId}</div>;
}
