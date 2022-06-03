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
  mobileImageStyles,
  mobileTextContentStyles,
  paragraphStyles,
  splitContentStyles,
  columnStyles,
} from "./styles";

// Types
import { AlignEnum, VAlignEnum } from "../../../lib/typescript";

export const ContentBlockTwo: FC = () => {
  const bottomButton = (
    <>
      <Button
        alignment={AlignEnum.left}
        href="#"
        innerContainerStyles={{ textAlign: "start" }}
      >
        Open Now
      </Button>
      <Spacer height={25} />
    </>
  );

  const bottomParagraph = (
    <>
      <Paragraph styles={paragraphStyles}>
        Enjoy no monthly fees or minimum balance requirements.
      </Paragraph>
      <Spacer height={10} />
    </>
  );

  const image = (
    <img
      alt="alt_text"
      //@ts-ignore
      border="0"
      height="179"
      src="assets/images/wallet-trans.png"
      style={imageStyles}
      width="306"
    />
  );

  const mobileImage = (
    <img
      alt="alt_text"
      //@ts-ignore
      border="0"
      height="179"
      src="assets/images/wallet-trans.png"
      //@ts-ignore
      style={mobileImageStyles}
      width="306"
    />
  );

  const mainHeadline = (
    <>
      <MainHeadline styles={mainHeadlineStyles}>
        Checking accounts{" "}
        <span style={mainHeadlineSpanStyles}>built with you in mind.</span>
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
          {image}
        </td>
        <td className="display-cell-desktop" style={splitContentStyles}>
          {mainHeadline}
          {bottomParagraph}
          {bottomButton}
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
            {mobileImage}
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
