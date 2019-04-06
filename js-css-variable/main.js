

var view =

{
    input:function(){
        const inputs= document.querySelectorAll('.controls input');
        inputs.forEach(input => input.addEventListener('change',view.handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove',view.handleUpdate));
    },
    handleUpdate:function()
    {
        console.log(this.value);

    }
    

}
view.input();