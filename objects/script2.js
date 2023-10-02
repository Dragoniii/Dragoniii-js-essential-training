/* 
    const schedule = {
    sunday: "free",
    monday: "work from home",
    tuesday: "work at office",
    wednesday: "work from home",
    thursday: "work at office",
    friday: "work from home",
    saturday: "free",
    appointment: function(day, commitment){
        if(this.hasOwnProperty(day)){
            this[day] = commitment
    }
}
}
console.log(schedule);
schedule.appointment("sunday", "do");
schedule.appointment("monday", "do");
schedule.appointment("tuesday", "do");
schedule.appointment("wednesday", "do");
schedule.appointment("thursday", "do");
schedule.appointment("friday", "do");
schedule.appointment("saturday", "do");
console.log(schedule);
*/

//O correto é colocar o método na classe. 