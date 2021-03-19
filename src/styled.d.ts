import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
        background: string,
        title: string,
        text: string,
        description: string,
        darkGreen: string,
        green: string,
        button: string,
        buttonHover: string,
        input: string,
        red: string,
        border: string,
        black: string,
        white: string,
        placeholder: string,
        blue: string,
        hover: string,
      },
  }
}