# Appscrip Frontend Developer Assignment

A responsive Product Listing Page (PLP) developed as part of the Appscrip Frontend Developer assignment.

The application is built with Next.js and recreates the provided Figma design with responsive layouts, product filtering, sorting, wishlist interaction, API integration, and SEO considerations.

## Features

- Responsive Product Listing Page
- Desktop, tablet, and mobile layouts
- Product data fetched from Fake Store API
- Product filtering by category
- Multi-select filter options
- Product sorting
- Show/Hide filter sidebar
- Wishlist toggle functionality
- Responsive navigation and footer
- Mobile footer accordion
- Semantic HTML structure
- SEO metadata and structured data
- Product image alt text for accessibility
- Server-rendered/pre-rendered product content using Next.js

## Tech Stack

- Next.js
- React.js
- JavaScript
- HTML5
- CSS3
- Fake Store API

## API

Product information is fetched from the Fake Store API:

`https://fakestoreapi.com/products`

The API provides product information such as title, category, price, description, and image.

## Rendering

The project uses the Next.js App Router.

Product data is fetched in an async Server Component and the resulting page is pre-rendered by Next.js. Interactive functionality such as filtering, sorting, wishlist actions, and responsive controls is handled using React Client Components.

## SEO

The project includes:

- Custom page title
- Meta description
- Semantic heading structure
- Product image alt attributes
- Search engine indexing directives
- JSON-LD structured data using Schema.org `ItemList` and `Product` schemas

## Responsive Design

The interface is designed to adapt across:

- Desktop
- Tablet
- Mobile

Responsive behavior includes changes to the product grid, navigation, filter controls, header, and footer.

## Project Structure

```text
app/
├── globals.css
├── layout.js
└── page.js

components/
├── Header.jsx
├── Hero.jsx
├── Footer.jsx
└── products/
    ├── FilterSidebar.jsx
    ├── ProductCard.jsx
    ├── ProductGrid.jsx
    └── ProductSection.jsx
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/jones122903/Appscrip-task-Terence-Jones.git
```

Navigate to the project directory:

```bash
cd Appscrip-task-Terence-Jones
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Author

**Terence Jones**

Frontend Developer Assignment — Appscrip