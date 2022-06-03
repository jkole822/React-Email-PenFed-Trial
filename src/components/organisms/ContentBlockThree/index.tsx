// React
import { FC } from "react";

// Components
import { Button } from "../../atoms/Button";
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { HiddenMSO } from "../../atoms/HiddenMSO";
import { MainHeadline, Paragraph } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import {
  imageStyles,
  mainHeadlineStyles,
  mainHeadlineSpanStyles,
  mobileTextContentStyles,
  paragraphStyles,
  splitContentStyles,
  columnStyles,
} from "./styles";

// Types
import { AlignEnum, VAlignEnum } from "../../../lib/typescript";

export const ContentBlockThree: FC = () => {
  const bottomButton = (
    <>
      <Button
        alignment={AlignEnum.left}
        href="#"
        innerContainerStyles={{ textAlign: "start" }}
      >
        Learn More
      </Button>
      <Spacer height={25} />
    </>
  );

  const bottomParagraph = (
    <>
      <Paragraph styles={paragraphStyles}>
        Secure a lower monthly payment on your next car purchase or refinance.
      </Paragraph>
      <Spacer height={10} />
    </>
  );

  const image = (
    <img
      alt="alt_text"
      //@ts-ignore
      border="0"
      height="222"
      src="assets/images/car-trans.png"
      style={imageStyles}
      width="290"
    />
  );

  const mainHeadline = (
    <>
      <MainHeadline styles={mainHeadlineStyles}>
        Great auto loan{" "}
        <span style={mainHeadlineSpanStyles}>
          rates for every type of shopper.
        </span>
      </MainHeadline>
      <Spacer height={20} />
    </>
  );

  const desktopSplitContent = (
    <Table>
      <tr>
        <td
          className="display-cell-desktop"
          style={splitContentStyles}
          width="50%"
        >
          {mainHeadline}
          {bottomParagraph}
          {bottomButton}
        </td>
        <td
          className="display-cell-desktop"
          style={splitContentStyles}
          width="50%"
        >
          {image}
        </td>
      </tr>
    </Table>
  );

  const mobileSplitContent = (
    <HiddenMSO>
      <Table className="display-table-mobile">
        <tr>
          <td
            style={{ ...splitContentStyles, ...mobileTextContentStyles }}
            width="50%"
          >
            {mainHeadline}
          </td>
          <td style={splitContentStyles} width="50%">
            {image}
          </td>
        </tr>
      </Table>
    </HiddenMSO>
  );

  const mobileContent = (
    <HiddenMSO>
      <Table className="display-table-mobile">
        <tr>
          <td style={mobileTextContentStyles} width="100%">
            {bottomParagraph}
            {bottomButton}
          </td>
        </tr>
      </Table>
    </HiddenMSO>
  );
  const elements = [desktopSplitContent, mobileSplitContent, mobileContent];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row
        backgroundColor={colors.neutral100}
        key={index}
        className={index !== 0 ? "display-row-mobile" : ""}
      >
        <Column
          alignment={AlignEnum.left}
          verticalAlignment={VAlignEnum.top}
          styles={columnStyles}
        >
          <GhostTable verticalAlignment={VAlignEnum.top} width={640}>
            <GhostCell verticalAlignment={VAlignEnum.top}>{element}</GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return <>{renderRows()}</>;
};
