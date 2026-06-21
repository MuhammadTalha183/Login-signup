let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let signupbtn = document.getElementById('signup-btn');
let all_user = []
function validateForm(){
    // if(username === '' || email === '' || password === ''){
    //     alert('Please fill in all fields');
    //     return false;
    // }
    // let usernameValue = username.value
    // let emailValue = email.value
    // let passwordValue = password.value
    // console.log(`${usernameValue} ${emailValue} ${passwordValue}`);


    const user = {
        name : username.value,
        email : email.value,
        password : password.value
    }
    all_user.push(user)
    username.value = ''
    email.value = ''
    password.value = ''

    console.log(all_user);
}

signupbtn.addEventListener('click',validateForm)

