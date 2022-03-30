export type ColorType = "red" | "orange" | "blue" | "green";
export type SizingType = "small" | "medium" | "big";

export interface CheckBoxProps extends React.HTMLProps<HTMLButtonElement> {
  item: {
    id: string;
    color: ColorType;
    isChecked: boolean;
  };
  sizing: SizingType;
  clickHandler: (id: string) => void;
}
