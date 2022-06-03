// React
import { FC, Fragment } from "react";

// Components
import { Column } from "../../atoms/Column";
import { Container } from "../../atoms/Container";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MenuLink, Paragraph } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { SocialMediaIconRow } from "../../molecules/SocialMediaIconRow";
import { StoreIconRow } from "../../molecules/StoreIconRow";

// Styles
import { colors } from "../../../lib/theme";
import {
  columnStyles,
  dividerStyles,
  imageStyles,
  innerContainerStyles,
  largeParagraphStyles,
  menuLinkStyles,
  paragraphStyles,
} from "./styles";

export const Footer: FC = () => {
  const renderLinks = () => {
    const links = [
      { href: "#", title: "Privacy Policy" },
      { href: "#", title: "Disclaimers" },
    ];

    return links.map((link, index) => (
      <Fragment key={index}>
        <MenuLink href={link.href} styles={menuLinkStyles}>
          {link.title}
        </MenuLink>
        {index !== links.length - 1 ? <span style={dividerStyles}>|</span> : ""}
      </Fragment>
    ));
  };

  const bottomIcons = (
    <>
      <img
        alt="alt_text"
        //@ts-ignore
        border="0"
        height="47"
        src="assets/icons/footerIcons.png"
        style={imageStyles}
        width="124"
      />
      <Spacer height={30} color={colors.neutral300} />
    </>
  );

  const sectionOne = (
    <>
      <MenuLink href="#" styles={menuLinkStyles}>
        View as web page
      </MenuLink>
      <Paragraph styles={paragraphStyles}>
        To receive any advertised product, you must become a member of PenFed
        Credit Union.
      </Paragraph>
      <Paragraph styles={paragraphStyles}>
        Questions or comments?{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          Contact us.
        </MenuLink>
      </Paragraph>
      <Paragraph styles={paragraphStyles}>
        This email has been sent to: XXX. To change your email address, please
        log on at{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          PenFed.org
        </MenuLink>
        . This will ensure your official records are updated.
      </Paragraph>
      <Spacer height={10} color={colors.neutral300} />
    </>
  );

  const sectionTwo = (
    <>
      {renderLinks()}
      <Spacer height={10} color={colors.neutral300} />
    </>
  );

  const sectionThree = (
    <>
      <Paragraph styles={paragraphStyles}>
        To UNSUBSCRIBE use{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          this link
        </MenuLink>
        . Please do not reply to this automated message.
      </Paragraph>
      <Spacer height={10} color={colors.neutral300} />
    </>
  );

  const sectionFour = (
    <>
      <Paragraph styles={paragraphStyles}>
        PenFed Credit Union, 7940 Jones Branch Dr, McLean, VA 22102
      </Paragraph>
      <Paragraph styles={paragraphStyles}>
        © 2022 Pentagon Federal Credit Union
      </Paragraph>
      <Spacer height={10} color={colors.neutral300} />
    </>
  );

  const socialMediaIcons = (
    <>
      <SocialMediaIconRow
        icons={[
          {
            href: "#",
            icon: "assets/icons/facebook.png",
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            href: "#",
            icon: "assets/icons/linkedin.png",
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            href: "#",
            icon: "assets/icons/twitter.png",
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            href: "#",
            icon: "assets/icons/instagram.png",
            iconWidth: 24,
            iconHeight: 24,
          },
          {
            href: "#",
            icon: "assets/icons/youtube.png",
            iconWidth: 24,
            iconHeight: 24,
          },
        ]}
      />
      <Spacer height={25} color={colors.neutral300} />
    </>
  );

  const socialMediaParagraph = (
    <>
      <Paragraph styles={largeParagraphStyles}>
        Follow PenFed on Social Media
      </Paragraph>
      <Spacer height={5} color={colors.neutral300} />
    </>
  );

  const storeIcons = (
    <>
      <StoreIconRow
        icons={[
          {
            href: "#",
            icon: "assets/images/googlePlay.png",
            iconHeight: 39,
            iconWidth: 131,
          },
          {
            href: "#",
            icon: "assets/images/appStore.png",
            iconHeight: 39,
            iconWidth: 132,
          },
        ]}
      />
      <Spacer height={25} color={colors.neutral300} />
    </>
  );

  const topParagraph = (
    <>
      <Spacer height={25} color={colors.neutral300} />
      <Paragraph styles={largeParagraphStyles}>
        Download the PenFed App
      </Paragraph>
      <Spacer height={5} color={colors.neutral300} />
    </>
  );

  const elements = [
    topParagraph,
    storeIcons,
    socialMediaParagraph,
    socialMediaIcons,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    bottomIcons,
  ];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row backgroundColor={colors.neutral300} key={index}>
        <Column>
          <GhostTable width={640}>
            <GhostCell>
              <Container
                styles={innerContainerStyles}
                columnStyles={columnStyles}
              >
                {element}
              </Container>
            </GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return <>{renderRows()}</>;
};
