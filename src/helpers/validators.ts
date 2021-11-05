export const composeValidators = (...validators: any[]) => (value: string) => {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
  };

export const required = (value: string | undefined) =>
  value ? undefined : 'Поле обязательно для заполнения';

export const maxLength = (length: number) => (value: string) =>
    value.length > length ? `Длина не более ${length} симоволов` : undefined;