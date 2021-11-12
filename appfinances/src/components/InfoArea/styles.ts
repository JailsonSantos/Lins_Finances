import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82%;
  font-size: 12px;

  @media (min-width: 768px) {
    width: 90%; 
    font-size: 16px;
    margin-top: -40px;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 5px;
`;

export const MonthArrow = styled.div`
  text-align: center;
  font-size: 25px;
  cursor: pointer;

  &:hover{
    color: darkblue;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 2;
    display: flex;  
    flex-direction: row;
  }
`;