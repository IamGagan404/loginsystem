
const express = require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.set('view engine',"ejs");


app.get('/',(req,res)=>{
    res.render('index');
});


const users = require("C:/Users/windows/Desktop/try.json"); 
// document.write(users[0].name)
var currentUser=-1
var validator=-1
//get entry from user
function getinfo(){
    enter_user=document.getElementById("HTMLuser").value
    enter_pass=document.getElementById("HTMLpass").value
}
//validates user
function checker(fUser,fPass){
    var userBool=0
    var passBool=0
    for(var i=0; i < users.length;i++){
        if (fUser==users[i].name){
            console.log('user found');
            userBool=1;
            currentUser=i
            break;
           
        }
        if (i==users.length-1 && fUser != users[i].name){
            console.log('user not found')
            return 0;
        }
    }
    if (userBool=1){
        if (fPass==users[currentUser].password){
            console.log('pass matched')
            passBool=1
        }
        else if (fPass!=users[currentUser].password){
            console.log('pass not matched')
        }
    }
    if (userBool==1 && passBool==1){
        return 1
    }
    else{
        return 0
    }
}
     

// function triggered through submit button 
function start(){
    getinfo();
    validator=checker(enter_user,enter_pass)
    if (validator==1){
        console.log("welcome");
        // redirct();
        alert('Welcome');
    }
}







var port = process.env.PORT || 5001

app.listen(port, function () {
//   console.log('Open url to hear Hallelujah http://localhost:3000/hear?lang=en&text=Hallelujah');
console.log('go go')
});