// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { Link } from "../../atoms/Typography";

// Styles
import { iconStyles } from "./styles";

// Types
import { StoreIconProps } from "./types";

export const StoreIcon: FC<StoreIconProps> = ({
  href,
  icon,
  iconHeight,
  iconWidth,
}) => (
  <Column customColumnSize={140}>
    <GhostTable width={140}>
      <GhostCell>
        <Link href={href}>
          <img
            alt="alt_text"
            //@ts-ignore
            border="0"
            height={iconHeight}
            src={icon}
            style={{ ...iconStyles, maxWidth: `${iconWidth}px !important` }}
            width={iconWidth}
          />
        </Link>
      </GhostCell>
    </GhostTable>
  </Column>
);
