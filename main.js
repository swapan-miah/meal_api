/* ---------- All select item start ----------*/
const meal_Search_keyWord_Field = document.getElementById(
  "meal_Search_keyWord_Field"
);
const displayMealResult = document.getElementById("displayMealResult");
let error_section = document.getElementById("error_section");

/* ---------- All select item end ----------*/
function displaySearchMealItems() {
  /* ---------- get all selection value start ----------*/
  displayMealResult.innerHTML = "";
  meal_search_Value = meal_Search_keyWord_Field.value;
  meal_Search_keyWord_Field.value = "";
  /* ---------- get all selection value end ----------*/
  /* ---------- create url and update and fetch  start ----------*/
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal_search_Value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealItem(data.meals));

  /* ---------- create url and update and fetch  end ----------*/
}
// window.onload = (event) => {
//   mealLoadData();
// };
// function mealLoadData() {
//   const mealNullUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
//   fetch(mealNullUrl)
//     .then((res) => res.json())
//     .then((data) => displayMealItem(data.meals));
//   // .then((data) => console.log(data.meals));
// }

function displayMealItem(foods) {
  console.log(foods);
  // const error_message = document.createElement("div");
  // error_section.appendChild(error_message);
  if (foods === null) {
    error_message.innerText = `The Food ${meal_search_Value} is not Found`;
    console.log(error_message.innerText);
    // console.log(meal_search_Value);
    let error_message = document.createElement("div");
    error_message.classList.add("bg-primary");
    error_message.style.height = " 70px";
    error_message.style.width = " 100%";
    error_section.appendChild(error_message);
  } else {
    foods.forEach((food) => {
      // console.log(food);
      const col = document.createElement("div");
      col.innerHTML = `
      <div class="card">
      <img src=${food.strMealThumb} class="card-img-top" alt=${food.strMeal} />
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">
        ${food.strInstructions.slice(0, 150) + " <strong>see more</strong>"}
        </p>
        <button class="btn btn-dark mb-3 w-100">See More Details </button>
      </div>
    </div>
      `;
      displayMealResult.appendChild(col);
    });
  }
}
