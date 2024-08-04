import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnthemPage as AnthemPageComp } from "@/pages/anthem/[anthem-id]/page";
import { fetchJSON } from "@/shared/api";
import { serverUrl } from "@/config";
import { Anthem } from "@/entities/anthem/api";

type Params = {
  anthemId: string;
};

export function AnthemPage() {
  const { anthemId } = useParams<Params>() as Params;
  const [data, setData] = useState<Anthem | undefined>(undefined);

  useEffect(() => {
    fetchJSON<Anthem>(`${serverUrl}/anthem/${anthemId}`).then((response) => {
      setData(response);
    });
  }, [anthemId]);

  if (!data) {
    return <div>fetching....</div>;
  }

  return <AnthemPageComp anthem={data} />;
}
