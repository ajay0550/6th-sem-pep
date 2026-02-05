import http from "http";
import fs, { link } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const server=http.createServer(async (req,res)=>{
    console.log("Request: ",req.url);

    //ROUTE: PRODUCTS (SSP+PROXY)
    if(req.url==="/products"){
        //1. FETCH DATA FROM EXTERNAL API
        const apiRes=await fetch("https://dummyjson.com/products");
        const data=await apiRes.json();

        //2. CONVERT DATA TO HTML
        let productHTML="";
        data.products.forEach(p=>{
            productHTML+=`
            <li>
                <h3>${p.title}</h3>
                <img src="${p.thumbnail}" width="150" />
            </li>
            `;
        })
        //3.read template
        const templatePath=path.join(__dirname,"temp.html");
        let html=fs.readFileSync(templatePath,"utf-8");

        //4.hydrate template
        html=html.replace("{{products}}", productHTML);

        //5.send final HTML
        res.writeHead(200, {"content-type":"text/html"});
        res.end(html);
        return;
    }

    if(req.url=="/style.css"){
        const css=fs.readFileSync(path.join(__dirname,"style.css"));
        res.writeHead(200,({"content-type":"text/css"}));
        res.end(css);
        return;
    }

    if(req.url=="/favicon.ico"){
        const css=fs.readFileSync(path.join(__dirname,"favicon.png"));
        res.writeHead(200,({"content-type":"image/png"}));
        res.end(icon);
        return;
    }

    server.listen(3000, ()=>{
        console.log("Server listening on http://localhost:3000");
    })
})