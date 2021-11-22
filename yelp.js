// # a resturuant looks like this
// # res_data = {
// #   id: INTEGER *MUST BE UNIQUE,
// #   name: STRING,
// #   location: {
// #     city: STRING,
// #     state: STRING,
// #   },
// #   delivery: BOOLEAN,
// #   days_open: STRING *DAYS SEPERATED BY COMMAS(NO SPACES) ie 'mon,tue,wed',
// #   likes: INTEGER,
// #   dishes: ARRAY OF OBJECTS/HASHES
// #     { name: STRING, price: FLOAT, ingredients: ARRAY OF STRINGS },
// #   ],
// #   reviews: ARRAY OF HASHES [
// #     {user_id: INTEGER *id of user object, rating: INTEGER 0-5}
// #   ]
// # }

user1 = {
  id: 1,
  name: "Tony",
}
user2 = {
  id: 2,
  name: "Sally",
}
res1 = {
  id: 1,
  name: "Spicy Thai",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  days_open: "mon,tues,wed,thur,fri,sat,sun",
  likes: 1000,
  dishes: [
    { name: "Pad Thai", price: 10.25, ingredients: ["noddles", "peppers"] },
    { name: "Drunken Noodle", price: 9.25, ingredients: ["noddles", "chicken"] },
  ],
  reviews: [
    { user_id: 1, rating: 5 },
    { user_id: 2, rating: 3 },
  ],
}
res2 = {
  id: 2,
  name: "Albertos",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: false,
  days_open: "mon,tues,wed,thur,fri,sat",
  likes: 500,
  dishes: [
    { name: "Tacos", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Quesidalla", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { user_id: 1, rating: 2 },
    { user_id: 2, rating: 4 },
  ],
}

res3 = {
  id: 3,
  name: "KFC",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: false,
  days_open: "mon,tues,wed,thur,fri,sat",
  likes: 600,
  dishes: [
    { name: "Hot Wings", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Grilled Chicken", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { user_id: 1, rating: 2 },
    { user_id: 2, rating: 4 },
  ],
}

users = [user1, user2]
restaurants = [res1, res2]



// access user1 name through user1
console.log(user1.name);


// access res1 reviews
console.log(res1.reviews);


// what does this output: res1[:dishes]
console.log(res1.dishes)
// [
//   {
//     name: 'Pad Thai',
//     price: 10.25,
//     ingredients: [ 'noddles', 'peppers' ]
//   },
//   {
//     name: 'Drunken Noodle',
//     price: 9.25,
//     ingredients: [ 'noddles', 'chicken' ]
//   }
// ]


// print out just the name on res1 dishes (each loop)
res1.dishes.forEach((dish) => {
  console.log(dish.name);
})


// print out just the name on res1 dishes along with ingredients (nested each loop)
res1.dishes.forEach((dish) => {
  console.log("Dish: ", dish.name);
  console.log("Has Ingredients: ")
  dish.ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
})


// create a function that takes a user and returns a string with the users name and id
const userToString = (user) => {
  return `${user.name} has id ${user.id}`
};

const user1Str = userToString(user1)
console.log(user1Str)


// create a method that takes a res and returns the menu of that res
const getMenu = (res) => {
  return res.dishes.map((dish) => {
    return `${dish.name}: $${dish.price}`;
  });
};

const menu = getMenu(res1);
console.log(menu);


// create a function that takes a res and returns average review
const getAverage = (res) => {
  let ratingSum = 0;
  res.reviews.forEach((review) => {
    ratingSum += review.rating;
  });
  return ratingSum / res.reviews.length;
};

res1Average = getAverage(res1)
console.log(res1Average)


// Create: a method  that takes a restaurant and adds to your array
const addRes = (res, restaurants) => {
  restaurants.push(res);
}

console.log(restaurants.length);
addRes(res3, restaurants);
console.log(restaurants.length);


// Read: a method that display all res info
const restaurantInfo = (restaurants) => {
  restaurants.forEach((res) => {
    console.log(`${res.name} is in ${res.location.city}`);
  });
};

restaurantInfo(restaurants);


//      Update: a  method that takes restaurants and updates that to your array
const updateRes = (res, restaurants, index) => {
  restaurants[index] = res;
};

console.log(restaurants);
updateRes(res3, restaurants, 0)
console.log(restaurants);


//      Delete: a method that deletes res from arr
const deleteRes = (id, restaurants) => {
  const indexToDelete = restaurants.findIndex((res) => {
    return res.id === id;
  });
  restaurants.splice(indexToDelete, 1);
};

console.log(restaurants)
deleteRes(2,restaurants);
console.log(restaurants)

