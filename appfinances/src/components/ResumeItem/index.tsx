import * as C from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeIem = ({ title, value, color }: Props) => {

  let valorFormatadoEmReal = value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}> R$ {valorFormatadoEmReal}</C.Info>
    </C.Container>
  );
}