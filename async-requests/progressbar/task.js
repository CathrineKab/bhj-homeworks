const progress = document.getElementById('progress');
const form = document.getElementById("form");
let xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(e) {
        progress.value = e.loaded / e.total;
    };
    xhr.send(formData);
    xhr.upload.onload = function() {
        alert(`Данные успешно отправлены.`);
    };
})