// React
import { FC } from "react";

// Components
import { Card } from "../Card";
import { Row } from "../../atoms/Row";
import { Table } from "../../atoms/Table";

// Types
import { CardRowProps } from "./types";

export const CardRow: FC<CardRowProps> = ({ cards }) => {
  const renderCards = () =>
    cards.map(({ ...props }, index) => (
      <Card displaySpacer={index !== cards.length - 1} {...props} key={index} />
    ));

  return (
    <Table>
      <Row backgroundColor="transparent">{renderCards()}</Row>
    </Table>
  );
};
