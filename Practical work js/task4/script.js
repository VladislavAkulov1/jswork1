const changetext = prompt('Какое название для ссылки хотите?');
if (changetext) {
    document.querySelector('#text').innerHTML = changetext;
  } else {
    document.querySelector('#text').innerHTML = 'Вы не изменили текст ссылки';
  }