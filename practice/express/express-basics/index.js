const express = require("express");
const app = express();
const PORT = 3040;
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  // console.log("this always runs");
  next();
});

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use("/static/", express.static("public/images"));


//
app.use((req, res, next)=>{
  res.status(404).sendFile( path.join(__dirname, './views/404.html'))
})


app.listen(PORT, function () {
  console.log(`Listening At PORT : ${PORT} `);
});
