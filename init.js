const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then((res)=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats=[
    {
        from:"sonai",
        to:"rupai",
        message:"Hello!! miss rupai",
        created_at:new Date(),
    },
    {
        from:"rohan",
        to:"sumit",
        message:"Hi bro!!",
        created_at:new Date(),
    },
    {
        from:"sumit",
        to:"rohan",
        message:"Hello rohan",
        created_at:new Date(),
    },
    {
        from:"eve",
        to:"bob",
        message:"Today's weather is sunny.",
        created_at:new Date(),
    },
    {
        from:"clair",
        to:"ele",
        message:"You are looking preety.",
        created_at:new Date(),
    },
    {
        from:"shivu",
        to:"mohit",
        message:"hey bro ! what's up.",
        created_at:new Date(),
    },
    {
        from:"mohit",
        to:"shivu",
        message:"nothing much, just chilling with some good music. And, what about you ?",
        created_at:new Date(),
    },
    {
        from:"shivu",
        to:"mohit",
        message:"These days I am preparing for my neet exam",
        created_at:new Date(),
    },
    {
        from:"jkjhk",
        to:"oiuo",
        message:"ikhuli uhkjh hoij!!",
        created_at:new Date(),
    },
    {
        from:"aiouobc",
        to:"xjolijyz",
        message:"kjk.;l hkhj kjh kjio!!",
        created_at:new Date(),
    },
];

Chat.insertMany(allchats)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });