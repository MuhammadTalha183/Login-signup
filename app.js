// let username = document.getElementById('username')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let signupbtn = document.getElementById('signup-btn');
// let all_user = []
// function validateForm(){
//     // if(username === '' || email === '' || password === ''){
//     //     alert('Please fill in all fields');
//     //     return false;
//     // }
//     // let usernameValue = username.value
//     // let emailValue = email.value
//     // let passwordValue = password.value
//     // console.log(`${usernameValue} ${emailValue} ${passwordValue}`);


//     const user = {
//         name : username.value,
//         email : email.value,
//         password : password.value
//     }
//     all_user.push(user)
//     username.value = ''
//     email.value = ''
//     password.value = ''

//     // console.log(all_user);

//     local_data = JSON.stringify(all_user)
//     localStorage.setItem("users",local_data)
//     getData()
// }

// function getData(){
//     let data = localStorage.getItem("users")
//     if(data){
//         all_user = JSON.parse(data)
//     }

//     for(let i=0; i<all_user.length; i++){
//         console.log(all_user[i]);
//     }
// }

// signupbtn.addEventListener('click',validateForm)

let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let signupbtn = document.getElementById('signup-btn');

// 1. Load existing data on page load, or default to an empty array if none exists
let all_user = JSON.parse(localStorage.getItem("users")) || [];

function validateForm(){
    // 2. Prevent form from auto-refreshing the page instantly so you can see logs
    // Note: If using type="submit", pass 'event' into the function to use event.preventDefault()
    
    const user = {
        name : username.value,
        email : email.value,
        password : password.value
    }
    
    // 3. Add new user to the existing list
    all_user.push(user)
    
    // 4. Save the updated list back to localStorage
    localStorage.setItem("users", JSON.stringify(all_user))
    
    // Clear input fields
    username.value = ''
    email.value = ''
    password.value = ''

    // 5. Print the updated list
    printUsers();
}

// Helper function to print users to the console
function printUsers() {
    console.log("--- Current Users in Storage ---");
    for(let i=0; i<all_user.length; i++){
        console.log(all_user[i]);
    }
}

// 6. Print existing users immediately when the page finishes loading/refreshing
printUsers();

signupbtn.addEventListener('click', validateForm)
