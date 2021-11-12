import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  margin-top: 20px;
  width: 94%;
  font-size: 10px;

  @media (min-width: 768px) {
    width: 94%; 
    padding: 20px;
    font-size: 16px;
  }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
  color: darkblue;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Tbody = styled.tbody``;