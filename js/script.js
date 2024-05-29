const dataPopup = document.querySelectorAll("[data-popup]");
dataPopup.forEach((popupBtn) => {
  const requstedClass = popupBtn.getAttribute("class");
  const openPopupBtn = requstedClass.replace(/\s/g, ".");
  const neededPopup = document.querySelectorAll(`.${popupBtn.dataset.popup}`);
  const closePopupBtn = document.querySelectorAll("[data-close]");
  function openPopup(popupSelector) {
    const popupOpenSelector = document.querySelectorAll(".open");
    if (popupOpenSelector) {
      popupOpenSelector.forEach((modal) => modal.classList.remove("open"));
    }
    popupSelector.forEach((modal) => modal.classList.add("open"));
    document.body.classList.add("noscroll");
  }

  function clickedPopup(popupSelector, btnOpenPopup) {
    const btnPopup = document.querySelectorAll(`.${btnOpenPopup}`);
    btnPopup.forEach((btns) =>
      btns.addEventListener("click", () => {
        openPopup(popupSelector);
      })
    );
  }

  clickedPopup(neededPopup, openPopupBtn);

  function removePopup(popupSelector, btnClosePopup) {
    popupSelector.forEach((modal) =>
      modal.addEventListener("click", (e) => {
        btnClosePopup.forEach((close) => {
          if (e.target == close || !e.target.closest(".popup__content")) {
            closePopup(popupSelector);
          }
        });
      })
    );

    document.addEventListener("keydown", (e) => {
      e.which === 27 && closePopup();
    });
  }

  removePopup(neededPopup, closePopupBtn);

  function closePopup() {
    neededPopup.forEach((modal) => modal.classList.remove("open"));
    document.body.classList.remove("noscroll");
  }
});

//////////////////////////////////////////////////

let burger = document
  .querySelector(".burger-btn")
  .addEventListener("click", function () {
    list.classList.toggle("active");
    this.classList.toggle("active");
    document.body.classList.add("noscroll");
  });
let list = document.querySelector(".mobile_list");

var input = document.getElementById("close_menu");

input.addEventListener("click", function () {
  document.getElementById("burger_btn_click").click();
  console.log("hh");
  document.body.classList.remove("noscroll");
});
