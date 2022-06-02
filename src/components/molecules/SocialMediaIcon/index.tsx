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
import { SocialMediaIconProps } from "./types";

export const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  href,
  icon,
  iconWidth,
  iconHeight,
}) => (
  <Column
    customColumnSize={40}
    outerContainerStyles={{ verticalAlign: "middle" }}
    styles={{ height: "25px" }}
  >
    <GhostTable width={40}>
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
