import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async getListRestaurants() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async headlineRestaurants() {
    const restaurant = await RestaurantSource.getListRestaurants();
    const restaurantNewPost = restaurant[restaurant.length - 1];
    return restaurantNewPost;
  }

  static async submitReview(restaurantId) {
    const nameInput = document.getElementById('name');
    const reviewInput = document.getElementById('review');

    const reviewData = {
      id: restaurantId,
      name: nameInput.value,
      review: reviewInput.value,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    };

    fetch(API_ENDPOINT.ADD_REVIEW, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          console.log('Review berhasil ditambahkan!');
        } else {
          console.error(`Terjadi kesalahan: ${data.message}`);
        }
      })
      .catch((error) => {
        console.error(`Terjadi kesalahan saat mengirim permintaan: ${error}`);
      });
  }
}

export default RestaurantSource;
