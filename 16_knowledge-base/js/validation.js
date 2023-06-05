document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".form", {
    errorFieldCssClass: "is-invalid",
    errorFieldStyle: {
      border: "1px solid #FF5C00",
    },
    errorLabelCssClass: "is-label-invalid",
    errorLabelStyle: {
      color: "#FF5C00",
    },
    focusInvalidField: true,
    lockForm: true,
  });

  const phoneElement = document.querySelector(".input-tel");

  const im = new Inputmask("+7(999) 999-99-99");
  im.mask(phoneElement);

  validation
    .addField(".book__form-field", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Имя должно содержать хотя бы 3 буквы",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Имя не может содержать более 30 символов",
      },

      {
        rule: "required",
        errorMessage: "Вы не ввели имя",
      },
    ])
    .addField(".input-mail", [
      {
        rule: "required",
        errorMessage: "Поле обязательное для заполнения",
      },
      {
        rule: "email",
        errorMessage: "Вы не ввели e-mail",
      },
    ])
    .addField(".input-tel", [
      {
        validator: () => {
          const phone = phoneElement.inputmask.unmaskedvalue();
          const result = Number(phone) && phone.length === 10;
          return result === 0 ? false : result;
        },
        errorMessage: "Укажите ваш телефон",
      },
    ]);
});
