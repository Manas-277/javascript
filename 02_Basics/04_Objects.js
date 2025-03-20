// const user = {}; //Non singleton object (LITERALS)
// const user = new Object(); //singleton object (CONSTRUCTOR)
// // console.log(user);

// user.id = "123m#dubf";
// user.name = "Sam";
// user.isLoggedIn = false;

// // console.log(user);

const client = {
    email: "client@abc.com",
    fullname : {
        firstname: "Rajat",
        middlename: "Dumb",
        lastname: "Srivastava"
    },

    address: {
        street: "F/23, Gopal Nagar, Saharanpur",
        city: "saharanpur",
        state: "Uttar Pradesh",
        pincode: 247001,

        WorkPlaceAddr:{
            street: "near new horizon college",
            company_name: "LG Soft India",
        }
    }
}

// console.log(client.address.WorkPlaceAddr.company_name); //nested object 

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = Object.assign({}, obj1, obj2, obj3, obj4) //good practice to add {} -> Object.assign(target, source) so here {} act as target where everything will get copied correctly
const obj3 = {...obj1, ...obj2};
console.log(obj3);


//arrays of objects
const users = [
    {name:"raaju"},
    {},
    {}
]

// console.log(users[0].name);
// console.log(users);

// console.log(Object.keys(client));
// console.log(Object.values(client));

// console.log(client.hasOwnProperty('isLogged'));


// Object de-structure

const person = {
    name: "manas",
    rollNumber: 2110990839
}

// instead of everytime using person.rollNumber
//we can deconstruct it or make a macro
const {rollNumber : rn} = person;
console.log(rn);

// -------- JSON API -------------
// {
//     "name": "Manas",
//     "age" : "21"
// }

// {
//     "login": "hiteshchoudhary",
//     "id": 11613311,
//     "node_id": "MDQ6VXNlcjExNjEzMzEx",
//     "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/hiteshchoudhary",
//     "html_url": "https://github.com/hiteshchoudhary",
//     "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
//     "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
//     "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
//     "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
//     "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
//     "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": "Hitesh Choudhary",
//     "company": null,
//     "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
//     "location": "India",
//     "email": null,
//     "hireable": null,
//     "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
//     "twitter_username": "hiteshdotcom",
//     "public_repos": 103,
//     "public_gists": 5,
//     "followers": 40201,
//     "following": 0,
//     "created_at": "2015-03-23T13:03:25Z",
//     "updated_at": "2025-01-28T09:27:31Z"
//   }










