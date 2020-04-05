import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <slot id="one"></slot>
      </div>
    `;
  }
}

export { MyElement };
