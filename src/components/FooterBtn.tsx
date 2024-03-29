import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  z-index: 99;
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  button:last-child {
    margin-left: 15px;
  }
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
  box-shadow: 0 0 5px ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 900;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.bgColor};
    cursor: pointer;
  }
`;

export default function ScrollBtn() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const location = useLocation();

  return (
    <Container>
      {location.pathname === "/" ? null : (
        <Btn as={Link} to="/">
          🏠
        </Btn>
      )}
      <Btn onClick={scrollUp}>⬆</Btn>
    </Container>
  );
}
