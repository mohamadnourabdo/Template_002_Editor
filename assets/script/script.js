let play_editor = document.getElementById("btn-play");
let remove_code = document.getElementById("btn-remove");
let code = document.getElementById("code");
let result = document.getElementById("result");
// ------------------------------------------------------------------
code.value = `<!DOCTYPE html>
<html lang="en-us" dir="ltr">
    <head>
        <style>
        </style>
    </head>
    <body>
        Hello World!
    </body>
</html>
`;
// ------------------------------------------------------------------
play_editor.onclick = function () {
  result.innerHTML = code.value;
  localStorage.setItem("code", code.value);
};
// ------------------------------------------------------------------
remove_code.onclick = function () {
  result.innerHTML = "";
  code.value = `<!DOCTYPE html>
<html lang="en-us" dir="ltr">
    <head>
        <style>
        </style>
    </head>
    <body>
        Hello World!
    </body>
</html>
`;
  localStorage.removeItem("code");
};
// ------------------------------------------------------------------
onload = function () {
  if (this.localStorage.getItem("code") != null) {
    code.value = this.localStorage.getItem("code");
    result.innerHTML = this.localStorage.getItem("code");
  }
};
// ------------------------------------------------------------------
