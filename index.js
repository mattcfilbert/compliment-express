const express = require('express')
const app = express()

const compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

const colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

app.listen(4000, () => {
  console.log('Port 4000 authority')
})

app.get('/', (req, res) => {
  var randComp = compliments[Math.floor(Math.random() * compliments.length)]
  var randCol = colors[Math.floor(Math.random() * colors.length)]
  res.render('welcome', {randComp, randCol})
})

app.get('/:name', (req, res) => {
  var name = `Hey, ${req.params.name}, `
  var randComp = compliments[Math.floor(Math.random() * compliments.length)]
  var randCol = colors[Math.floor(Math.random() * colors.length)]
  res.render('welcome', {name, randComp, randCol})
})

app.set('view engine', 'hbs')
