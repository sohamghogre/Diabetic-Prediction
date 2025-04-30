import Link from "next/link"
import { Activity, ArrowRight, BarChart3, Brain, HeartPulse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link className="flex items-center gap-2" href="/">
            <HeartPulse className="h-6 w-6 text-teal-600" />
            <span className="text-lg font-semibold">DiabetesPredictAI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-teal-600" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="/predict">
              Prediction Tool
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="/how-it-works">
              How It Works
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="#">
              About
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/predict">
              <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  AI-Powered Health Analysis
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Predict Diabetes Risk With AI
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Our platform combines three advanced machine learning models to provide accurate diabetes risk
                  assessment based on your health data.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/predict">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                      Start Prediction
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur-[100px] opacity-20"></div>
                  <div className="relative bg-white border rounded-xl shadow-lg p-6 h-full flex items-center justify-center">
                    <div className="space-y-4 text-center">
                      <HeartPulse className="h-16 w-16 text-teal-600 mx-auto" />
                      <h3 className="text-xl font-bold">Comprehensive Analysis</h3>
                      <p className="text-gray-500">
                        Our AI analyzes your health metrics using Naive Bayes, Bayesian, and Random Forest algorithms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Advanced Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Machine Learning Models
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We combine multiple prediction models to provide a comprehensive risk assessment
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card className="bg-white border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Naive Bayes</CardTitle>
                  <CardDescription>Probabilistic classifier based on Bayes' theorem</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Assumes independence between features and uses conditional probability to predict outcomes.
                    Effective for classification with discrete features.
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm font-bold text-teal-600">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Bayesian Model</CardTitle>
                  <CardDescription>Advanced probabilistic model with prior knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Incorporates prior medical knowledge and updates beliefs based on evidence. Handles uncertainty well
                    and provides probability distributions.
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm font-bold text-teal-600">79%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "79%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <BarChart3 className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Random Forest</CardTitle>
                  <CardDescription>Ensemble learning method using decision trees</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Combines multiple decision trees to improve prediction accuracy and control overfitting. Handles
                    non-linear relationships well.
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm font-bold text-teal-600">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our platform uses a simple 3-step process to provide accurate diabetes risk assessment
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="relative flex flex-col items-center space-y-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-md">
                  1
                </div>
                <h3 className="pt-4 text-xl font-bold">Enter Your Data</h3>
                <p className="text-center text-gray-500">
                  Provide your health metrics like glucose level, BMI, age, and other relevant information
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-md">
                  2
                </div>
                <h3 className="pt-4 text-xl font-bold">AI Analysis</h3>
                <p className="text-center text-gray-500">
                  Our machine learning models analyze your data using three different algorithms
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-md">
                  3
                </div>
                <h3 className="pt-4 text-xl font-bold">Get Results</h3>
                <p className="text-center text-gray-500">
                  Receive a comprehensive risk assessment with insights from each model
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/predict">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Start Your Prediction Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Important Notice
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Educational Tool, Not Medical Advice
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Our AI prediction tool is designed for educational purposes and should not replace professional
                  medical advice or diagnosis.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100">
                      <svg
                        className="h-4 w-4 text-teal-700"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Always consult with healthcare professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100">
                      <svg
                        className="h-4 w-4 text-teal-700"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Your data is processed locally and never stored</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100">
                      <svg
                        className="h-4 w-4 text-teal-700"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Regular medical check-ups are essential for diabetes prevention</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <blockquote className="space-y-2">
                    <p className="text-lg">
                      "Early detection and prevention are key in managing diabetes risk. Educational tools can help
                      raise awareness, but professional medical advice is irreplaceable."
                    </p>
                    <footer className="text-sm text-gray-500">Dr. Sarah Johnson, Endocrinologist</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-teal-600" />
              <span className="text-lg font-bold">DiabetesPredictAI</span>
            </div>
            <p className="max-w-[400px] text-gray-500 md:text-sm">
              An educational tool for diabetes risk assessment using multiple machine learning models.
            </p>
            <div className="flex space-x-4">
              <Link className="text-gray-500 hover:text-teal-600" href="#">
                Terms
              </Link>
              <Link className="text-gray-500 hover:text-teal-600" href="#">
                Privacy
              </Link>
              <Link className="text-gray-500 hover:text-teal-600" href="#">
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 DiabetesPredictAI. All rights reserved. For educational purposes only.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
