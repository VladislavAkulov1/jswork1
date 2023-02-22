const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Служит для выводы информации в консоль');
})

const consolelog1 = document.querySelector('#alert');

consolelog1.addEventListener('click', () => {
    alert('Служит для вывода всплывающего окна с сообщением для пользователя');
})

const consolelog2 = document.querySelector('#prompt');

consolelog2.addEventListener('click', () => {
    alert('Служит для отображения всплывающего окна с текстовым полем ввода и кнопками "OK" и "Отмена"');
})