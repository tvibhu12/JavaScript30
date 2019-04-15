const panels = document.querySelectorAll('.panel');
function toggle()
{
    console.log("hello");
    this.classList.toggle('open');
}

panels.forEach(panel=> panel.addEventListener('click',toggle));