import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  color: ${props => props.theme.colors.blue};
  border-radius: 50rem;
  border: none;
  padding: 20px 50px;
  letter-spacing: 0.2em;
`;

export default Button;
