const canvas=document.querySelector('#draw'); //select canvas
const cxt=canvas.getContext('2d'); //get context 
canvas.width=window.innerWidth;  //make canvas fullcreen
canvas.height=window.innerHeight;  //make canvas fullcreen
cxt.lineJoin='round';
cxt.lineCap='round';
let isDrawing =false;
let lastX=0;
let lastY=0;
let hue=0;
let thick=0;
canvas.addEventListener('mousemove',draw); //call draw function when mouse clicked and move
canvas.addEventListener('mousedown',(e)=>
{
    isDrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
}); //drawing  when mouse clicked
canvas.addEventListener('mouseup',()=>isDrawing=false); //drawing stop when mouse up
canvas.addEventListener('mouseout',()=>isDrawing=false); //drawing stop when mouse out of the canvas

function draw(e)
{
    if(!isDrawing) return; //stop the function from running when they are not moused down
    console.log(e);
    cxt.strokeStyle=`hsl(${hue},100%,50%)`;
    cxt.lineWidth=thick;
    cxt.beginPath();
    //start form
    cxt.moveTo(lastX,lastY);
    //go to
    cxt.lineTo(e.offsetX,e.offsetY);
    cxt.stroke(); //draw
    ///update last postion of X and Y
    [lastX,lastY]=[e.offsetX,e.offsetY];

    hue++;
    if(hue>=360)
    {
        hue=0;// rest hue;
    }
    thick++;
    if(thick>=100)
    {
     thick=0;// rest hue;
    }
}

