import { LitElement, css, html } from 'lit-element';

class Header extends LitElement {
  static get styles() {
    return [
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
      </header>
    `;
  }
}

export { Header };
