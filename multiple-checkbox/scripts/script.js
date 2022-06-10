const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

const States = { Idle: 0, Checking: 1, Checked: 2 };

let state = States.Idle;
let lastCheckbox;

function startChecking(currentCheckbox) {
  lastCheckbox = currentCheckbox;
  state = States.Checking;
}

function finishChecking(currentCheckbox) {
  let checked = false;
  checkboxes.forEach((checkbox) => {
    if (checkbox === currentCheckbox || checkbox === lastCheckbox) {
      checked = !checked;
    }
    if (checked) checkbox.checked = checked;
  });
  state = States.Checked;
}

function resetCheckBoxes() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  state = States.Idle;
}

function checkboxHandler(event) {
  switch (state) {
    case States.Idle:
      startChecking(event.target);
      break;
    case States.Checking:
      finishChecking(event.target);
      break;
    case States.Checked:
      resetCheckBoxes();
      break;
  }
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", checkboxHandler)
);
