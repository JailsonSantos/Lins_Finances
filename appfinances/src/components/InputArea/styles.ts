import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: 82%;
  font-size: 12px;

  @media (min-width: 768px) {
    width: 90%; 
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: darkblue;
  font-weight: bold;
`;

export const InputArea = styled.input`
  height: 20px;
  margin-bottom: 5px;
  border: 0;
  box-shadow: 0px 0px 5px #ccc;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: darkblue;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border: 0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 50px;
  width: 100px;
  cursor: pointer;

  &:hover{
    filter: brightness(0.9);
  }

  @media (min-width: 768px) {
    width: 130px;
    font-size: 16px;
  }
`;