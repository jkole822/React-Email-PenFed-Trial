import { AllHTMLAttributes } from "react";

export interface RowProps extends AllHTMLAttributes<HTMLElement> {
  backgroundColor: string;
  className?: any;
  innerContainerStyles?: any;
  outerContainerStyles?: any;
}
