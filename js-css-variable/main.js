

var view =

{
    input:function(){
        const inputs= document.querySelectorAll('.controls input');
        inputs.forEach(input => input.addEventListener('change',view.handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove',view.handleUpdate));
    },
    handleUpdate:function()
    {
        const suffix= this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

    }
    

}
view.input();