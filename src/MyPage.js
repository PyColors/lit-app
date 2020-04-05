import { LitElement, html, css } from 'lit-element';

import './my-header';
import './lit-app';
import './my-element';
import './my-footer';

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
    return {
      prop1: { type: String },
      prop2: { type: Number },
      prop3: { type: Boolean },
      prop4: { type: Array },
      prop5: { type: Object },
    };
  }

  constructor() {
    super();
    this.prop1 = 'Hello World';
    this.prop2 = 5;
    this.prop3 = true;
    this.prop4 = [1, 2, 3];
    this.prop5 = { stuff: 'hi', otherStuff: 'wow' };
  }

  render() {
    return html`
      <my-header></my-header>

      <lit-app></lit-app>

      <my-element>
        <p>nope.</p>

        <p>prop1: ${this.prop1}</p>
        <p>prop2: ${this.prop2}</p>
        <p>prop3: ${this.prop3}</p>

        <p>
          prop4:
          ${this.prop4.map(
            (item, index) =>
              html`
                <span>[${index}]:${item}&nbsp;</span>
              `,
          )}
        </p>

        <p>
          prop5:
          ${Object.keys(this.prop5).map(
            item =>
              html`
                <span>${item}: ${this.prop5[item]}&nbsp;</span>
              `,
          )}
        </p>
      </my-element>

      <my-footer></my-footer>
    `;
  }
}
export { MyPage };
