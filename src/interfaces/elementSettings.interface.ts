export interface ContainerStyleSettings {
  backgroundColor?: string;

  padding?: string;
  margin?: string;
  width?: string;

  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;

  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export interface HeadingStyleSettings {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  letterSpacing?: string;

  padding?: string;
  margin?: string;
  width?: string;

  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
}

export interface ImageStyleSettings {
  display?: string;

  padding?: string;
  margin?: string;
  width?: string;
  height?: string;

  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export interface LinkStyleSettings {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;

  padding?: string;
  margin?: string;
}

export interface TextStyleSettings {
  display?: string;

  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;

  padding?: string;
  margin?: string;
  width?: string;
}

export interface HrStyleSettings {
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}

export interface ButtonStyleSettings {
  display?: string;

  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;

  padding?: string;
  margin?: string;
  width?: string;

  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;

  boxShadow?: string;
}
