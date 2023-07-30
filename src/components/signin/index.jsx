import React from "react";
import {
  Wrapper,
  Logo,
  Content,
  Form,
  Image,
  ContentLeft,
  Input,
  Button,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import main from "../../assets/images/main.png";

export const Signin = () => {
  return (
    <Wrapper>
      <Content>
        <ContentLeft>
          <Logo src={logo} alt="Logo" />
          <Form>
            <Input placeholder="Login" />
            <Input placeholder="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </ContentLeft>
        <Image src={main} alt="Main image" />
      </Content>
    </Wrapper>
  );
};

export default Signin;
