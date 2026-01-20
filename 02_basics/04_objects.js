const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Eleven Hawkins";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularUser={
    email:"mike.wheeler@example.com",
    fullname:{
        userfullname:{
            firstname:"Mike",
            lastname:"Wheeler"
        }
    }
};
//console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"e",6:"f"};
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4};//spread operator, most prefered way
//console.log(obj3);


const users=[
    {
        id:1,
        email:"vibhorg@example.com",
        fullname:{
            userfullname:{
                firstname:"Vibhor",
                lastname:"Gupta"
            }
        }
    },
    {
        id:2,
        email:"vasug@example.com",
        fullname:{
            userfullname:{
                firstname:"Vasu",
                lastname:"Gupta ji"
            }
        }
    }
]

//console.log(users[1].fullname.userfullname.lastname);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("name"));

const course={
    coursename:"JavaScript in Hindi",
    price:"999",
    courseInstructor:"Vibhor Gupta",
}
//course.courseInstructor="Vibhor G.";
const{courseInstructor:ins}=course;//destructuring
//console.log(courseInstructor);
console.log(ins);

// const navbar=({company})=>{

// }
// navbar(company="vibhor")
