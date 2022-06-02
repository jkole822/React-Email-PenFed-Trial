import { colors } from "../../../lib/theme";

export const columnStyles = {
  overflow: "hidden",
  textAlign: "start",
};

export const imageStyles = {
  display: "inline-block",
  height: "auto",
  margin: "0 auto",
  maxWidth: "306px !important",
  width: "100%",
};

export const mainHeadlineStyles = {
  color: colors.primary200,
  fontSize: "28px",
  lineHeight: "32px",
  textAlign: "start",
};

export const mainHeadlineSpanStyles = {
  color: colors.primary300,
};

export const mobileImageStyles = {
  ...imageStyles,
  position: "relative",
  right: "-60px",
};

export const mobileTextContentStyles = {
  paddingLeft: "30px",
};

export const paragraphStyles = {
  textAlign: "start",
};

export const splitContentStyles = {
  display: "inline-block",
  verticalAlign: "top",
  width: "50%",
};
