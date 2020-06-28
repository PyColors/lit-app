import { LitElement, html, css } from 'lit-element';

import './package/shared/footer/src/MyFooter.js';
import './lit-app.js';
import './package/shared/header/src/MyHeader.js';

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
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
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
      <my-header></my-header>

      <lit-app></lit-app>

      <my-footer></my-footer>
    `;
  }
}
export { MyPage };
