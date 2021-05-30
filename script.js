const from = document.getElementById("form");

const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const aray = document.querySelectorAll(".error");

// ? funcion para validar formularios
const validInputs = (input) => {
   //
   const divError = input.nextSibling.nextElementSibling;
   const pError = divError.nextSibling.nextElementSibling;

   if (input.type === "email") {
      if (
         /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
            email.value
         )
      ) {
         divError.style.display = "none";
         pError.style.display = "none";
         input.style.border = "1px solid var(--Dark-Blue)";
      } else {
         divError.style.display = "block";
         pError.style.display = "block";
         input.style.border = "1px solid var(--Red)";
      }
   } else {
      if (input.value) {
         divError.style.display = "none";
         pError.style.display = "none";
         input.style.border = "1px solid var(--Dark-Blue)";
      } else {
         divError.style.display = "block";
         pError.style.display = "block";
         input.style.border = "1px solid var(--Red)";
      }
   }
};

// ? evento que se ejecuta cuando se recarga la pagina
window.addEventListener("DOMContentLoaded", () => {
   aray.forEach((err) => (err.style.display = "none"));
});

// ? evento de envio de formulario
from.addEventListener("submit", (e) => {
   e.preventDefault();
   validInputs(name);
   validInputs(lastName);
   validInputs(email);
   validInputs(password);
});
