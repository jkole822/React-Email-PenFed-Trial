// React
import { FC } from "react";

// Components
import { Button } from "../../atoms/Button";
import { CardRow } from "../../molecules/CardRow";
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MainHeadline } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";

// Styles
import { colors } from "../../../lib/theme";
import { buttonStyles, columnStyles, mainHeadlineStyles } from "./styles";

export const ContentBlockFive: FC = () => {
  const bottomButton = (
    <>
      <Button href="#" styles={buttonStyles}>
        Find out more
      </Button>
      <Spacer height={20} />
    </>
  );

  const cards = (
    <>
      <CardRow
        cards={[
          {
            copy: "We work for you",
            icon: "assets/icons/heart.png",
            iconHeight: 46,
            iconWidth: 52,
          },
          {
            copy: "Applying for membership is easy",
            icon: "assets/icons/handshake.png",
            iconHeight: 40,
            iconWidth: 64,
          },
          {
            copy: "No military service required",
            icon: "assets/icons/people.png",
            iconHeight: 40,
            iconWidth: 70,
          },
        ]}
      />
      <Spacer height={20} />
    </>
  );

  const mainHeadline = (
    <>
      <Spacer height={20} />
      <MainHeadline styles={mainHeadlineStyles}>
        Member-owned and member-focused
      </MainHeadline>
      <Spacer height={25} />
    </>
  );

  const elements = [mainHeadline, cards, bottomButton];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row backgroundColor={colors.neutral300} key={index}>
        <Column styles={columnStyles}>
          <GhostTable width={640}>
            <GhostCell>{element}</GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return <>{renderRows()}</>;
};
