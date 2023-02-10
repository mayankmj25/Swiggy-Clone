// Creating food items

class FoodItem {
  constructor(name, price, veg, image, cId, description) {
    this.name = name;
    this.price = price;
    this.veg = veg;
    this.image = image;
    this.cId = cId;
    this.description = description;
  }
}

let category = {
  ci1: "Veg Starter",
  ci2: "Non-veg Starter",
  ci3: "Veg Curries",
  ci4: "Breverages",
};

let fi1 = new FoodItem(
  "Paneer65",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/druwjzmfmz7qvepq3bkr ",
  "ci1",
  "E: 723. 82 kcal (241. 27 kcal), c: 30. 89 grams (10. 30 grams), p: 32. 95 grams (10. 98 grams), f: 51. 82 grams (17. 27 grams) [Serving info: 1 Serve, Serving size: 300 grams, Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]"
);

let fi2 = new FoodItem(
  "Chilly Paneer",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/byonwwb8mzxyqluxlqpq",
  "ci1",
  "E: 871. 69 kcal (272. 40 kcal), c: 21. 54 grams (6. 73 grams), p: 51. 90 grams (16. 22 grams), f: 64. 36 grams (20. 11 grams) [Serving info: 1 Serve, Serving size: 320 grams, Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]"
);

let fi3 = new FoodItem(
  "Veg Manchurian",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/etnsehnoylzjgipeapde",
  "ci1",
  "E: 240. 61 kcal (104. 61 kcal), c: 18. 83 grams (8. 19 grams), p: 12. 72 grams (5. 53 grams), f: 12. 39 grams (5. 39 grams) [Serving info: 1 Serve, Serving size: 230 grams, Energy: 240.61 kcal, Protein: 12.72g, Carbohydrates: 18.83g, Fat: 12.39g]"
);

let fi4 = new FoodItem(
  "Chilly Chicken (Boneless)",
  285,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ry3c3f518z10t4olu4l7",
  "ci2",
  "E: 604. 42 kcal (163. 36 kcal), c: 29. 67 grams (8. 02 grams), p: 50. 63 grams (13. 68 grams), f: 30. 94 grams (8. 36 grams) [Serving info: 1 Serve, Serving size: 370 grams, Energy: 604.42 kcal, Protein: 50.63g, Carbohydrates: 29.67g, Fat: 30.94g]"
);

let fi5 = new FoodItem(
  "Meghana Chicken 555",
  295,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/irnwr59vlrmciau11or0",
  "ci2",
  "E: 585. 13 kcal (195. 04 kcal), c: 26. 88 grams (8. 96 grams), p: 32. 48 grams (10. 83 grams), f: 39. 36 grams (13. 12 grams) [Serving info: 1 Serve, Serving size: 300 grams, Energy: 585.13 kcal, Protein: 32.48g, Carbohydrates: 26.88g, Fat: 39.36g]"
);

let fi6 = new FoodItem(
  "Chicken Lollypop",
  290,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ldqyxnhlfylhymnsopzc",
  "ci2",
  "E: 389. 14 kcal (155. 66 kcal), c: 7. 31 grams (2. 92 grams), p: 36. 13 grams (14. 45 grams), f: 23. 92 grams (9. 57 grams) [Serving info: 1 Serve, Serving size: 250 grams, Energy: 389.14 kcal, Protein: 36.13g, Carbohydrates: 7.31g, Fat: 23.92g]"
);

let fi7 = new FoodItem(
  "Chicken Biryani",
  280,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zbrpxvywfsrrb7os11jf",
  "ci2",
  "E: 1615. 27 kcal (153. 84 kcal), c: 190. 89 grams (18. 18 grams), p: 61. 82 grams (5. 89 grams), f: 64. 63 grams (6. 16 grams) [Serving info: 1 Serve, Serving size: 1050 grams, Energy: 1615.27 kcal, Protein: 61.82g, Carbohydrates: 190.89g, Fat: 64.63g]"
);

let fi8 = new FoodItem(
  "Veg Kadai",
  225,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iffbbbz435xq2c0uzxxt",
  "ci3",
  "E: 729. 09 kcal (132. 56 kcal), c: 37. 87 grams (6. 89 grams), p: 20. 61 grams (3. 75 grams), f: 54. 45 grams (9. 90 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 729.09 kcal, Protein: 20.61g, Carbohydrates: 37.87g, Fat: 54.45g]"
);

let fi9 = new FoodItem(
  "Palak Paneer Curry",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/slaicd3fv71xcsxblb2w",
  "ci3",
  "E: 833. 69 kcal (151. 58 kcal), c: 33. 75 grams (6. 14 grams), p: 30. 72 grams (5. 59 grams), f: 64. 01 grams (11. 64 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 833.69 kcal, Protein: 30.72g, Carbohydrates: 33.75g, Fat: 64.01g]"
);

let fi10 = new FoodItem(
  "Green Peas Curry",
  225,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/izr6y2zxm2o7j8bgj9s2",
  "ci3",
  "E: 675. 07 kcal (127. 37 kcal), c: 52. 47 grams (9. 90 grams), p: 22. 48 grams (4. 24 grams), f: 40. 67 grams (7. 67 grams) [Serving info: 1 Serve, Serving size: 530 grams, Energy: 675.07 kcal, Protein: 22.48g, Carbohydrates: 52.47g, Fat: 40.67g]"
);

let fi11 = new FoodItem(
  "Paneer Butter Masala",
  280,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ksjxi61s8xqlj8cqp4zs",
  "ci3",
  "E: 1156. 81 kcal (210. 33 kcal), c: 37. 93 grams (6. 90 grams), p: 43. 54 grams (7. 92 grams), f: 92. 60 grams (16. 84 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 1156.81 kcal, Protein: 43.54g, Carbohydrates: 37.93g, Fat: 92.6g]"
);

let fi12 = new FoodItem(
  "Mushroom Masala",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gqjbuq7xoyuxolxsprjp",
  "ci3",
  "E: 537. 70 kcal (119. 49 kcal), c: 34. 48 grams (7. 66 grams), p: 13. 09 grams (2. 91 grams), f: 38. 75 grams (8. 61 grams) [Serving info: 1 Serve, Serving size: 450 grams, Energy: 537.7 kcal, Protein: 13.09g, Carbohydrates: 34.48g, Fat: 38.75g]"
);

let fi13 = new FoodItem(
  "Aam Panna Sorbet",
  69,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gqjbuq7xoyuxolxsprjp",
  "ci4",
  "Aam Pora Shorbot is a great summer drink from Bengal and with its wonderful taste gives much needed coolness to your body. This drink comes very close to aam panna made in North India. "
);
//can also create a mapping of category and category Id
// can also add id of food

let foodItems = [
  fi1,
  fi2,
  fi3,
  fi4,
  fi5,
  fi6,
  fi7,
  fi8,
  fi9,
  fi10,
  fi11,
  fi12,
  fi13,
];

let addCategory = function (key) {
  let elem = document.querySelector(".category-list");
  let listElem = document.createElement("li");
  let linkElem = document.createElement("a");

  linkElem.setAttribute("href", `#${category[key]}`);
  linkElem.textContent = category[key];
  listElem.appendChild(linkElem);
  elem.appendChild(listElem);
};

let addSection = function (key, foodList) {
  let sectionH1 = document.createElement("h1");
  sectionH1.textContent = category[key];

  let sectionP = document.createElement("p");
  sectionP.textContent = `${foodList.length} Items`;

  let section = document.createElement("div");
  section.setAttribute("id", "section");
  section.setAttribute("id", `${category[key]}`);
  section.appendChild(sectionH1);
  section.appendChild(sectionP);

  let container = document.querySelector(".food-items");
  container.appendChild(section);
};

let renderCategory = function (key) {
  // adding category to list
  addCategory(key);

  // filtering items of given category
  let foodList = foodItems.filter((e) => {
    return e.cId == key;
  });

  // Adding Section of the category
  addSection(key, foodList);

  renderItems(foodList);
};

function renderItems(arr) {
  // Render items of specific category
  for (let i = 0; i < arr.length; i++) {
    addFoodItem(arr[i]);
  }
}

function addFoodItem(obj) {
  let leftP1 = document.createElement("p");
  leftP1.textContent = obj.veg ? "Veg" : "Non-Veg";

  let leftH3 = document.createElement("h3");
  leftH3.setAttribute("id", "title");
  leftH3.textContent = obj.name;

  let leftH6 = document.createElement("h6");
  leftH6.setAttribute("id", "price");
  leftH6.textContent = obj.price;

  let leftP2 = document.createElement("p");
  leftP2.setAttribute("id", "desc");
  leftP2.textContent = obj.description;

  let rightImg = document.createElement("img");
  rightImg.setAttribute("src", `${obj.image}`);

  let rightBtn = document.createElement("button");
  rightBtn.textContent = "ADD";

  let rightP = document.createElement("p");
  rightP.textContent = "Customisable";

  let left = document.createElement("div");
  left.setAttribute("id", "left-food");

  let right = document.createElement("div");
  right.setAttribute("id", "right-food");

  let item = document.createElement("div");
  item.setAttribute("class", "food-item");

  left.appendChild(leftP1);
  left.appendChild(leftH3);
  left.appendChild(leftH6);
  left.appendChild(leftP2);

  right.appendChild(rightImg);
  right.appendChild(rightBtn);
  right.appendChild(rightP);

  item.appendChild(left);
  item.appendChild(right);

  let container = document.querySelector(".food-items");
  container.appendChild(item);
}

function pageLoad() {
  let res = Object.keys(category).sort(); //Getting The Key Category List
  for (let i = 0; i < res.length; i++) {
    renderCategory(res[i]);
  }
}

pageLoad();
