import { useParams } from "react-router-dom";
import { useAnthem } from "./hooks";
import { AnthemComponent } from "./ui/anthem-component";

type Params = {
  anthemId: string;
};

export function AnthemPage() {
  const { anthemId } = useParams<Params>() as Params;
  const { data, error, loading } = useAnthem(anthemId);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("An error has happened when fetching");
  }

  return <AnthemComponent anthem={data} />;
}
