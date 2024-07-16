const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override")

app.use(methodOverride('_method'))

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));


main()
    .then((res)=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats",async(req,res)=>{
    let allchats=await Chat.find();
    // console.log(allchats);
    res.render("index.ejs",{allchats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats",(req,res)=>{
    let {from,to,message}=req.body;
   let newchat=new Chat({
    from:from,
    to:to,
    message:message,
    created_at:new Date(),
   });
   newchat.save()
   .then((res)=>{
        console.log(res);
   }).catch((err)=>{
        console.log(err);
   });
   res.redirect("/chats");
});

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
app.put("/chats/:id",(req,res)=>{
    let {id}=req.params;
    let {message}=req.body;
    
    Chat.findByIdAndUpdate({_id:id},{message:message})
    .then((res)=>{
        console.log(res);
   }).catch((err)=>{
        console.log(err);
   });
   res.redirect("/chats");
})

app.get("/chats/:id/delete",async(req,res)=>{
    let {id}=req.params;
    let deleted=await Chat.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/chats");
});
app.get("/",(req,res)=>{
    res.send("Server working !!");
});

app.listen(8080,()=>{
    console.log("listening to port 8080");
});