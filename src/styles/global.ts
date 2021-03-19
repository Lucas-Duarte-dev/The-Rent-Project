import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1000px) {
        html: {
            font-size: 95%;
        }
    }
    @media (max-width: 700px) {
        html: {
            font-size: 83%;
        }
    }

    *, body, html {
        font-family: Roboto, sans-serif;
    }

    input, button {
        border: none;
    }

    button {
        cursor: pointer;
    }

    *, a {
        text-decoration: none;
    }
`;
