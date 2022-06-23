// class Student{
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age =age;
//     }
    
//     getName() {
//         console.log(`use name is ${this.fname} `);
//     }
// }

// class NewStudent extends Student {
//     constructor(weight) {
//         this.weight = weight;
//     }
// }

// let user3 = new NewStudent('levani', 'ragavagvari', 20);
// let user4 = new NewStudent('ana', 'ragavagvari', 20, 56);

// console.log(user4);


// function Person(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.getAge = function() {
//         console.log(`user age is ${this.age}`);
//     }
// }

// Person.prototype.getName = function() {
//     console.log(`user name is ${this.fname}`);
// }
// let user = new Person('irakli', 'smith', 35);
// let user2 = new Person('giorgi', 'ragaca', 25);

// user.getName();



// accordion
// let accordion = document.querySelectorAll('.container');
// let accordion =document.getElementsByClassName('container');

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//        this.classList.toggle('active');
//     })
// }

// filter
// let filter = document.getElementById('filter');
// let result = document.getElementById('result');
// let listItems = [];

// function getUsers() {
//     fetch('https://reqres.in/api/users?page=2', {
//         method: 'GET'
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(responseData) {
//         responseData.data.forEach( element => {
//             let li = document.createElement('li');

//             let span = document.createElement('span');
//             span.innerHTML = `${element.first_name} ${element.last_name}`;

//             let img = document.createElement('img');
//             img.src = element.avatar;

//             li.appendChild(img);
//             li.appendChild(span);

//             listItems.push(li);

//             result.appendChild(li);          
//         });
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }

// getUsers();


// function filterData(searchItem) {
//     listItems.forEach( item => {
//         // console.log(item);
//         if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//             item.classList.remove('hide');
//         } else {
//             item.classList.add('hide');
//         }
//     })
// }

// filter.addEventListener('input', function(event){
//     filterData(event.target.value);
// });





//promise
// fetch('https://reqres.in/api/users?page=2')
//     .then( function(response){
//         console.log('ok');
//     })
//     .catch( (reject) => {
//         console.log('error');
//     })



// function apiRequist(url) {
//     return new Promise( (resolve, reject) => {
//         // setTimeout( () => {
//         //     resolve();
//         // }, 1000)
//         fetch('https://reqres.in/api/users?page=2')
//         .then(response => response.json())
//         .then( function(response)  {
//             resolve(response)
//         })
//         .catch(function(error) {
//             reject(error);
//         })
//     });
// }

// apiRequist()
//     .then( function(response) {
//         console.log('ok');
//     })
//     .catch(function(error) {
//         console.log('error page');
    })