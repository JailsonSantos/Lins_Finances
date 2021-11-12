import React, { useState } from 'react';

import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  onAdd: (item: Item) => void;
}
export const InputArea = ({ onAdd }: Props) => {

  const [dateForm, setDateForm] = useState('');
  const [categoryForm, setCategoryForm] = useState('');
  const [titleForm, setTitleForm] = useState('');
  const [valueForm, setValueForm] = useState(0);

  const handleAddEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let dataCortada = dateForm.slice(0, 10);

    let [yearForm, monthForm, dayForm] = dataCortada.split('-');
    let y = parseInt(yearForm);
    let m = parseInt(monthForm);
    let d = parseInt(dayForm);

    if (dateForm !== null && categoryForm !== '' && titleForm !== '' && valueForm !== 0) {

      let newItem: Item = {
        date: new Date(y, m - 1, d),
        category: categoryForm,
        title: titleForm,
        value: valueForm,
      };
      onAdd(newItem);
    }
    /*  setDateForm('');
     setCategoryForm('');
     setTitleForm('');
     setValueForm(0); */
  }

  return (
    <C.Container>
      <C.Form onSubmit={(event) => handleAddEvent(event)}>
        Data: <C.InputArea type="date" value={dateForm} onChange={(event) => setDateForm(event?.target.value)} />
        Categoria: <C.InputArea type="text" value={categoryForm} onChange={(event) => setCategoryForm(event?.target.value)} />
        Título: <C.InputArea type="text" value={titleForm} onChange={(event) => setTitleForm(event?.target.value)} />
        Valor: <C.InputArea type="number" value={valueForm} onChange={(event) => setValueForm(parseInt(event?.target.value))} />

        <C.ButtonArea>
          <C.Button type="submit">ADICIONAR</C.Button>
        </C.ButtonArea>
      </C.Form>
    </C.Container>
  );
}