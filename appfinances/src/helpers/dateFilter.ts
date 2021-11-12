import { Item } from "../types/Item";

// Filtra o mês atual
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

// Filtra a lista por mês
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for (let i in list) {
    let nnData = new Date(list[i].date);

    if (nnData.getFullYear() === parseInt(year) && (nnData.getMonth() + 1) === parseInt(month)) {
      newList.push(list[i]);
    }
  }

  return newList;
}

// Formata a data
export const formatDate = (date: Date): string => {
  let nnData = new Date(date);

  let year = nnData.getFullYear();
  let month = nnData.getMonth() + 1;
  let day = nnData.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return `${months[parseInt(month) - 1]} de ${year}`;
}
