import { css } from 'lit-element';

const white = css`white`;

export const buttonStyles = css`
  .blue-button {
    color: ${white};
    background-color: blue;
  }
  .blue-button:disabled {
    background-color: grey;
  }
`;
