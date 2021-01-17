/*
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/


const team = {
    _players : [
      {
        firstName: 'Pete',
        lastName: 'Wheeler',
        age: 54
      },
      {
        firstName: 'Joseph',
        lastName: 'Segbefia',
        age: 19
      },
      {
        firstName: 'Camille',
        lastName: 'Rocco',
        age: 21
      }
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Stormers',
        teamPoints: 100,
        opponentPoints: 89
      },
      {
        opponent: 'Troopers',
        teamPoints: 20,
        opponentPoints: 41
      }
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opponentName, teamPoint, opponentTeamPoint){
      let game = {
        opponent: opponentName,
        teamPoints: teamPoint,
        opponentPoints: opponentTeamPoint
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Jumpers', 200, 101)
  
  
  console.log(team.players)
  console.log(team.games)