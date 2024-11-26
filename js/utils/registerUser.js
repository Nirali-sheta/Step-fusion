
function registerUser(user){
     let users=JSON.parse(localStorage.getItem("users")) || [];

    //  generate id for new user
     const Id=users.length>0?users[users.length-1].id+1:1;

     user.id=Id;

     users.push(user);
     localStorage.setItem("users",JSON.stringify(users));
}

export default registerUser;