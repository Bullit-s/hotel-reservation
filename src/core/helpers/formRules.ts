export const required = (name?: string) => ({
  required: true,
  message: name ? `Поле - ${name} обязательное` : ""
});
