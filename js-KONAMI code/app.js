const pressed = [];
const secretWord='tiwari';
window.addEventListener('keyup',storeAndHandle);
function storeAndHandle(e)
{
    pressed.push(e.key);
    pressed.splice(-secretWord.length-1,pressed.length-secretWord.length);
    if(pressed.join('').includes(secretWord))
    {
        cornify_add();
    }
}