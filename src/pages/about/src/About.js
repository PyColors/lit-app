import { LitElement, html, css } from 'lit-element';

class About extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  render() {
    return html`
      <main>
        <h1>About</h1>
      </main>
    `;
  }
}

export { About };
