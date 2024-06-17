import "./styles/style.css";
import "./components/index.js";
import notesData from "./data/notes-data.js";
import { animateStyle } from "motion";

const baseUrl = "https://notes-api.dicoding.dev/v2";

const getNote = () => {
  fetch(`${baseUrl}/notes`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        console.log(responseJson.data);
        renderAllNotes(responseJson.data);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

const addNote = (note) => {
  showLoadingIndicator();
  fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345",
    },
    body: JSON.stringify({ title: note.title, body: note.body }),
  })
    .then((response) => {
      console.log("addNote", response);
      return response.json();
    })
    .then((responseJson) => {
      hideLoadingIndicator();
      showResponseMessage(responseJson.message);
      if (!responseJson.error) {
        getNote();
      }
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const removeNote = (noteId) => {
  debugger;
  showLoadingIndicator();
  fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      hideLoadingIndicator();
      showResponseMessage(responseJson.message);
      getNote();
    })
    .catch((error) => {
      hideLoadingIndicator();
      showResponseMessage(error);
    });
};

const renderAllNotes = (notes) => {
  const noteItems = document.querySelectorAll("note-item");

  noteItems.forEach((noteItem) => {
    noteItem.note = notes;
    const shadowRoot = noteItem.shadowRoot;

    const cardNotes = shadowRoot.querySelectorAll(".card-note");
    cardNotes.forEach((cardNote) => {
      const deleteButton = cardNote.querySelector(".button-delete");

      if (deleteButton) {
        deleteButton.addEventListener("click", () => {
          const index = Array.from(cardNote.parentNode.children).indexOf(cardNote);
          const noteId = noteItem.note[index].id;
          removeNote(noteId);
        });
      }
    });
  });
};


const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

document.addEventListener("DOMContentLoaded", () => {
  getNote();

  const inputNoteElement = document.querySelector("input-note");
  if (inputNoteElement) {
    inputNoteElement.addEventListener("note-added", (event) => {
      const newNote = event.detail;
      addNote(newNote);
    });
  }
});

const showLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  const textLoading = document.querySelector(".text-loading");
  loadingIndicator.style.display = "flex";
};

const hideLoadingIndicator = () => {
  const loadingIndicator = document.querySelector(".loadingIndicator");
  loadingIndicator.style.display = "none";
};

const loadingIndicator = document.querySelector(".loadingIndicator");


loadingIndicator.addEventListener("transitionstart", function () {
  animateStyle(loadingIndicator, {
    opacity: [0, 1],
    duration: 300,
    easing: "ease-in-out"
  });
});

loadingIndicator.addEventListener("transitionend", function () {
  animateStyle(loadingIndicator, {
    opacity: [1, 0],
    duration: 300,
    easing: "ease-in-out"
  });
});