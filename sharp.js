/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

const processImage = async (image) => {
  const resizeAndSave = async (width, suffix, format = 'jpg') => {
    const buffer = await sharp(`${target}/${image}`).resize(width).toBuffer();
    const outputPath = path.resolve(
      __dirname,
      `${destination}/${image
        .split('.')
        .slice(0, -1)
        .join('.')}-${suffix}.${format}`
    );
    fs.writeFileSync(outputPath, buffer);
    return outputPath;
  };

  const processWebp = async (width, suffix) => {
    const buffer = await sharp(`${target}/${image}`).resize(width).toBuffer();
    const outputPath = path.resolve(
      __dirname,
      `${destination}/${image
        .split('.')
        .slice(0, -1)
        .join('.')}-${suffix}.webp`
    );
    fs.writeFileSync(outputPath, buffer);
    return outputPath;
  };

  const [largePath, smallPath, xlargePath] = await Promise.all([
    resizeAndSave(800, 'large'),
    resizeAndSave(480, 'small'),
    resizeAndSave(1200, 'xlarge'),
  ]);

  await Promise.all([
    imageminWebp([await processWebp(800, 'large')], {
      destination,
      plugins: [imageminWebp({ quality: 75 })],
    }),
    imageminWebp([await processWebp(480, 'small')], {
      destination,
      plugins: [imageminWebp({ quality: 75 })],
    }),
    imageminWebp([await processWebp(1200, 'xlarge')], {
      destination,
      plugins: [imageminWebp({ quality: 75 })],
    }),
  ]);

  console.log('Image processed:', image);
};

fs.readdirSync(target).forEach((image) => {
  processImage(image);
});
