/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteMovieArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, , eqeqeq
    return favoriteRestaurants.find((movie) => movie.id == id);
  },

  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(movie) {
    // eslint-disable-next-line no-prototype-builtins
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(movie.id)) {
      return;
    }

    favoriteRestaurants.push(movie);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id

    // eslint-disable-next-line eqeqeq
    favoriteRestaurants = favoriteRestaurants.filter((movie) => movie.id != id);
  },

  async searchMovies(query) {
    return (await this.getAllMovies()).filter((movie) => {
      const loweredCaseMovieTitle = (movie.title || '-').toLowerCase();
      const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedMovieTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteMovieArray);
});
