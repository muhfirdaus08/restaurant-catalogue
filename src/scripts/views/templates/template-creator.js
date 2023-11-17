import CONFIG from '../../globals/config';
import {
  getAllCategoryValues,
  getFoodNames,
  getDrinkNames,
  extractCustomerReviewInfo,
} from '../../utils/filterApi';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img crossorigin="anonymous" class="movie__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
    <h3 class="movie__info__title">Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <p>${getAllCategoryValues(restaurant.categories).join(', ')}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="movie__overview">
        <h3>Menus</h3>
        <ul class="menus">
            <li>Foods
                <ol class="menus__item">
                    ${getFoodNames(restaurant.menus).map((food) => `<li>${food}</li>`).join('')}
                </ol>
            </li>
            <li>Drinks
                <ol class="menus__item">
                    ${getDrinkNames(restaurant.menus).map((drink) => `<li>${drink}</li>`).join('')}
                </ol>
            </li>
        </ul>
    </div>
    <div class="add-review">
        <h3>Add Your Review</h3>
        <form id="review-form">
            <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            </div>
            <div>
            <label for="review">Review:</label>
            <textarea id="review" name="review" rows="4" required></textarea>
            </div>
            <div>
            <button type="submit">Submit Review</button>
            </div>
        </form>
    </div>
    <div class="movie__overview">
        <h3>Customer Reviews</h3>
        <div>${extractCustomerReviewInfo(restaurant.customerReviews)}</div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="movie-item">
    <div class="movie-item__header">
    <img crossorigin="anonymous" class="movie-item__header__poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
    </div>
    </div>
    <div class="movie-item__content">
        <p tabindex="0" class="post-item__city">${restaurant.city}</p>
        <h3 tabindex="0" class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="post-item__content_button">
        <a href="/#/detail/${restaurant.id}"><button class="post-button">Read More</button></a>
    </div>
    </div>
`;

const createHeadlineRestaurant = (restaurant) => `
    <figure class="headline__figure">
    <img tabindex="0" class="lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </figure>
    <div class="headline__content">
        <p tabindex="0" class="post-item__city">${restaurant.city}</p>
        <h1 tabindex="0" class="headline__title">${restaurant.name}</h1>
        <p tabindex="0" class="headline__description">
            ${restaurant.description}
        </p>
        <p tabindex="0" class="post-item__rating">Rating: <span class="post-item__rating__value"> ${restaurant.rating}</span></p>
        <a href="/#/detail/${restaurant.id}"><button class="headline__button">Read More</button></a>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createHeadlineRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
