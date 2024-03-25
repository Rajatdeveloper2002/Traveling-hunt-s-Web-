import express from "express"
import bodyParser from "body-parser"
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static("partials"));

app.get("/", (req,res)=>{
    res.render("index.ejs");

})
app.get("/sign",(req,res)=>{
    res.render("sign_in.ejs");
})


app.listen(port,()=>{
    console.log(`Server being live ${port}`);
})