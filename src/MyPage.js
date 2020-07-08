import { LitElement, html, css } from 'lit-element';

import './package/shared/header-element/header-element.js';
import './package/shared/footer-element/footer-element.js';

class MyPage extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #fff;
        margin: 0 auto;
        text-align: center;
        background: #ff6f91;
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <header-element></header-element>
      Content
      <footer-element></footer-element>
    `;
  }
}
export { MyPage };
