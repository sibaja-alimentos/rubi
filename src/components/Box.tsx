import React from "react";
import styled from "styled-components";

interface IProps {
  height?: number;
}

const StyledBox = styled.div<IProps>`
  background-color: lightgray;
  &:after {
    content: "";
    display: block;
    padding-top: ${props => `${props.height}%`};
  }
`;

const Box: React.FC<IProps & React.HTMLAttributes<HTMLDivElement>> = ({
  height,
  ...props
}) => {
  return <StyledBox height={height} {...props} />;
};

export default Box;
