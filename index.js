const searchButton = () =>{
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) =>{
    meals.forEach(meal => {
        // console.log(meals);
        const mealsDiv = document.getElementById('meals-div');
        const mealDiv = document.createElement('div');
        mealDiv.className = 'style-meal-div'
        mealDiv.innerHTML = `
        <img onclick="foodDetails('${meal.strMeal}')" src="${meal.strMealThumb}" alt="">
        <p>${meal.strMeal}</p>
        `
        mealsDiv.appendChild(mealDiv);
    });
}

const foodDetails = (strMeal) =>{
    console.log('food', strMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayIngredient(data.meals[0]))
}

const displayIngredient = (data) =>{
    console.log(data)
    const ingredientDiv = document.getElementById('details');
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'style-ingredient'
    detailsDiv.innerHTML =`
        <img src="${data.strMealThumb}" alt="">
        <h3>${data.strMeal}</h3>
        <p>Ingredients</p>
        <ul>
            <li>${data.strIngredient1}</li>
            <li>${data.strIngredient2}</li>
            <li>${data.strIngredient3}</li>
            <li>${data.strIngredient4}</li>
            <li>${data.strIngredient5}</li>
            <li>${data.strIngredient6}</li>
        </ul>
    `;
    ingredientDiv.appendChild(detailsDiv);
}