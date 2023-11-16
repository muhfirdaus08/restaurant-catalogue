import RestaurantSource from '../../data/api-call';
import {
  createRestaurantItemTemplate,
  createHeadlineRestaurant,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="headline"></div>
        <div class="content">
            <h2 class="content__heading">Latest Post</h2>
            <div id="restaurants" class="restaurants"></div>
        </div>
      `;
  },

  async afterRender() {
    const headline = await RestaurantSource.headlineRestaurants();
    console.log(headline);

    const headlineContainer = document.querySelector('.headline');
    headlineContainer.innerHTML += createHeadlineRestaurant(headline);

    const restaurants = await RestaurantSource.getListRestaurants();
    console.log(restaurants);

    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
