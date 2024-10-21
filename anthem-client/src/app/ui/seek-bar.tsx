import { useCallback, useMemo, useState } from "react"
import { SeekOptions, SeekOptionType } from "../constants";

export function SeekBar() {
    const [value, setValue] = useState<SeekOptionType>(SeekOptions[0]);
    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
    }, []);

    const options = useMemo(() => {
        return SeekOptions.map((so) => {
            return <label>
                <input
                    key={so.value}
                    value={so.value}
                    type="radio"
                    name="seek-option"
                    checked={value.value === so.value}
                    onClick={() => setValue(so)}
                /> {so.caption}

            </label>
        });
    }, [value.value]);

    return <div>
        <div>
            {options}
        </div>
        <form onSubmit={onSubmit}>
            <label>
                <input />
            </label>
            <label>
                <input />
            </label>
        </form>
    </div>

}