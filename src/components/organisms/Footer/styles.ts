import { colors } from "../../../lib/theme";

export const columnStyles = {
  textAlign: "center",
};

const commonImageStyles = {
  display: "block",
  height: "auto",
  margin: "0 auto",
  width: "100%",
};

const commonStyles = {
  fontSize: "9px",
  lineHeight: "17px",
};

export const dividerStyles = {
  fontSize: "12px",
};

export const imageStyles = {
  ...commonImageStyles,
  maxWidth: "124px !important",
};

export const innerContainerStyles = {
  margin: "0 auto",
  maxWidth: "480px",
};

export const largeParagraphStyles = {
  fontSize: "12px",
  lineHeight: "17px",
  textAlign: "center",
};

export const menuLinkStyles = {
  ...commonStyles,
  color: colors.primary100,
  display: "inline-block",
  padding: "4px",
  textDecoration: "underline",
};

export const paragraphStyles = {
  ...commonStyles,
  textAlign: "center",
};
