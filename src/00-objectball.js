function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  function numPointsScored(name) {
    const game = gameObject();
  
    if (game.home.players[name]) {
      return game.home.players[name].points;
    }
  
    if (game.away.players[name]) {
      return game.away.players[name].points;
    }
  }

function shoeSize(name) {
    const game = gameObject();

    if (game.home.players[name]) {
        return game.home.players[name].shoe
    }
    
    if (game.away.players[name]) {
        return game.away.players[name].shoe
    }
}

function teamColors(team) {
    const game = gameObject()

    if (game.home.teamName === team) {
        return game.home.colors;
      }
    
      if (game.away.teamName === team) {
        return game.away.colors;
      }
}

function teamNames() {
    const game = gameObject()
    const teams = [];

    teams.push(game.home.teamName);
    teams.push(game.away.teamName);

    return teams;

}

function playerNumbers(team) {
    const game = gameObject();
    const jerseyNumbers = [];  

    if (game.home.teamName === team) {
        for (const player in game.home.players) { 
            jerseyNumbers.push(game.home.players[player].number);
        }
    }
    
    if (game.away.teamName === team) {
        for (const player in game.away.players) { 
            jerseyNumbers.push(game.away.players[player].number);
        }
    }

    return jerseyNumbers;  
}

function playerStats(name) {
    const game = gameObject();
    if (game.home.players[name]) {
        return game.home.players[name]
    }
    
    if (game.away.players[name]) {
        return game.away.players[name]
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let maxSize = 0;
    let playerRebounds = 0;
  
   
    const players = { ...game.home.players, ...game.away.players };
  
    for (const player in players) {
      const playerData = players[player];
      if (playerData.shoe > maxSize) {
        playerRebounds = playerData.rebounds;
      }
    }
    return playerRebounds; 
  };


function mostPointsScored() {
  const game = gameObject()
  let mostPoints = 0;

  const players = { ...game.home.players, ...game.away.players };

  for (const player in players) {
    const playerData = players[player];
    if (playerData.points > mostPoints) {
      mostPoints = playerData.points;
    }
  }
  return mostPoints
}

function winningTeam() {
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
   
  for (const player in game.home.players) {
    homeTeamPoints += game.home.players[player].points;
  }

  for (const player in game.away.players) {
    awayTeamPoints += game.away.players[player].points;
  }

  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return game.away.teamName;
  
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestNameLength = 0;
  let longestName = '';

  const players = { ...game.home.players, ...game.away.players };

  for (const player in players) {
    if (player.length > longestNameLength ) {
        longestName = player
    }
  }
  return longestName
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestNameLength = 0;
  let longestName = '';
  let mostSteals = 0

  const players = { ...game.home.players, ...game.away.players };

  for (const player in players) {
    const playerData = players[player];
    if (player.length > longestNameLength ) {
        longestName = player
    }

    if (playerData.steals > mostSteals && player === longestName) {
        return true
    }
}
}
