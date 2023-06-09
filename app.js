const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));



app.get('/', (req, res) => {

  const gamesData = require('./games.json')
  
    res.render("index", {gamesData: gamesData});
  })


  
app.get('/game/:name', (req, res) => {
  const gamesData = require('./games.json');
  const gameName = req.params.name;

  const foundedGame = gamesData.find((game)=>game.name===gameName)

  res.render(`${gameName}`, {gamesData: gamesData, game:foundedGame},);

})



  
// app.get('/game/diceRoller', (req, res) => {
//   res.render('css/diceRoller');
//   res.render('diceRoller');
// })

// app.get('/game/fourchette', (req, res) => {
//     res.render('fourchette');
// })

app.listen(port, () => {
    console.log(`Listen on http://localhost${port}`);
})