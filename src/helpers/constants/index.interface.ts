export interface IThemeColor {
  backgroundColor: string;
  fontColor: string;
  titleColor: string;
  highlighterColor: string;
  id: number;
}

export interface ITemplate {
  name: string;
  thumbnail: string;
  component: React.ComponentType;
}
