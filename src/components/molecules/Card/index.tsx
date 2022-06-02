// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { Paragraph } from "../../atoms/Typography";

// Styles
import { columnStyles, iconStyles, paragraphStyles } from "./styles";

// Types
import { VAlignEnum } from "../../../lib/typescript";
import { CardProps } from "./types";
import { ColumnEnum } from "../../../lib/typescript";
import { HiddenMSO } from "../../atoms/HiddenMSO";
import { Spacer } from "../../atoms/Spacer";

export const Card: FC<CardProps> = ({
  copy,
  displaySpacer,
  icon,
  iconHeight,
  iconWidth,
}) => (
  <Column
    verticalAlignment={VAlignEnum.top}
    columnSize={ColumnEnum.oneThird}
    outerContainerStyles={columnStyles}
  >
    <GhostTable>
      <GhostCell verticalAlignment={VAlignEnum.top}>
        <img
          alt="alt_text"
          //@ts-ignore
          border="0"
          height={iconHeight}
          src={icon}
          style={{ ...iconStyles, maxWidth: `${iconWidth}px !important` }}
          width={iconWidth}
        />
        <Spacer height={10} />
        <Paragraph styles={paragraphStyles}>{copy}</Paragraph>
        {displaySpacer && (
          <HiddenMSO>
            <Spacer className="display-block-mobile" height={30} />
          </HiddenMSO>
        )}
      </GhostCell>
    </GhostTable>
  </Column>
);
