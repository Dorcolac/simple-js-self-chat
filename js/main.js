var input = document.querySelector('input');
input.focus();

function sendMessage() {
    var message = input.value;

    var ele = document.createElement('p');
    var textNode = document.createTextNode(message);
    ele.appendChild(textNode);
    ele.classList.add('message');

    document.querySelector('.messages').appendChild(ele);

    document.title = '* NOVA PORUKA *';

    input.value = '';

    input.focus();
}

document.querySelector('button').addEventListener('click', sendMessage);
input.addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
        sendMessage();
    }
})








