import { useCallback, useEffect, useState } from "react";
import { serverUrl } from "@/constants";
import { Anthem } from "@/entities/anthem";
import { fetchJSON } from "@/utils";

type AnthemResult = {
    data: Anthem | undefined;
    error: Error | null;
    loading: boolean;
}

const DEFAULT_STATE: AnthemResult = {
    data: undefined,
    error: null,
    loading: true,
}

export function useAnthem(id: string) {
    const [state, setState] = useState<AnthemResult>(DEFAULT_STATE);

    const update = useCallback((value: Partial<AnthemResult>) => {
        setState((prev) => ({ ...prev, ...value }));
    }, []);

    useEffect(() => {
        update({ ...DEFAULT_STATE, loading: true });

        fetchJSON<Anthem>(`${serverUrl}/anthem/${id}`).then((response) => {
            update({ data: response, error: null });
        }).catch((reason) => {
            update({ error: reason });
        }).finally(() => {
            update({ loading: false });
        });
    }, [id, update]);

    return state;
}