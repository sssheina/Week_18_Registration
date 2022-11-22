let errorsInfo = document.getElementById('errorsInfo');



function checkValidity(input) {

  var validity = input.validity;

  if (validity.valueMissing) {
      errors.push('Поле ' + input.placeholder + ' не заполнено');
  }
  if (validity.patternMismatch) {
      errors.push('Неверный формат заполнения');
  }
  
}   

function checkAll() {
  errors = []; 
  let inputs = document.querySelectorAll('input');

  for (let input of inputs) {
      checkValidity(input);
  }

  errorsInfo.innerHTML = errors.join('/ <br>');

}


 const formElement = document.querySelector('.form');

	formElement.addEventListener('submit', function (evt) {
		evt.preventDefault();
	    console.log('Форма не отправлена');
        checkAll();
	});