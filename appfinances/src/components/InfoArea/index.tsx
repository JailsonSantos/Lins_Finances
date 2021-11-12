import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeIem } from '../ResumeItem';

import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  // Mês anterior
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  // Mês próximo
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <IoIosArrowDropleft />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <IoIosArrowDropright />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeIem title="RECEITAS" value={income} />
        <ResumeIem title="DESPESAS" value={expense} />
        <ResumeIem
          title="BALANÇO"
          value={income - expense}
          color={(income - expense) < 0 ? 'red' : 'green'}
        />
      </C.ResumeArea>
    </C.Container>
  );
}