import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
`;

export const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
  padding-top: 20px;
`;

export const HeaderText = styled.h1`
  color: white;
  font-size: 20px;
  padding: 20px;
  margin: 0px 10px;
  border: 1px solid #fff;
  border-radius: 50px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin: 0 190px;
  }
`;

export const Body = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto 50px auto;
  padding: 5px;
`;