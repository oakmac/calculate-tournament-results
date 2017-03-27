/* eslint-env mocha */

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const app = require('../calculate-results.js')

function testArray (year) {
  var tournamentFilename = path.join(__dirname, year + '-tournament.json')
  var tournament = JSON.parse(fs.readFileSync(tournamentFilename, 'utf8'))
  var theirResults = app.calculateResultsArray(tournament)
  var resultsFilename = path.join(__dirname, year + '-results-array.json')
  var ourResults = JSON.parse(fs.readFileSync(resultsFilename, 'utf8'))

  assert.deepStrictEqual(theirResults, ourResults)
}

function testObj (year) {
  var tournamentFilename = path.join(__dirname, year + '-tournament.json')
  var tournament = JSON.parse(fs.readFileSync(tournamentFilename, 'utf8'))
  var theirResults = app.calculateResultsObject(tournament)
  var resultsFilename = path.join(__dirname, year + '-results-object.json')
  var ourResults = JSON.parse(fs.readFileSync(resultsFilename, 'utf8'))

  assert.deepStrictEqual(theirResults, ourResults)
}

it('2016 Results Array', testArray.bind(null, '2016'))
it('2016 Results Object', testObj.bind(null, '2016'))
it('2017 Results Array', testArray.bind(null, '2017'))
it('2017 Results Object', testObj.bind(null, '2017'))
