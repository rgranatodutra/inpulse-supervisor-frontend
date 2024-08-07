export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
    [Property in Key]-?: Type[Property];
}

export type RangeDate = {
    min: Date | null;
    max: Date | null;
}