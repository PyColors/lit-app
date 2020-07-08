import { LitElement, html, css } from 'lit-element';

class Login extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  render() {
    return html`
      <main>
        <h1>Login</h1>
      </main>
    `;
  }
}

export { Login };
