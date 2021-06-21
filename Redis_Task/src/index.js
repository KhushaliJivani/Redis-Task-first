const express=require("express");
require('dotenv').config({path:"../.env"});
const path=require("path");
const bodyParser=require("body-parser");
const environment=require("../environment");
const mongoose=require("../src/config/mongoose");
const route=require("../src/app/routes/route");
const client=require("../src/configRedis/redisInit");
const env=process.env.NODE_ENV;
const envconfig=environment[env];
const port=envconfig.port || 3000;
const app=express();
mongoose.connect(envconfig, env);
app.set("view engine",'ejs');
const viewsPath=path.join(__dirname,"views/");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.set('views',viewsPath);
app.use('/',route);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});