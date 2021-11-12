import { useState, useEffect } from 'react';

// Styled-components
import * as C from './App.styles';

// Types
import { Item } from './types/Item';
import { Category } from './types/Category';

// Data
import { items } from './data/items';
import { categories } from './data/categories';

// Helpers
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

// Components
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Monitorando a lista e o mes atual
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  //console.log(filteredList);
  /* 
    let n = localStorage.getItem('lista');
    if (n !== null) {
  
      let nObjeto = JSON.parse(n);
      console.log(typeof (nObjeto[0].date));
      //console.log(n);
    }
   */

  // Calculo de gastos
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [list, filteredList])

  // Atualizando a mudança do mês
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  // Adicionando itens na lista
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);

    setList(newList);

    // localStorage.setItem('lista', JSON.stringify(newList));

  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Area de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Area de inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* Tabela de itens */}
        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;