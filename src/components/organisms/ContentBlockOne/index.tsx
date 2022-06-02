// React
import { FC } from "react";

// Components
import { Button } from "../../atoms/Button";
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { HiddenMSO } from "../../atoms/HiddenMSO";
import { MainHeadline, Paragraph, SubHeadline } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import {
  columnStyles,
  imageStyles,
  mainHeadlineStyles,
  mainHeadlineSpanStyles,
  mobileTextContentStyles,
  paragraphStyles,
  splitContentStyles,
  subHeadlineStyles,
} from "./styles";

// Types
import { AlignEnum, VAlignEnum } from "../../../lib/typescript";

export const ContentBlockOne: FC = () => {
  const bottomButton = (
    <Button
      alignment={AlignEnum.left}
      href="#"
      innerContainerStyles={{ textAlign: "start" }}
    >
      Join Now
    </Button>
  );

  const bottomParagraph = (
    <>
      <Paragraph styles={paragraphStyles}>
        It only takes a few minutes and no military affiliation is required.
      </Paragraph>
      <Spacer height={10} />
    </>
  );

  const image = (
    <img
      alt="alt_text"
      //@ts-ignore
      border="0"
      height="315"
      src="assets/images/circlePeople.png"
      //@ts-ignore
      style={imageStyles}
      width="315"
    />
  );

  const mainHeadline = (
    <>
      <MainHeadline styles={mainHeadlineStyles}>
        Fname, Better products, fewer fees, and{" "}
        <span style={mainHeadlineSpanStyles}>helpful online resources</span>
      </MainHeadline>
      <Spacer height={20} />
    </>
  );

  const subHeadline = (
    <>
      <SubHeadline styles={subHeadlineStyles}>
        Become a member today.
      </SubHeadline>
      <Spacer height={10} />
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
          {subHeadline}
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
            {subHeadline}
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

  return (
    <>
      <Spacer height={35} />
      <Table>{renderRows()}</Table>
      <Spacer height={25} />
    </>
  );
};
