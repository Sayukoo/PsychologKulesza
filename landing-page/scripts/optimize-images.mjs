import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const imgDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'components', 'images');

async function run() {
  // Logo: displayed at ~40x40 CSS px, scaled 2.6x => ~104px, x2 for retina => 256w is plenty
  await sharp(path.join(imgDir, 'logo.png'))
    .resize({ width: 256 })
    .webp({ quality: 90 })
    .toFile(path.join(imgDir, 'logo.webp'));

  // Profile photo: rendered up to ~600px wide (half column), phones up to ~430px * dpr2
  await sharp(path.join(imgDir, 'Profile_website.png'))
    .resize({ width: 480 })
    .webp({ quality: 80 })
    .toFile(path.join(imgDir, 'profile-480.webp'));

  await sharp(path.join(imgDir, 'Profile_website.png'))
    .resize({ width: 960 })
    .webp({ quality: 82 })
    .toFile(path.join(imgDir, 'profile-960.webp'));

  // Small PNG for the OpenGraph image route (logo displayed at 180px there)
  await sharp(path.join(imgDir, 'logo.png'))
    .resize({ width: 320 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(imgDir, 'logo-og.png'));

  const files = ['logo.webp', 'profile-480.webp', 'profile-960.webp'];
  for (const f of files) {
    const meta = await sharp(path.join(imgDir, f)).metadata();
    console.log(`${f}: ${meta.width}x${meta.height}`);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
