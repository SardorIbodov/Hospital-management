import { styled } from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #0098b9 0%, rgba(255, 255, 255, 0) 100%);
`;

const Logo = styled.img``;

const Content = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 200px;
  @media screen and (max-width: 900px) {
    row-gap: 100px;
  }
  @media screen and (max-width: 700px) {
    align-items: center;
    width: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  @media screen and (max-width: 700px) {
    align-items: center;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 423px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  color: #fff;
  outline: none;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

const Button = styled.button`
  width: 175px;
  padding: 15px 0;
  border: none;
  border-radius: 2px;
  background: #079bbb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export { Wrapper, Logo, Content, ContentLeft, Form, Image, Input, Button };
