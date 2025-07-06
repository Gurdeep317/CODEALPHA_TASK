let input = document.getElementById("input");
let preview = document.getElementById("preview");

function appendNumber(num) {
  input.value += num;
  updatePreview();
}

function appendOperator(op) {
  let lastChar = input.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    input.value = input.value.slice(0, -1) + op;
  } else {
    input.value += op;
  }
  updatePreview();
}

function clearDisplay() {
  input.value = "";
  preview.innerText = "0";
}

function deleteChar() {
  input.value = input.value.slice(0, -1);
  updatePreview();
}

function updatePreview() {
  try {
    if (input.value !== "") {
      preview.innerText = eval(input.value.replace(/[^-()\d/*+.]/g, ''));
    } else {
      preview.innerText = "0";
    }
  } catch {
    preview.innerText = "Err";
  }
}

function calculateResult() {
  try {
    input.value = eval(input.value.replace(/[^-()\d/*+.]/g, ''));
    preview.innerText = input.value;
  } catch {
    input.value = "";
    preview.innerText = "Err";
  }
}
