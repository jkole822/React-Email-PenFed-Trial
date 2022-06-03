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

export const DividerOne: FC = () => (
  <Row backgroundColor={colors.neutral100}>
    <Column>
      <GhostTable width={640}>
        <GhostCell>
          <img
            alt="alt_text"
            //@ts-ignore
            border="0"
            height="28"
            src="assets/images/dividerOne.png"
            style={imageStyles}
            width="640"
          />
          <Spacer height={25} />
        </GhostCell>
      </GhostTable>
    </Column>
  </Row>
);
