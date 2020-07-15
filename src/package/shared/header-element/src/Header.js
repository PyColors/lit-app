import { LitElement, css, html } from 'lit-element';

class Header extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          color: white;
          border-bottom: 1px solid black;
          text-shadow: 1px 1px 0px rgba(150, 150, 150, 1);
          transition: transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0.15s,
            opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0.15s;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="login">Login</a>
          <a href="register">Register</a>
        </nav>
      </header>
    `;
  }
}

export { Header };
