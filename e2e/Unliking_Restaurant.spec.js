/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favourite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('#not-found');
  I.see('No Liked Restaurant', '#not-found');

  I.amOnPage('/');
  await I.waitForElement('.post-item__title a', 3);
  I.seeElement('.post-item__title a');
  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.waitForElement('#likeButton', 2);
  I.click('#likeButton');
  I.amOnPage('/#/favourite');
  I.seeElement('.post-item__title a');
  const unlikedRestoTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestoTitle, unlikedRestoTitle);

  I.seeElement('.post-item__title a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  await I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favourite');
  I.see('No Liked Restaurant', '#not-found');
});
