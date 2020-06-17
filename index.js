import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

//(a) Home Team name for 2014 world cup final
function taskA(data){
let taskOneA =data.filter(function(match){
    return match['Stage'] == 'Final' && match['Year'] == 2014;
});
let homeTeamName = taskOneA[0]['Home Team Name']   //why is there a 0?
return homeTeamName;
}
console.log(taskA(fifaData));
//(b) Away Team name for 2014 world cup final
function taskB(data){
    let taskOneB =data.filter(function(match){
        return match['Stage'] == 'Final' && match['Year'] == 2014;
    });
    let awayTeamName = taskOneB[0]['Away Team Name']   //why is there a 0?
    return awayTeamName;
    }
    console.log(taskB(fifaData));

//(c) Home Team goals for 2014 world cup final
function taskC(data){
    let taskOneC =data.filter(function(match){
        return match['Stage'] == 'Final' && match['Year'] == 2014;
    });
    let homeTeamGoals = taskOneC[0]['Home Team Goals']   //why is there a 0?
    return homeTeamGoals;
    }
    console.log(taskC(fifaData));
//(d) Away Team goals for 2014 world cup final
function taskD(data){
    let taskOneD =data.filter(function(match){
        return match['Stage'] == 'Final' && match['Year'] == 2014;
    });
    let awayTeamGoals = taskOneD[0]['Away Team Goals']   //why is there a 0?
    return awayTeamGoals;
    }
    console.log(taskD(fifaData));
//(e) Winner of 2014 world cup final 
function taskE(data){
    let taskOneE =data.filter(function(match){
        return match['Stage'] == 'Final' && match['Year'] == 2014;
    });
    let finalsHome = taskOneE[0]['Home Team Goals'];  //why is there a 0?
    let finalsAway = taskOneE[0]['Away Team Goals'];
    let homeTeamName = taskOneE[0]['Home Team Name'];
    let awayTeamName = taskOneE[0]['Away Team Name'];
    if(finalsHome>finalsAway){
        return homeTeamName;
    }else{
        return awayTeamName;
    }
    }
    console.log(taskE(fifaData));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsOnly = data.filter((winners) => {
        return winners.Stage == 'Final';
      });
    return finalsOnly; //need to isolate just the Stages part 
};
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
let years= cb.map(function(item){
    return item.Year;
});

return years;

};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
let homeWinnerGoals= cb(fifaData).map(function(item){
    return item['Home Team Goals'];
});
let awayWinnerGoals= cb(fifaData).map(function(item){
    return item['Away Team Goals'];
});
let homeWinnerName= cb(fifaData).map(function(item){
    return item['Home Team Name'];
});
let awayWinnerName= cb(fifaData).map(function(item){
    return item['Away Team Name'];
});
if(homeWinnerGoals>awayWinnerGoals){
    return homeWinnerName;
}else{
    return awayWinnerName;
}
}

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbwinners, cbyears) {
let winnerfunc= cbwinners.map(function(item){
    return item;
})
let winneryear= cbyears.map(function(item){
    return item;
})
    for(let i=0; i<winnerfunc.length; i++){
        console.log(winnerfunc+winneryear);
    }
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
