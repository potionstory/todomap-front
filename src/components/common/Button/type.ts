import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ColorType = "red" | "orange" | "blue" | "green";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color: ColorType;
  icon: IconProp;
  clickHandler: () => void;
}
