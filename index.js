import express from 'express';
import path, { extname } from 'path';
import exphbs from "express-handlebars";


const PORT = 3000;
const app = express();

const __dirname = path.resolve();

app.use(express.static("assets"));

app.set("view engine", "hbs");
app.engine("hbs", exphbs.engine({
    layoutsDir: __dirname + "/views",
    extname: "hbs", 
}));

app.use("/bootstrap", express.static("node_modules/bootstrap/dist/css"));

app.get('/', (req,res)=>{
    res.render('main', {
        title: "Productos",
        producto: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
    });
});

app.listen(PORT, console.log(`servidor activo en http://localhost:${PORT}`));