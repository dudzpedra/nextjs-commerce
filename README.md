# Next.js Commerce and Shopify

My Nextjs Commerce template first app. Integration with Shopify using the Storefront API.

Demo live at: [demo.vercel.store](https://demo.vercel.store/)

## Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components
- Theming
- Standardized Data Hooks
- Integrations - Integrate seamlessly with the most common ecommerce platforms.
- Dark Mode Support

## Integrations

Next.js Commerce integrates out-of-the-box with BigCommerce, Shopify, Swell, Saleor and Vendure. We plan to support all major ecommerce backends.

## Configuration

Run npm run start to start a development server (default: localhost:3000). 

### Features

Every provider defines the features that it supports under `framework/{provider}/commerce.config.json`

#### Features Available

- cart
- search
- wishlist
- customerAuth
- customCheckout

#### How to turn Features on and off

- Open `commerce.config.json`
- You'll see a config file like this:
  ```json
  {
    "features": {
      "wishlist": false,
      "customCheckout": true
    }
  }
  ```
- Turn `wishlist` on by setting `wishlist` to `true`.
- Run the app and the wishlist functionality should be back on.

