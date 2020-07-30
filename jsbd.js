
// Requiring JSON users file 
const users = require("C:/Users/windows/Desktop/try.json"); 

//try.json looks like... 
//[
//     {
//       name: 'John',
//       password: 21,
      
//     },
//     { 
//        name: 'Smith', 
//        password: 25, 
//    }
//   ]


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


// console.log(checker("Smih",5))
// console.log(users)