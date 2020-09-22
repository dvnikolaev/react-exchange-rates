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

export const getRatesFullCurrentMonth = async (base, symbols) => {
  const symbolsString = symbols.join(',');
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().substr(0,10);
  const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString().substr(0,10);

  const { data: { rates }} = await axios.get(`https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbolsString}`);
  const data = Object.values(rates);
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  
  for (let i = 0; i < data.length; i++) {
    for (let key in data[i]) {
      switch(key) {
        case symbols[0]:
          arr1.push(data[i][key]);
          break;
        case symbols[1]:
          arr2.push(data[i][key]);
          break;
        case symbols[2]:
          arr3.push(data[i][key]);
          break;
        case symbols[3]:
          arr4.push(data[i][key]);
          break;
        default:
          break;
      }
    }
  }
  return [arr1,arr2,arr3,arr4];
}
