import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';

import './pages/login/login-element.js';

class RoutesElement extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/login', component: 'login-element' },

    ]);
  }

   render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}

export { RoutesElement };