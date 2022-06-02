// React
import { FC } from "react";

// Components
import { StoreIcon } from "../StoreIcon";
import { Row } from "../../atoms/Row";
import { Table } from "../../atoms/Table";

// Types
import { StoreIconRowProps } from "./types";

export const StoreIconRow: FC<StoreIconRowProps> = ({ icons }) => {
  const renderIcons = () =>
    icons.map((icon, index) => <StoreIcon {...icon} key={index} />);

  return (
    <Table>
      <Row backgroundColor="transparent">{renderIcons()}</Row>
    </Table>
  );
};
