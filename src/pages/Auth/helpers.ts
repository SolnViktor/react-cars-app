type TSetError = (arg: string) => void;

export const fieldValidator = (value: string, setError: TSetError, fieldName: string) => {
  if (value.length === 0) {
    setError(`Введите ${fieldName}`);
    return;
  }
  if (value.length > 20) {
    setError('Длина не должна превышать 20 символов');
    return;
  }
  if (/["';{}\]\[]/.test(value)) {
    setError('Символы: "\';{}\][ недопустимы');
    return;
  }
  setError('');
};