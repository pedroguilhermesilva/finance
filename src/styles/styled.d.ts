import "styled-components";

// import { normal as normalTheme } from "../styles/themes/normal";

// export type theme = typeof normalTheme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      orange: string;
      purple: string;
      gray: string;
      green: string;
      red: string;
      darkGrey: string;
    };
    fontSizes: {
      default: string;
      large: string;
      small: string;
      tiny: string;
    };
  }
}
