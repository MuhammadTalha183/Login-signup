let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let signupbtn = document.getElementById('signup-btn');
function validateForm(){
    // if(username === '' || email === '' || password === ''){
    //     alert('Please fill in all fields');
    //     return false;
    // }
    console.log(`${username} ${email} ${password}`);
}

signupbtn.addEventListener('click',validateForm())

