// Variable Declearation
const searchFeild = document.getElementById('search-feild');
const searchResult = document.getElementById('search-result');


const searchFood = async () => {
    // Get Input Value
    const searchText = searchFeild.value;
    //Clear Input Value Or Previous Result
    searchFeild.value = '';
    searchResult.textContent = '';
    //Load MealDB Data By API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayResult(data.meals)

}

searchFood('fish');
// Display MealDB Data
const displayResult = async meals => {
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            
            <div class="col">
                <div class="card">
                    <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            </div>
            `
        searchResult.appendChild(div)
    })


}


