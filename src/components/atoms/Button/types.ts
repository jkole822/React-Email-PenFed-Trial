import { AllHTMLAttributes } from "react";
import type { AlignType, VAlignType } from "../../../lib/typescript";

export interface ButtonProps extends AllHTMLAttributes<HTMLAnchorElement> {
  alignment?: AlignType;
  containerStyles?: any;
  href: string;
  innerContainerStyles?: any;
  styles?: any;
  verticalAlignment?: VAlignType;
}
