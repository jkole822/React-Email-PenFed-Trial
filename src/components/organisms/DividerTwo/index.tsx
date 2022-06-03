// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { Row } from "../../atoms/Row";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import { imageStyles } from "./styles";

export const DividerTwo: FC = () => (
  <Row backgroundColor={colors.neutral300}>
    <Column>
      <GhostTable width={640}>
        <GhostCell>
          <img
            alt="alt_text"
            //@ts-ignore
            border="0"
            height="9"
            src="assets/images/dividerTwo.png"
            style={imageStyles}
            width="640"
          />
        </GhostCell>
      </GhostTable>
    </Column>
  </Row>
);
