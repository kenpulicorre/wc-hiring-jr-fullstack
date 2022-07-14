/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from "./libs/test.js";
//-------------
import $t2 from "./libs/1-source-data.js";

//----------

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from "lodash";
const source = $t.source(1);
$t.answer(1, async () => {
  // Your code goes here
  let Restaurants = 0,
    Income = 0,
    Groceries = 0,
    Rent = 0,
    balance = 0,
    expenses = 0;
  const d1 = $t2;
  // d1.forEach((e) => {
  //   if (e.category == "Restaurants") {
  //     Restaurants = Restaurants + e.amount;
  //   } else if (e.category == "Income") {
  //     Income = Income + e.amount;
  //   } else if (e.category == "Groceries") {
  //     Groceries = Groceries + e.amount;
  //   } else if (e.category == "Rent") {
  //     Rent = Rent + e.amount;
  //   }
  // });

  for (let i = 0; i < d1.length; i++) {
    switch (d1[i].category) {
      case "Restaurants":
        Restaurants = Restaurants + d1[i].amount;
        break;
      case "Income":
        Income = Income + d1[i].amount;
        break;
      case "Groceries":
        Groceries = Groceries + d1[i].amount;
        break;
      case "Rent":
        Rent = Rent + d1[i].amount;
      default:
        break;
    }
  }

  expenses = Restaurants + Groceries + Rent;
  balance = Income - (Restaurants + Groceries + Rent);
  let Target = {
    balance: balance,
    income: Income,
    expenses: expenses,
    byCategories: {
      Restaurants: -Restaurants,
      Income: Income,
      Groceries: -Groceries,
      Rent: -Rent,
    },
  };

  return Target;
});

/*
2. Asynchronous programming:
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.

*/
const $source = $t.source(2);

$t.answer(2, async () => {
  // Your code goes here:
  // 1. Get ids: $source.getIds()
  let x = await $source.getIds();
  let n = x;
  // 2. Get text for every id: $source.getText(id)
  let array = n.map(async (e) => await $source.getText(e));

  let bb = Promise.all(array).then((values) => {
    return values;
  });
  // 3. Return array of texts
  return bb;
});
