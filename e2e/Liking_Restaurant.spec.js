/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favourite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#not-found');
  I.see('No Liked Restaurant', '#not-found');
});

// Scenario('liking one restaurant', async ({ I }) => {
//   I.see('No Liked Restaurant', '#not-found');

//   I.amOnPage('/');
//   await I.waitForElement('.post-item__title a', 3);
//   I.seeElement('.post-item__title a');
//   const firstResto = locate('.post-item__title a').first();
//   const firstRestoTitle = await I.grabTextFrom(firstResto);
//   I.click(firstResto);

//   await I.waitForElement('#likeButton', 2);
//   I.click('#likeButton');
//   I.amOnPage('/#/favourite');
//   I.seeElement('.post-item');
//   const likedRestoTitle = await I.grabTextFrom('.post-item__title');
//   assert.strictEqual(firstRestoTitle, likedRestoTitle);
// });

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Liked Restaurant', '#not-found');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  const firstMovie = locate('.post-item__title a').first();
  const firstMovieTitle = await I.grabTextFrom(firstMovie);
  I.click(firstMovie);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.post-item__title a');
  const likedMovieTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstMovieTitle, likedMovieTitle);
});
