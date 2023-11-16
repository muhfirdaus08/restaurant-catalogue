import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Favourited Restaurant</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      const noRestaurants = document.createElement('h2');
      noRestaurants.innerHTML = '<h2>No Liked Restaurant</h2>';
      noRestaurants.setAttribute('id', 'not-found');
      restaurantsContainer.appendChild(noRestaurants);
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
