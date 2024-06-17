class InputNote extends HTMLElement {
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
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div {
      width: 100%;
      max-width: 532px;
    }
    
    .container {
      width: 100%;
      max-width: 500px;
      border-radius: 10px;
      margin: 10px;
      background: #EEF5FF;
      padding: 10px;
      flex-grow: 1;
      height: fit-content;
    }
    
    .container-header {
      align-items: center;
      color: #27374D;
      border-bottom: 2px solid #27374D;
      width: 100%;
      max-width: 120px;
      padding: 5px;
      margin: auto;
      margin-top: 15px;
    }
    
    .form {
      display: flex;
      padding: 16px;
      flex-direction: column;
      height: fit-content;
      border-radius: 16px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      color: #27374D;
      margin-bottom: 4px;
      font-size: 20px;
      font-weight: bold;
    }
    
    .shadow {
      box-shadow: 0 3px 5px #27374da2;
    }
    
    input[type=text], textarea{
      background: #FFF7FC;
      border: 2px solid #27374D;
      border-radius: 8px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 8px;
      font-size: 18px;
    }
    
    .button-submit {
      width: fit-content;
      border-radius: 5px;
      padding: 12px 24px;
      border: 2px solid #27374D;
      background: #FFF7FC;
      color: #27374D;
      font-size: 20px;
      font-weight: bold;
      margin-top: 12px;
      align-self: center;
      cursor: pointer;
    }
    
    .button-submit:hover {
      background: #27374D;
      color: white;
    }
    
    input[type=text], textarea, .button-submit:focus {
      outline: none;
    }
    
    .text-center {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      container {
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
    this._shadowRoot
      .querySelector("#form")
      .addEventListener("submit", this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();

    const title = this._shadowRoot.querySelector("#title").value;
    const description = this._shadowRoot.querySelector("#description").value;

    const newNote = {
      id: `notes-${Math.random().toString(36).substring(2, 9)}`,
      title: title,
      body: description,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.dispatchEvent(new CustomEvent("note-added", { detail: newNote }));

    this._shadowRoot.querySelector("#title").value = "";
    this._shadowRoot.querySelector("#description").value = "";
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div>
      <div class="container shadow" id="add-note">
        <h2 class="container-header text-center">New Note</h2>
        <form class="form" action="#" id="form">
          <div class="form-group form-title">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required>
          </div>
          <div class="form-group form-desc">
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="6" required></textarea>
          </div>
          <input type="submit" value="ADD" name="submit" class="button-submit">
        </form>
      </div>
    </div>
    `;
  }
}

customElements.define("input-note", InputNote);
