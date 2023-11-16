import RestaurantSource from '../../data/api-call';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });

    const submitButton = document.querySelector('button[type=submit]');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      RestaurantSource.submitReview(restaurant.id);
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, 500);
    });
  },
};

export default Detail;
