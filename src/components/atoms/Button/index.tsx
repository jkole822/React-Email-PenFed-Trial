// React
import { FC } from "react";

// Components
import { Container } from "../Container";
import { Link } from "../Typography";

// Styles
import { buttonStyles } from "./styles";

// Types
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  alignment,
  children,
  containerStyles,
  href,
  innerContainerStyles,
  styles,
  verticalAlignment,
}) => (
  <Container
    alignment={alignment}
    backgroundColor={buttonStyles.backgroundColor}
    color={buttonStyles.color}
    columnStyles={innerContainerStyles}
    padding={buttonStyles.padding}
    styles={containerStyles}
    verticalAlignment={verticalAlignment}
    width="auto"
  >
    <Link href={href} styles={{ ...buttonStyles, ...styles }}>
      {children}
    </Link>
  </Container>
);
