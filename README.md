# JJ Load & Go Services

Junk removal and hauling website for Northern Virginia, built with Next.js App Router, React, TypeScript, and Tailwind CSS. The interactive service-area map uses Leaflet and OpenStreetMap.

## Development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The website preserves the existing business content and phone/SMS contact links. Business images are stored locally in `public/images`. Browser icons use the matching hauling-truck emblem in `public/favicon.svg`, with PNG, ICO, and Apple touch variants. Fonts load from Google Fonts; map tiles load from OpenStreetMap. No environment variables are required.

Deploy with a host that supports Next.js or run the production server with `npm start`.

## Website link preview

The 1200 × 630 social card is `public/social/jj-load-and-go-preview.jpg`. It uses the existing business branding, red truck and trailer, and “We haul it all” tagline. Matching browser and Apple touch icons are already integrated.

Set `SITE_URL` to the verified public origin in the deployment environment and rebuild. If it is absent, `VERCEL_PROJECT_PRODUCTION_URL` is used when available. Without either setting, absolute image and canonical metadata are deliberately omitted until there is a real origin. No domain has been configured yet.

For local crawler verification only, run `SITE_URL=http://localhost:3019 npm run dev -- --port 3019`. This local URL is not a deployment setting. Verify the public page and image after deployment; social messaging services cannot fetch localhost or authenticated previews.
