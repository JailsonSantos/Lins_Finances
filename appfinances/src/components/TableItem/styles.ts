import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 5px 0;

  .icon-trash{
    color: darkblue;
    cursor: pointer;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  width: 50px;
  color: #fff;
  background-color: ${props => props.color};

  @media (min-width: 768px){
    width: 100px;
  }
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color}
`;