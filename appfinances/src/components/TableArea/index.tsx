import * as C from './styles';
// Types
import { Item } from '../../types/Item';
// Components
import { TableItem } from '../TableItem';

type Props = {
  list: Item[];
}

export const TableArea = ({ list }: Props) => {
  return (
    <>
      {list.length > 0 &&
        <C.Table>
          <C.Thead>
            <C.Tr>
              <C.TableHeadColumn width={100}>DATA</C.TableHeadColumn>
              <C.TableHeadColumn width={100}>CATEGORIA</C.TableHeadColumn>
              <C.TableHeadColumn width={120} >TÍTULO</C.TableHeadColumn>
              <C.TableHeadColumn width={110}>VALOR</C.TableHeadColumn>
              <C.TableHeadColumn width={20}>#</C.TableHeadColumn>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {list.map((item, index) => (
              <TableItem key={index} item={item} />
            ))}
          </C.Tbody>
        </C.Table>}
    </>
  );
}