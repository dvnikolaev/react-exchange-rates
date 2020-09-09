// Получаем имя месяца
export const getMonthsName = (num) => {
  return new Date(new Date().setMonth(num)).toLocaleString("ru", {
    month: "long",
  });
};