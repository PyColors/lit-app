import { LitElement, html, css } from 'lit-element';

class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #fff;
        margin: 0 auto;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <footer>
        <div>Footer</div>
      </footer>
    `;
  }
}

export { Footer };
