import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

// icons
import { IoTrashBinOutline } from 'react-icons/io5';

type Props = {
  item: Item;
  key: number;
}

export const TableItem = ({ item, key }: Props) => {

  let valorFormatadoEmReal = item.value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  console.log(key);

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category]?.color}>
          {categories[item.category]?.title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category]?.expense ? 'red' : 'green'}>
          R$ {valorFormatadoEmReal}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <IoTrashBinOutline className="icon-trash" />
      </C.TableColumn>
    </C.TableLine>
  );
}