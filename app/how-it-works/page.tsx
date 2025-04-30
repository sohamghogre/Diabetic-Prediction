import Link from "next/link"
import { ArrowLeft, HeartPulse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
            <Link className="transition-colors hover:text-teal-600 text-teal-600" href="/how-it-works">
              How It Works
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="#">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-sm font-medium text-teal-600 hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter mb-4">How Our Diabetes Prediction Works</h1>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our platform uses advanced machine learning algorithms to assess your risk of diabetes based on key
                health metrics. Here's a detailed explanation of how our prediction system works.
              </p>
            </div>

            <Card className="bg-white shadow-sm border-teal-100">
              <CardHeader className="border-b">
                <CardTitle>The Machine Learning Models</CardTitle>
                <CardDescription>
                  We use three different algorithms to provide a comprehensive assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Naive Bayes Model</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Naive Bayes is a probabilistic classifier based on applying Bayes' theorem with strong
                        independence assumptions between features.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <h4 className="text-sm font-medium mb-2">How it works:</h4>
                        <p className="text-xs text-gray-600">
                          The model calculates the probability of diabetes given your health metrics using Bayes'
                          theorem:
                        </p>
                        <p className="text-xs font-mono bg-gray-100 p-2 rounded mt-2">
                          P(Diabetes | Health Metrics) = P(Health Metrics | Diabetes) × P(Diabetes) / P(Health Metrics)
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          It assumes each health metric (glucose, BMI, etc.) contributes independently to the
                          probability of diabetes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Bayesian Model</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Our Bayesian model incorporates prior medical knowledge and updates its beliefs based on your
                        specific data.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <h4 className="text-sm font-medium mb-2">How it works:</h4>
                        <p className="text-xs text-gray-600">
                          The model starts with a prior probability of diabetes based on population statistics. It then
                          updates this probability by considering each health metric and its known relationship with
                          diabetes.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          For example, it knows that higher glucose levels and BMI significantly increase diabetes risk,
                          while the impact of skin thickness is less pronounced.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-teal-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Random Forest Model</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Random Forest is an ensemble learning method that builds multiple decision trees and merges
                        their predictions.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-3">
                        <h4 className="text-sm font-medium mb-2">How it works:</h4>
                        <p className="text-xs text-gray-600">
                          Our implementation uses 5 decision trees, each focusing on different aspects of your health
                          data.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          For example, one tree might focus primarily on glucose and BMI, while another emphasizes
                          insulin levels and age. The final prediction is an average of all tree predictions, making it
                          more robust and accurate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-teal-100">
              <CardHeader className="border-b">
                <CardTitle>The Prediction Process</CardTitle>
                <CardDescription>How we go from your health data to a risk assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="font-bold text-teal-600">1</span>
                    </div>
                    <h3 className="text-lg font-medium">Data Collection</h3>
                    <p className="text-sm text-gray-500">
                      You provide key health metrics through our user-friendly interface:
                    </p>
                    <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
                      <li>Glucose level (mg/dL)</li>
                      <li>Blood pressure (mm Hg)</li>
                      <li>Skin thickness (mm)</li>
                      <li>Insulin level (mu U/ml)</li>
                      <li>BMI (Body Mass Index)</li>
                      <li>Age</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="font-bold text-teal-600">2</span>
                    </div>
                    <h3 className="text-lg font-medium">Data Normalization</h3>
                    <p className="text-sm text-gray-500">
                      We normalize your data to ensure all metrics are on a comparable scale (between 0 and 1). This
                      improves the accuracy and reliability of our predictions.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-mono">normalizedGlucose = (glucose - 70) / (200 - 70)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="font-bold text-teal-600">3</span>
                    </div>
                    <h3 className="text-lg font-medium">Multi-Model Prediction</h3>
                    <p className="text-sm text-gray-500">
                      Your normalized data is processed through all three machine learning models simultaneously. Each
                      model produces a probability score indicating your risk of diabetes.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="font-bold text-teal-600">4</span>
                    </div>
                    <h3 className="text-lg font-medium">Consensus Assessment</h3>
                    <p className="text-sm text-gray-500">
                      We combine the predictions from all models to create a consensus assessment. This approach
                      provides a more balanced and reliable risk evaluation than any single model.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Risk Categories:</h4>
                      <ul className="text-xs text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="font-medium">High Risk:</span> Average probability &gt; 70%
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <span className="font-medium">Moderate Risk:</span> Average probability 40-70%
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="font-medium">Low Risk:</span> Average probability &lt; 40%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-teal-100">
              <CardHeader className="border-b">
                <CardTitle>Important Considerations</CardTitle>
                <CardDescription>Understanding the limitations and proper use of our predictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <h3 className="text-lg font-medium text-yellow-800 mb-2">Medical Disclaimer</h3>
                  <p className="text-sm text-yellow-700">
                    This tool is for educational purposes only and should not replace professional medical advice.
                    Always consult with a healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Accuracy Considerations</h3>
                  <p className="text-sm text-gray-500">
                    While our models are based on established medical relationships, they are simplified implementations
                    designed to demonstrate the principles of machine learning in healthcare.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    In clinical settings, diabetes prediction models would be trained on large datasets of patient
                    records and validated through rigorous medical studies.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Privacy and Data Security</h3>
                  <p className="text-sm text-gray-500">
                    All calculations are performed locally in your browser. We do not store or transmit your health
                    data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Link href="/predict">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Try the Prediction Tool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-teal-600" />
              <span className="text-lg font-bold">DiabetesPredictAI</span>
            </div>
            <p className="text-xs text-gray-500">
              © 2025 DiabetesPredictAI. This tool is for educational purposes only and should not replace professional
              medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
