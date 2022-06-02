// React
import { FC } from "react";

// Components
import { Column } from "../Column";
import { GhostCell } from "../GhostCell";
import { GhostTable } from "../GhostTable";
import { Row } from "../Row";
import { Table } from "../Table";

// Types
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = ({
  alignment,
  children,
  columnStyles,
  styles,
  verticalAlignment,
  ...rest
}) => (
  <Table styles={styles}>
    <Row backgroundColor="transparent">
      <Column styles={columnStyles}>
        <GhostTable
          alignment={alignment}
          verticalAlignment={verticalAlignment}
          width="auto"
        >
          <GhostCell
            alignment={alignment}
            verticalAlignment={verticalAlignment}
            {...rest}
          >
            {children}
          </GhostCell>
        </GhostTable>
      </Column>
    </Row>
  </Table>
);
