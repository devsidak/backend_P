const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3040;
const app = express();


//setting view-engine;
app.set('view engine', 'ejs');



const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, "views", "pages", "404"), {active:"404"});
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`SERVER RUNNING AT ${PORT}`);
  }
});
