import {ReactChild, ReactChildren} from "react";

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary'
}

interface IButton {
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void
}

export interface TCommonButton extends IButton {
  children?: ReactChildren | ReactChild;
  type?: ButtonTypes
}

export interface TSubmitButton extends IButton {
  children?: string;
}