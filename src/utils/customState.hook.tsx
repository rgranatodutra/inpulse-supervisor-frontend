import { useState } from "react";

export type CustomState<T> = {
    defaultValue: T;
    value: T;
    set: React.Dispatch<React.SetStateAction<T>>;
    reset: () => void;
};

function useCustomState<T>(defaultValue: T): CustomState<T> {
    const [value, set] = useState<T>(defaultValue);

    const reset = () => { set(defaultValue) };

    return { defaultValue, value, set, reset };
};

export default useCustomState;