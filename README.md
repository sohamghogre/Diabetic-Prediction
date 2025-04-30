# 🧪 Diabetic Prediction Web App

A modern web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** that predicts the likelihood of diabetes using multiple machine learning models including Naive Bayes, Bayesian Network, and Random Forest.

## 🚀 Features

- 🔍 Predict diabetes likelihood based on user input.
- 📊 Built-in ML models (Naive Bayes, Bayesian, Random Forest) implemented in TypeScript.
- 🌐 Interactive user interface with real-time feedback.
- 💡 "How It Works" section to educate users on the prediction process.
- 🌈 TailwindCSS for sleek and responsive UI.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **ML Models**: Custom TypeScript implementations (no Python dependencies)
- **UI Framework**: Shadcn UI components

## 📁 Project Structure

```
diabetic-prediction/
├── app/               # Next.js app pages (Home, Predict, How It Works)
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # ML logic and utilities
├── public/            # Static assets
├── styles/            # Global styles
├── package.json       # Project metadata and dependencies
```

## 🧠 Models Implemented

- **Naive Bayes**
- **Bayesian Network**
- **Random Forest**

All models are coded in TypeScript under `lib/models/`.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/diabetic-prediction.git
cd diabetic-prediction

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
