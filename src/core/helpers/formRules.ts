export const required = (name: string) => ({
  required: true,
  message: `Поле - ${name} обязательное`
});
