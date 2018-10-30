# Calculate Tournament Results in JavaScript

> This is a bonus assignment. Complete it at your own pace.

The 2016 and 2017 Houston Indoor Ultimate Tournaments were a roaring success!
Teams from all over the state battled it out on an indoor field and much fun was
had by all.

Darren the statistician wants to calculate metrics about how teams performed in
order to analyze the upcoming club tournament season. The tournament director
wants to see how all the teams performed in order to award trophies.

Conveniently, the tournament director stored the tournament data in JSON:
- [2016 Tournament](test/2016-tournament.json)
- [2017 Tournament](test/2017-tournament.json)

## Assignment

Using higher-order functions (map, reduce, filter, etc), write a solution that
generates the results needed and passes the test suite.

A skeleton for your functions has been started in [`calculate-results.js`](calculate-results.js)

## Development Setup

Make sure [Node.js] is installed on your system. Then, on the command line:

```sh
# installs the node_modules folder (one-time step)
npm install

# runs the test suite
npm test
```
[Node.js]:https://nodejs.org/en/

## Result Object

Darren the statistician has requested the tournament results in the following
format:

```js
{
  "team5": {
    "gamesLost": 3,
    "gamesPlayed": 5,
    "gamesTied": 0,
    "gamesWon": 2,
    "place": 8,
    "pointDiff": -7,
    "pointsLost": 38,
    "pointsPlayed": 69,
    "pointsWon": 31,
    "teamCaptain": "Ryan Levins",
    "teamName": "Eggpants Parmesan",
    "victoryPoints": 5993
  },
   "team2": { /* team2 result object goes here */ },
   "team3": { /* team3 result object goes here */ }
   /* the rest of the teams go here */
}
```

The tournament director has requested the results in an Array sorted by victory
points:

```js
[
  {
    "games-lost": 0,
    "games-played": 7,
    "games-tied": 0,
    "games-won": 7,
    "place": 1,
    "points-diff": 28,
    "points-lost": 35,
    "points-played": 98,
    "points-won": 63,
    "team-captain": "Sean McCall",
    "team-id": "team6",
    "team-name": "No Tsu Oh",
    "victory-points": 21028
  },
  { /* second place team goes here */ },
  { /* third place team goes here */ }
  /* the rest of the teams go here */
]
```

## Notes

- There were some teams who signed up, but did not play. Do not include these
  teams in your results.
- There were some games that were aborted for various reasons. Only include
  games marked as "final" in your results.

## Victory Points Formula

Victory points are used by the [Swiss format] to determine matchups for each
round. The formula for calculating victory points is as follows:

- 3000 points for a win
- 1000 points for a tie
- 0 points for loss
- then add (or subtract) point diff

[Swiss format]:https://en.wikipedia.org/wiki/Swiss-system_tournament

## License

[ISC License](LICENSE.md)
