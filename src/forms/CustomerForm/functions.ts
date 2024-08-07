import { ChangeEvent } from "react";
import { CustomState } from "../../utils/customState.hook";

function onChangeInput<T>(field: keyof T, state: CustomState<T>) {
    return (e: ChangeEvent<HTMLInputElement>) => {
        state.set(prev => {
            return ({ ...prev, [field]: e.target.value });
        });
    }
}

function onChangeTextArea<T>(field: keyof T, state: CustomState<T>) {
    return (e: ChangeEvent<HTMLTextAreaElement>) => {
        state.set(prev => {
            return ({ ...prev, [field]: e.target.value });
        });
    }
}

function onChangeSelect<T>(field: keyof T, state: CustomState<T>) {
    return (v: string | number | null) => {
        state.set(prev => {
            return ({ ...prev, [field]: v });
        });
    }
}

function calculateAge(birthdate: string | number | Date) {
    const formatedBirthdate = birthdate instanceof Date ? birthdate : new Date(birthdate);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - formatedBirthdate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = formatedBirthdate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < formatedBirthdate.getDate())) {
        age--;
    }

    return age;
}

export { onChangeInput, onChangeTextArea, onChangeSelect, calculateAge }
