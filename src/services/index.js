import axios from 'axios';

// Получаем имя месяца
export const getMonthsName = (num) => {
  return new Date(new Date().setMonth(num)).toLocaleString("ru", {
    month: "long",
  });
};
// Получаем курс валют за последние 4 месяца
export const getRatesForLastFourMonths = async (
  base = "USD"
) => {
  const getDateISOString = (num) => {
    return (
      new Date(new Date().getFullYear(),new Date().getMonth() - num + 1,1)
      .toISOString()
      .substr(0, 10) 
    )
  }

  const getLinkRequest = (num) => {
    return `https://api.exchangerate.host/${getDateISOString(num)}?base=${base}`
  }

  const { data: { rates: firstMonth }} = await axios.get(getLinkRequest(1));
  const { data: { rates: secondsMonth }} = await axios.get(getLinkRequest(2));
  const { data: { rates: thirdMonth }} = await axios.get(getLinkRequest(3));
  const { data: { rates: fourthMonth }} = await axios.get(getLinkRequest(4));

  return [firstMonth, secondsMonth, thirdMonth, fourthMonth]
};
