# AI Chef

A React application that generates recipe suggestions based on ingredients entered by the user.

## Features

* Add ingredients to a list
* View all ingredients currently on hand
* Generate recipe recommendations using AI
* Render recipe responses in a clean, readable format
* Automatically scroll to the generated recipe

## Built With

* React
* Vite
* JavaScript
* Hugging Face Inference API

## How It Works

1. Enter ingredients you have available.
2. Once at least four ingredients are added, a recipe generator becomes available.
3. Click **Get a Recipe**.
4. The app sends the ingredient list to an AI model through the Hugging Face API.
5. A recipe suggestion is generated and displayed on the page.

## Installation

Clone the repository:

```bash
git clone git@github.com:eve1ne/ai-recipe-generator.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_HF_ACCESS_TOKEN=your_hugging_face_token
```

Start the development server:

```bash
npm run dev
```

## Learning Goals

This project was built to practice:

* React state management with hooks
* Component composition and props
* Conditional rendering
* Working with APIs
* Handling asynchronous JavaScript with `async/await`
* Using environment variables to secure API keys
