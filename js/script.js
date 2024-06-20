const dataPopup = document.querySelectorAll("[data-popup]");
dataPopup.forEach((popupBtn) => {
  const requstedClass = popupBtn.getAttribute("class");
  const openPopupBtn = requstedClass.replace(/\s/g, ".");
  const neededPopup = document.querySelectorAll(`.${popupBtn.dataset.popup}`);
  const closePopupBtn = document.querySelectorAll("[data-close]");
  function openPopup(popupSelector) {
    console.log(popupSelector)
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




  const phone = [];
  const allPhone = document.querySelectorAll('.phone-mask');

  phone.forEach.call(allPhone, (input) => {
      let keyCode;

      function mask(event) {
          let phoneMask = "+7 (___)-___-__-__";
          let i = 0;
          let def = phoneMask.replace(/\D/g, "");
          let val = this.value.replace(/\D/g, "");

          event.keyCode && (keyCode = event.keyCode);
          this.selectionStart < 3 && event.preventDefault();
          let newValue = phoneMask.replace(/[_\d]/g, function (a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
          i = newValue.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              newValue = newValue.slice(0, i);
          }
          let reg = phoneMask.substr(0, this.value.length).replace(/_+/g, function (a) {
              return "\\d{1," + a.length + "}";
          }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
              this.value = newValue;
          }
          if (event.type == "blur" && this.value.length < 5) {
              this.value = "";
          }
      }

      function inputMask(type) {
          input.addEventListener(type, mask, false);
      }

      inputMask("input");
      inputMask("focus");
      inputMask("blur");
      inputMask("keydown");

  });


