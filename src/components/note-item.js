import notesData from "../data/notes-data.js";

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      .container {
        padding: 3%;
      }

      .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5%;
        margin-top: 1rem;
        margin-bottom: 20rem;
        justify-items: center;
        justify-content: center;
      }

      .card-note {
        display: block;
        background: #EEF5FF;
        border-radius: 5px;
        box-shadow: 0 3px 5px #27374da2;
        width: 300px;
        padding: 20px;
        height: fit-content;
      }
      
      .note-info {
        padding: 20px;
        margin: -20px;
        border: 2px solid #222831;
        border-radius: 5px;
        height: 200px;
        height: fit-content;
      }
      
      .note-title h2 {
        font-weight: bold;
      }
      
      .note-description {
        margin-top: 10px;
      }

      .note-date {
        margin-top: 2rem;
        font-size: 12px;
        font-style: italic;
        text-align: right;
      }

      .note-delete {
        margin-top: 1rem;
        align-self: right;
      }

      .button-delete {
        color: #fff;
        background-color: rgb(255, 72, 72);
        border-radius: 5px;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
      }

      .button-delete:hover {
        background-color: darkred;
      }

      @media screen and (max-width: 768px) {
        .list {
          justify-items: center;
          justify-content: center;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="container">
        <div class="list">
        ${this._note
          .map(
            (note) => `
          <div class="card-note">
            <div class="note-info">
              <div class="note-title">
                <h2>${note.title}</h2>
              </div>
              <div class="note-description">
                <p>${note.body}</p>
              </div>
              <div class="note-date">
                <p>${new Date(note.createdAt).toLocaleString()}</p>
              </div>
              <div class="note-delete">
                <button type="button" class="button-delete" id=""${note.id}>Delete</button>
              </div>
            </div>
          </div>
          `,
          )
          .join("")}
        </div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
