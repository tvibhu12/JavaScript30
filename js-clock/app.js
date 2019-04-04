/** **modal** */
var modal=
{
    //calculate Second and degree
   setTime:function(){
      const now = new Date();
      const seconds= now.getSeconds();
      const secondsDegrees = ((seconds/60)*360)+90;
      //send degree to the octopuse.moveSecond()
    octopus.moveSecond(secondsDegrees);

   }
        
};
/** **octopus** */
var octopus=
{
    init:function(){
        //every Second call modal setTime()
        setInterval(modal.setTime,1000);
    },

moveSecond:function(secondValue){
    //move Second's line in clock
veiw.secondsHand(secondValue);
}
};

/** **veiw** */
var veiw=
{
    secondsHand:function(secondValue)
    {
        //get second's line from HTML
        const secondHand=document.querySelector('.second-hand');
        //move Second's line in clock;
        secondHand.style.transform=`rotate(${secondValue}deg)`;
    }
};

//begining from here
octopus.init();
