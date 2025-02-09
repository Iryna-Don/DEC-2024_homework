// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let divWrapper = document.createElement('div');
document.body.appendChild(divWrapper);
let urlAllCarts = new URL('https://dummyjson.com/carts');
let limitCarts = 10;
let skipCarts = 0;

urlAllCarts.searchParams.set('limit', JSON.stringify(limitCarts));
urlAllCarts.searchParams.set('skip', JSON.stringify(skipCarts));

let btnPrevious = document.createElement('button');
btnPrevious.innerText = "Previous";
let btnNext = document.createElement('button');
btnNext.innerText = "Next";

btnNext.onclick = function () {
    let formerAllCarts = document.querySelector('.wrapCarts');
    divWrapper.removeChild(formerAllCarts);
    skipCarts += limitCarts;
    urlAllCarts.searchParams.set('skip', JSON.stringify(skipCarts));
    createStructureOfCarts();
}
btnPrevious.onclick = function () {
    let formerAllCarts = document.querySelector('.wrapCarts');
    divWrapper.removeChild(formerAllCarts);
    skipCarts -= limitCarts;
    urlAllCarts.searchParams.set('skip', JSON.stringify(skipCarts));
    createStructureOfCarts();
}

divWrapper.append(btnPrevious, btnNext);
createStructureOfCarts();

function createStructureOfCarts() {
    fetch(urlAllCarts)
        .then(response => response.json())
        .then(({carts, total}) => {
            let allCarts = document.createElement('div');
            divWrapper.appendChild(allCarts);
            allCarts.classList.add('wrapCarts');

            skipCarts === 0 ? btnPrevious.disabled = true : btnPrevious.disabled = false;
            skipCarts >= total - limitCarts ? btnNext.disabled = true : btnNext.disabled = false;

            for (const {id, userId, total, totalProducts, totalQuantity, products} of carts) {
                let cartDiv = document.createElement('div');
                cartDiv.classList.add('cart');
                allCarts.appendChild(cartDiv);

                let cartId = document.createElement('p');
                cartId.classList.add('id');
                cartId.innerText = `Cart ID: ${id}`;

                let cartUserId = document.createElement('p');
                cartUserId.classList.add('userId');
                cartUserId.innerText = `User ID: ${userId}`;

                let cartTotal = document.createElement('span');
                cartTotal.classList.add('totalPrice');
                cartTotal.innerText = `Total Price: ${total}`;

                let cartTotalProducts = document.createElement('span');
                cartTotalProducts.classList.add('totalProducts');
                cartTotalProducts.innerText = `Total Products: ${totalProducts}`;

                let cartTotalQuantity = document.createElement('span');
                cartTotalQuantity.classList.add('totalQuantity');
                cartTotalQuantity.innerText = `Total Quantity: ${totalQuantity}`;
                let header = document.createElement('div');
                cartDiv.appendChild(header);
                header.classList.add('header');

                let divProducts = document.createElement('div');
                divProducts.classList.add('productsInCart')

                header.append(cartId, cartUserId, cartTotal, cartTotalProducts, cartTotalQuantity, divProducts);
                cartDiv.appendChild(divProducts);

                for (const {
                    id,
                    title,
                    thumbnail,
                    price,
                    quantity,
                    total,
                    discountPercentage,
                    discountedTotal
                } of products) {
                    let productId = document.createElement('p');
                    productId.classList.add('product_id');
                    productId.innerText = `Product ID: ${id}`;

                    let hr = document.createElement('hr');

                    let productTitle = document.createElement('p');
                    productTitle.classList.add('product_title');
                    productTitle.innerText = `Product Title: ${title}`;

                    let productThumbnail = document.createElement('img');
                    productThumbnail.classList.add('product_thumbnail');
                    productThumbnail.src = `${thumbnail}`;

                    let productPrice = document.createElement('p');
                    productPrice.classList.add('product_price');
                    productPrice.innerText = `Price: ${price}`;

                    let productQuantity = document.createElement('p');
                    productQuantity.classList.add('product_quantity');
                    productQuantity.innerText = `Quantity: ${quantity}`;

                    let productTotal = document.createElement('p');
                    productTotal.classList.add('product_total');
                    productTotal.innerText = `Total: ${total}`;

                    let productDiscountPercentage = document.createElement('p');
                    productDiscountPercentage.classList.add('product_discountPercentage');
                    productDiscountPercentage.innerText = `Discount Percentage: ${discountPercentage}`;

                    let productDiscountedTotal = document.createElement('p');
                    productDiscountedTotal.classList.add('product_discountedTotal');
                    productDiscountedTotal.innerText = `Discount Percentage: ${discountedTotal}`;

                    divProducts.append(hr, productId, productTitle, productThumbnail, productPrice, productQuantity, productTotal, productDiscountPercentage, productDiscountedTotal);
                }
            }
        })
}


//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.
divWrapForRecipes = document.createElement('div');
document.body.appendChild(divWrapForRecipes);
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(({recipes}) => {

        let allRecipes = document.createElement('div');
        allRecipes.classList.add('all');
        divWrapForRecipes.appendChild(allRecipes);


        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];

            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipeDiv');
            allRecipes.appendChild(recipeDiv);


            let recipeId = document.createElement('p');
            recipeId.innerText = `Recipe ID: ${recipe.id}`;

            let recipeName = document.createElement('h2');
            recipeName.innerText = recipe.name;

            let ul = document.createElement('ul');
            ul.innerText = 'Ingredients: ';

            let ingredients = recipe.ingredients;
            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }

            let ol = document.createElement('ol');
            ol.innerText = 'Instructions: ';

            let instructions = recipe.instructions;
            for (const instruction of instructions) {
                let li = document.createElement('li');
                li.innerText = instruction;
                ol.appendChild(li);
            }

            let recipePrepTimeMinutes = document.createElement('p');
            recipePrepTimeMinutes.innerText = `prepTimeMinutes: ${recipe.prepTimeMinutes}min`;

            let recipeCookTimeMinutes = document.createElement('p');
            recipeCookTimeMinutes.innerText = `cookTimeMinutes: ${recipe.cookTimeMinutes}min`;

            let recipeServings = document.createElement('p');
            recipeServings.innerText = `servings: ${recipe.servings}`;

            let recipeDifficulty = document.createElement('p');
            recipeDifficulty.innerText = `difficulty: ${recipe.difficulty}`;

            let recipeCuisine = document.createElement('p');
            recipeCuisine.innerText = `cuisine: ${recipe.cuisine}`;

            let recipeCaloriesPerServing = document.createElement('p');
            recipeCaloriesPerServing.innerText = `caloriesPerServing: ${recipe.caloriesPerServing}ккал`;

            let divTags = document.createElement('div');
            divTags.innerText = 'Tags: ';
            let tags = recipe.tags;
            for (const tag of tags) {
                let span = document.createElement('span');
                span.innerText = tag;
                divTags.appendChild(span);
            }

            let recipeUserId = document.createElement('p');
            recipeUserId.innerText = `userId: ${recipe.userId}`;

            let image = document.createElement('img');
            image.src = recipe.image;
            image.style.width = '100%';

            recipeDiv.append(recipeId, recipeName, ul, ol, recipePrepTimeMinutes, recipeCookTimeMinutes, recipeServings, recipeDifficulty, recipeCuisine, recipeCaloriesPerServing, divTags, recipeUserId, image);

            let ratingDiv = document.createElement('div');
            ratingDiv.classList.add('rating');
            recipeDiv.append(ratingDiv);

            let ratingBodyDiv = document.createElement('div');
            ratingBodyDiv.classList.add('rating_body');
            ratingDiv.appendChild(ratingBodyDiv);

            let recipeRatingActive = document.createElement('div');
            recipeRatingActive.classList.add('rating_active');
            recipeRatingActive.style.width = `${recipe.rating * 20}%`;
            ratingBodyDiv.appendChild(recipeRatingActive);

            let recipeRatingItems = document.createElement('div');
            recipeRatingItems.classList.add('rating_items');
            recipeRatingActive.appendChild(recipeRatingItems);

            let ratingValue = document.createElement('div')
            ratingValue.classList.add('rating_value');
            ratingDiv.appendChild(ratingValue);
            ratingValue.innerText = recipe.rating;

            let recipeReviewCount = document.createElement('p');
            recipeReviewCount.innerText = `reviewCount: ${recipe.reviewCount}`;

            let mealTypesDiv = document.createElement('div');
            let mealTypes = recipe.mealType;
            for (const mealType of mealTypes) {
                let span = document.createElement('span');
                span.innerText = `mealType: ${mealType}`;
                mealTypesDiv.appendChild(span);
            }

            recipeDiv.append(recipeReviewCount, mealTypesDiv);
        }

    })


