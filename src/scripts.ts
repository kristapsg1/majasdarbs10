import $ from "jquery";
import { nameValidate } from "./utils/name_test_map/name";
import { passwordValidate } from "./utils/password_test_map/password";
import { emailValidate } from "./utils/email_test_map/email";

$(".form-wrapper").html(`
    <h1>INPUT LOGS</h1>
    <form class="jsForm">
        <div class="name-wrapper">      
            <input class="input-logs jsName" type="text" name="name" autocomplete="off" placeholder="Name">
            <p>The name must have at least 2 characters and can only contain letters. Max 50 characters.</p>
        </div>

        <div class="password-wrapper">
            <input class="input-logs jsPassword" type="text" name="password" autocomplete="off" placeholder="Password">
            <p>The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).</p>
        </div>

        <div class="email-wrapper">
            <input class="input-logs jsEmail" type="text" name="email" autocomplete="off" placeholder="Email">
            <p>The email must be in a valid format (e.g. example@example.com).</p>
        </div>
        
    </form>
`);



$(".jsForm").on("keyup", (e) => {
  e.preventDefault();

  const name = $<HTMLInputElement>(".jsName").val() as string;

  const isNameValid = nameValidate(name);

  const greenSquare = $(".name-wrapper");
  const inputElement = greenSquare.find(".jsName");

  console.log(isNameValid);

  if (isNameValid) {
    inputElement.css({ backgroundColor: "green", color: "white" });
  } else {
    inputElement.removeAttr("style");
  }
});

$(".jsForm").on("keyup", (e) => {
  e.preventDefault();

  const password = $<HTMLInputElement>(".jsPassword").val() as string;

  const isPasswordValid = passwordValidate(password);

  const greenSquare = $(".password-wrapper");
  const inputElement = greenSquare.find(".jsPassword");



  if (isPasswordValid) {
    inputElement.css({ backgroundColor: "green", color: "white" });
  } else {
    inputElement.removeAttr("style");
  }
});

$(".jsForm").on("keyup", (e) => {
  e.preventDefault();

  const email = $<HTMLInputElement>(".jsEmail").val() as string;

  const isEmailValid = emailValidate(email);

  const greenSquare = $(".email-wrapper");
  const inputElement = greenSquare.find(".jsEmail");

  if (isEmailValid) {
    inputElement.css({ backgroundColor: "green", color: "white" });
  } else {
    inputElement.removeAttr("style");
  }
});
