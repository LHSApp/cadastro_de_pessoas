const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const app = express()


app.use(express.static('public'))

app.set("view engine", "njk")

nunjucks.configure("views", {
  express:app,
  autoescape: false,
  noCache: true
})


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});