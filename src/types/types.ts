import { JSX, MouseEventHandler } from 'react';

export interface IContentIcon {
  success: boolean;
  successIcon?: JSX.Element;
  error: boolean;
  errorIcon?: JSX.Element;
  children: JSX.Element;
}

export interface IProgressFab {
  processing?: boolean;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  sx?: Record<string, unknown>;
  size?: 'small' | 'medium' | 'large';
  tooltip?: string;
  displayPosition?: Record<string, unknown>;
  successIcon?: JSX.Element;
  errorIcon?: JSX.Element;
  delay?: number;
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onDelay?: () => void | undefined;
}

export interface ITextInput {
  id: string;
  caption: string;
  tooltip?: string | JSX.Element;
  contentType?: string;
  value: unknown;
  suffix?: string | JSX.Element;
  size?: 'xSmall' | 'small' | 'half' | 'big' | 'fill';
  big?: boolean;
  inside?: boolean;
  disabled?: boolean;
  button?: boolean;
  onChange?: (val: string | number) => void | undefined;
}

export interface IColor {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
    a: number;
  };
  hsv: {
    h: number;
    s: number;
    v: number;
    a: number;
  };
  oldHue: number;
  source: string;
}

export interface IColorsInput {
  id: string;
  caption: string;
  tooltip?: string | JSX.Element;
  value: string;
  size?: 'xSmall' | 'small' | 'half' | 'big' | 'fill';
  inside?: boolean;
  disabled?: boolean;
  onChange?: (val: string | number) => void | undefined;
}

export interface ICrossTextInput {
  id: string;
  caption: string;
  captions: string[];
  values: number[];
  tooltip: string;
  onChange: (val: Array<number>) => void | undefined;
}

export interface IListValue {
  text: string;
  value: string;
}

export interface IListInput {
  value: string;
  values: IListValue[];
  id: string;
  caption: string;
  tooltip?: string;
  size?: 'xSmall' | 'small' | 'half' | 'big' | 'fill';
  disabled?: boolean;
  onChange?: (val: string | number) => void | undefined;
}

export interface IRadioInput {
  id: string;
  caption: string;
  tooltip: string | JSX.Element;
  value: unknown;
  values: IListValue[];
  size?: 'small' | 'half' | 'big' | 'fill';
  big?: boolean;
  direction?: 'row' | 'column';
  onChange?: (value: unknown) => unknown;
}

export interface ISwitchInput {
  id: string;
  caption: string | JSX.Element;
  value: boolean | number;
  size?: 'small' | 'half' | 'big' | 'fill';
  disabled?: boolean;
  onChange?: (value: 0 | 1 | boolean) => void | undefined;
}
