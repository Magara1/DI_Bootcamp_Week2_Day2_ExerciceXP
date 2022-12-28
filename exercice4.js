const users = ["Lea123","Princess45","cat&doglovers","helooo@000"];

let userTotal = users.length

if (userTotal==0){

    console.log("no one is online");

} else if(userTotal==1){

    console.log(users[0] +" is online");

} else if(userTotal==2){

    console.log(users[0],users[1] + "are online");

}else if(userTotal>2){
    console.log(users[0], users[1] + (userTotal-2) + "more are online")
}


