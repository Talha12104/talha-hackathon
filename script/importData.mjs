import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const client = createClient({
  projectId: "n35ki7n5",
  dataset: "production",
  token: "skJZBdKVsof8Yv8pdsfe1RlLWOepuVtTgVXX9QcQJl26RbRLTg8dnTd5b5FuoBsMBaUh4aFxneIkK060ArPBjXGWROWeHuT84gIVnRjagVF5vu4vK4UCuaRT3to6t2F1AA1P3Df4EFSG9YVK9NUYVNeeGFtwuv4LA4qYPNHpop3CSktkfuXl",
  apiVersion: '2025-01-15',
  useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading Image : ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image Uploaded Successfully : ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to Upload Image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching Product Data From API ...');

    const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product");
    const products = response.data.products;

    for (const item of products) {
      console.log(`Processing Item: ${item.name}`);

      let imageRef = null;
      if (item.imagePath) {
        imageRef = await uploadImageToSanity(item.imagePath);
      }

      // Aligning data with schema
      const sanityItem = {
        _type: 'product',
        name: item.name, // Required field
        price: item.price.toString(), // Convert price to string as required
        description: item.description || '', // Default to empty string if not provided
        discountPercentage: item.discountPercentage || 0, // Default to 0
        stockLevel: item.stockLevel || 0, // Default to 0
        isFeaturedProduct: item.isFeaturedProduct || false, // Default to false
        category: item.category || 'Other', // Default to 'Other' if no category provided
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined, // Set to undefined if no image
      };

      // Validate required fields
      if (!sanityItem.name || !sanityItem.price || !sanityItem.category) {
        console.error(`Skipping item due to missing required fields:`, item);
        continue;
      }

      console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity!`);
      const result = await client.create(sanityItem);
      console.log(`Uploaded Successfully: ${result._id}`);
      console.log("----------------------------------------------------------");
      console.log("\n\n");
    }

    console.log('Data Import Completed Successfully!');
  } catch (error) {
    console.error('Error Importing Data:', error);
  }
}

importData();
