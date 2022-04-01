import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ColorType = "red" | "orange" | "blue" | "green";

export interface RectButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon: IconProp;
  color: ColorType;
  disabled: boolean;
  clickHandler: () => void;
}
