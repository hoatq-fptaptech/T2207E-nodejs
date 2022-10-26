const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
   console.log("Server is running...");
});

var ls = [
    {
        id: 1,
        name:"Nguyễn Hoàng Nam",
        age: 18
    },
    {
        id:2,
        name: "Thái Sơn",
        age: 16
    }
];

app.get("/demo",function (req,res) {
   res.send("Hello world!");
});

app.get("/get-data",function (req,res) {
    res.send(ls);
});
app.get("/detail",function (req,res) {
    var paramId = req.query.id;
    var data;
    for(var i=0;i<ls.length;i++){
        if(ls[i].id == paramId){
            data = ls[i];
            break;
        }
    }
    res.send(data);
})
app.get("/edit",function (req,res) {
    var paramId = req.query.id;
    var paramName = req.query.name;
    var paramAge = req.query.age;
    for(var i=0;i<ls.length;i++){
        if(ls[i].id == paramId){
            ls[i].name = paramName;
            ls[i].age = paramAge;
            break;
        }
    }
    res.send("done");
})

app.get("/create",function (req,res) {
    var paramId = req.query.id;
    var paramName = req.query.name;
    var paramAge = req.query.age;
    var check = false;
    for(var i=0;i<ls.length;i++){
        if(ls[i].id == paramId){
            check= true;
            break;
        }
    }
    if(check == false){
        ls.push({
            id: paramId,
            name: paramName,
            age: paramAge
        })
    }
    res.send("done");
})
app.get("/delete",function (req,res) {
    var paramId = req.query.id;
    var p=-1;
    for(var i=0;i<ls.length;i++){
        if(ls[i].id == paramId){
            p = i;
        }
    }
    if(p != -1){
        ls.splice(p,1);
    }
    res.send("done");
})