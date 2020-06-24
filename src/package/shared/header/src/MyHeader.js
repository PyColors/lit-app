import { LitElement, css, html } from 'lit-element';
import { buttonStyles } from '../../../../button-styles.js';

class MyHeader extends LitElement {
  static get styles() {
    return [
      buttonStyles,
      css`
        :host {
          display: block;
          border-bottom: 1px solid black;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div>Header</div>
        <button class="blue-button">one button</button>
      </header>
    `;
  }
}

export { MyHeader };
