export enum ButtonVariantEnum {
  PRIMARY = 'PRIMARY',
  TRANSPARENT = 'TRANSPARENT',
  ROUNDED = 'ROUNDED',
}

export interface CustomButtonTypes {
  buttonVariant?: ButtonVariantEnum;
  disabled?: boolean;
  disableRipple?: boolean;
  textColor?: string;
  backgroundColor?: string;
  hoverTextColor?: string;
  hoverBackgroundColor?: string;
  disableTextColor?: string;
  disableBackgroundColor?: string;
  testId?: string;
}

export interface ButtonVariantStyles {
  textColor: string;
  backgroundColor: string;
  hoverTextColor: string;
  hoverBackgroundColor: string;
  disableTextColor: string;
  disableBackgroundColor: string;
  padding?: string;
}
