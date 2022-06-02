// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import { imageStyles } from "./styles";

export const ThinDivider: FC = () => (
  <Table>
    <Row backgroundColor={colors.neutral100}>
      <Column>
        <GhostTable width={640}>
          <GhostCell>
            <img
              alt="alt_text"
              //@ts-ignore
              border="0"
              height="2"
              src="assets/images/thinDivider.png"
              style={imageStyles}
              width="200"
            />
            <Spacer height={20} />
          </GhostCell>
        </GhostTable>
      </Column>
    </Row>
  </Table>
);
