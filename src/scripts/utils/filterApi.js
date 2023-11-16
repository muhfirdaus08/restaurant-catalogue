const getAllCategoryValues = (categories) => categories.map((category) => category.name);

const getFoodNames = (menuData) => {
  const foodNames = menuData.foods.map((food) => food.name);
  return foodNames;
};

const getDrinkNames = (menuData) => {
  const drinkNames = menuData.drinks.map((drink) => drink.name);
  return drinkNames;
};

const extractCustomerReviewInfo = (customerReviews) => {
  let customerReviewsHTML = '<div class="customer-reviews">';
  customerReviews.forEach((review) => {
    customerReviewsHTML += `
        <div class="customer-review">
          <div class="review-info">
            <p><strong class="bold-name">${review.name}</strong><span class="date">${review.date}</span></p>
          </div>
          <p>${review.review}</p>
        </div>
      `;
  });
  customerReviewsHTML += '</div>';
  return customerReviewsHTML;
};

export {
  getAllCategoryValues,
  getFoodNames,
  getDrinkNames,
  extractCustomerReviewInfo,
};
