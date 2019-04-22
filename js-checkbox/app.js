let lastCheck;   // know which check is checked at last
let inBetween = false; //ther eis any inBetween
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');  //get all checkboxes
checkBoxes.forEach(checkBox => {
  checkBox.addEventListener("click", handleCheck);    //triger click event
});

function handleCheck(e) {
    if(e.shiftKey && this.checked)  ///if shift key is clicked and checkox is already checked
    {
        checkBoxes.forEach(checkBox=>{
            if(checkBox===this || checkBox == lastCheck)     //check first checkbox and last checkbox
            {
                inBetween=!inBetween; 
            }
            if(inBetween)
            {
                checkBox.checked=true;      //if inBetween is true checked the in between checkboxes
            }
        });

    }
  lastCheck=this;
};
