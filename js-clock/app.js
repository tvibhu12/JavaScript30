/** **modal** */
var modal=
{
    //calculate Second and degree
   setTime:function(){
      const now = new Date();
      console.log(now.getSeconds());
      console.log(now.getMinutes());
      console.log(now.getHours());
      //get second
      const seconds= now.getSeconds();
      const secondsDegrees = ((seconds/60)*360)+90;
      //send degree to the octopuse.moveSecond()
    octopus.moveSecond(secondsDegrees);

    //get minute
    const minutes=now.getMinutes();
    const minutesDegree=((minutes/60)*360)+90;
    octopus.moveMinute(minutesDegree);
    //get hour
    const hours=now.getMinutes();
    const hoursDegree=((minutes/12)*360)+90;
    octopus.moveHours(hoursDegree);
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
},
//move Mintue's line in clock
moveMinute:function(minuteValue){
 veiw.minuteHand(minuteValue);
},
//move Hour's line in clock
moveHours:function(hourValue)
{
veiw.hourHand(hourValue);
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
    },
    minuteHand:function(minuteValue)
    {
        const minuteHand=document.querySelector('.min-hand');
        //move Minute's line in clock;
        minuteHand.style.transform=`rotate(${minuteValue}deg)`;
    },
    hourHand:function(hourValue)
    {
        const hourHand=document.querySelector('.hour-hand');
        //move Hour's line in clock;
        hourHand.style.transform=`rotate(${hourValue}deg)`;
    }
};

//begining from here

octopus.init();