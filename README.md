<p align="center">
  <a href="https://carrigan.dev">
    <h3 align="center">Andrew J. Carrigan Dev Portfolio</h3>
  </a>
</p>

<p align="center">Playground and portfolio to showcase me using Typescript Next.JS React framework, along with <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the restful API backend as a controller layer deployed through vercel, connected to a PostgreSQL database instance hosted on Railway!</p>

<br/>

## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the frontend and FastAPI as the API backend, while connecting to a hosted PostgreSQL instance on Railway. This stack was decided on me due to my experience utilizing AI tools, it allows easy integration of various AI tools such as PineconeDB, ChromaDB, LangChain, or OpenAI, while allowing all the SEO benefits and optimization of a user interface given through the Next.JS framework.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel. By utilizing vercel's python runtime it allows a single domain to encapsulate a full stack deployment on vercel allowing ease of security, and an ability to maintain control of the python dependencies utilizing requirements.txt file.

## Next.JS Template

To always give  credit where credit is due this was the template used to begin development

https://nextjs-fastapi-starter.vercel.app/

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdigitros%2Fnextjs-fastapi%2Ftree%2Fmain)

or build locally

```bash
npx create-next-app nextjs-fastapi --example "https://github.com/digitros/nextjs-fastapi"
```

## Developing This Project Locally

You can also clone this repo

It will require your own connections to through the .env to your own ecosystems if you try to do this (and possibly my public images you might want to switch out 😁)


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Then populate your .env.local based off the example with your own values


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.

