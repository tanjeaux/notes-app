class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      div {
        padding: 22px 10px;
        color: white;
        background-color: #27374D;
        box-shadow: 0 4px 4px #27374da2;
      }

      .app-name {
        margin: 0;
        font-size: 1.5rem;
        text-align: left;
        margin-left: 25px;
      }

      @media screen and (max-width: 768px) {
        div {
          width: 100%;
        }
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div>
      <h1 class="app-name">NotesApp</h1>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
