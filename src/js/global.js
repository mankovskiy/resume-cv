import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { useTheme } from '@emotion/react';
// import { theme } from './theme';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        html,
        body {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: -0.5px;
          background-color: ${theme.bcgColor};
          color: ${theme.textColor};
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          padding: 0px;
          margin: 0px;
          border: none;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :focus,
        :active {
          outline: none;
        }

        a:focus,
        a:active {
          outline: none;
        }

        /* Links */

        a,
        a:link,
        a:visited {
          /* color: inherit; */
          text-decoration: none;
          /* display: inline-block; */
        }

        a:hover {
          /* color: inherit; */
          text-decoration: none;
        }

        /* Common */

        aside,
        nav,
        footer,
        header,
        section,
        main {
          display: block;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-size: inherit;
          font-weight: inherit;
        }

        ul,
        ul li {
          list-style: none;
        }

        img {
          vertical-align: top;
        }

        img,
        svg {
          max-width: 100%;
          height: auto;
        }

        address {
          font-style: normal;
        }

        /* Form */

        input,
        textarea,
        button,
        select {
          font-family: inherit;
          font-size: inherit;
          color: inherit;
          background-color: transparent;
        }

        input::-ms-clear {
          display: none;
        }

        button,
        input[type='submit'] {
          display: inline-block;
          box-shadow: none;
          background-color: transparent;
          background: none;
          cursor: pointer;
        }

        input:focus,
        input:active,
        button:focus,
        button:active {
          outline: none;
        }

        button::-moz-focus-inner {
          padding: 0;
          border: 0;
        }

        label {
          cursor: pointer;
        }

        legend {
          display: block;
        }
      `}
    />
  );
};
