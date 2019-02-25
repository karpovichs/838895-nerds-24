var writeButton = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var user = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");;
var text = popup.querySelector("[name=text]");;

var isStorageUserSupport = true;
var storageUser = "";
try {
  storageUser = localStorage.getItem("user");
} catch (err) {
  isStorageUserSupport = false;
}

var isStorageEmailSupport = true;
var storageEmail = "";
try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageEmailSupport = false;
}

writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageUser) {
    user.value = storageUser;
    email.focus();
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    }
  } else {
    user.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!user.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageUserSupport) {
      localStorage.setItem("user", user.value);
    }
    if (isStorageEmailSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
