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
![Screenshot 2025-04-30 094912](https://github.com/user-attachments/assets/56bb3fc2-0db0-4a59-8201-e82dde2ab31e)

![Screenshot 2025-04-30 094930](https://github.com/user-attachments/assets/5fe2059e-2c23-4a69-b0a9-eadaf5c401d5)
![Screenshot 2025-04-30 094947](https://github.com/user-attachments/assets/5916ebc5-b705-4302-838c-e6467c3c6c18)
![Screenshot 2025-04-30 095010](https://github.com/user-attachments/assets/a2bc2ac6-a56c-4af0-a418-70afcf9e2ff5)
![Screenshot 2025-04-30 095043](https://github.com/user-attachments/assets/79676141-b5c0-4a7f-86bc-c3eb2ba8b1bd)






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
