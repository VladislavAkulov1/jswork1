const textInputj = document.querySelector('#textInput');
const submitButtonj = document.querySelector('#submitButton');
const duplicateFieldj = document.querySelector('#duplicateField');

function updateDuplicateField() {
  duplicateField.textContent = textInputj.value;
}

textInputj.addEventListener('input', updateDuplicateField);

submitButtonj.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(textInputj.value);
  textInputj.value = '';
  duplicateFieldj.textContent = '';
});