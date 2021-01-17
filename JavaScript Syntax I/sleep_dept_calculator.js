/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day => {
    switch(day){
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 8;
        break;
      case 'Wednesday':
        return 7;
        break;
      case 'Thursday':
        return 5;
        break;
      case 'Friday':
        return 9;
        break;
      case 'Saturday':
        return 6;
        break;
      case 'Sunday':
        return 8;
        break;
      default:
        return ''
    };
  };
  
  console.log(getSleepHours(''));
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') 
    + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  
  function getIdealSleepHours(){
    var idealHours = 8;
    return idealHours * 7
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  function calculateSleepDebt(){
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      return 'User got the perfect amount of sleep'
    }else if(actualSleepHours > idealSleepHours){
      return 'You got' + (actualSleepHours - idealSleepHours) + 'hours more sleep than needed.'
    }else if(actualSleepHours < idealSleepHours){
      return 'You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.'
    };
  };
  
  console.log(calculateSleepDebt());
  