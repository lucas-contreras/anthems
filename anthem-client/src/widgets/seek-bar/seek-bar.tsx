import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import { SeekOptions, SeekOptionType } from "@/widgets/seek-bar/constants";
import './seek-bar.scss'

export function SeekBar() {
    const [seekOption, setSeekOption] = useState<SeekOptionType>(SeekOptions[0]);
    const [anthemNumber, setAnthemNumber] = useState('');
    const [anthemText, setAnthemText] = useState('');
    const navigate = useNavigate();

    const validateOnlyNumbers = useCallback((value: string) => {
        if (/\s{1,}/.test(value)) {
            return;
        }

        if (!/\d+/.test(value) && value.trim() !== "") {
            return;
        }

        setAnthemNumber(value)
    }, []);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {

        navigate({
            pathname: `anthem/${anthemNumber}`,
            search: `seekType=${seekOption.value}`
        })
        e.preventDefault();
    }, [anthemNumber, navigate, seekOption]);

    const options = useMemo(() => {
        return SeekOptions.map((so) => {
            return (
                <label key={so.value}>
                    <input
                        value={so.value}
                        type="radio"
                        name="seek-option"
                        checked={seekOption.value === so.value}
                        onChange={() => setSeekOption(so)}
                    /> {so.caption}
                </label>
            )
        });
    }, [seekOption.value]);

    return (
        <section className="seek-container">
            <div className="seek-options">
                {options}
            </div>
            <form className="seek-form" onSubmit={onSubmit}>
                <label htmlFor="anthemNumber">
                    <span>Número:</span>
                    <input
                        id="anthemNumber"
                        value={anthemNumber}
                        className="anthem-number"
                        maxLength={3}
                        onChange={({ target }) => {
                            validateOnlyNumbers(target.value)
                        }}
                    />
                </label>
                <label htmlFor="anthemText">
                    <span>Texto:</span>
                    <input id="anthemText" value={anthemText} maxLength={30} onChange={({ target }) => setAnthemText(target.value)} />
                </label>
                <button type="submit">Reproducir</button>
            </form>
            <div>
                <i>results go here when we find the lyrics title</i>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </section>
    )
}