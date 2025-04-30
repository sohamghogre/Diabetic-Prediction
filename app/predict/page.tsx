"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, HeartPulse, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { predictDiabetes } from "@/lib/prediction"

export default function PredictPage() {
  const [formData, setFormData] = useState({
    glucose: 120,
    bloodPressure: 70,
    skinThickness: 20,
    insulin: 80,
    bmi: 25,
    age: 30,
  })

  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("input")

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Get predictions from our models
      const predictions = await predictDiabetes(formData)
      setResults(predictions)
      setActiveTab("results")
    } catch (error) {
      console.error("Prediction error:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setResults(null)
    setActiveTab("input")
  }

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
            <Link className="transition-colors hover:text-teal-600 text-teal-600" href="/predict">
              Prediction Tool
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="/how-it-works">
              How It Works
            </Link>
            <Link className="transition-colors hover:text-teal-600" href="#">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-sm font-medium text-teal-600 hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Diabetes Risk Prediction Tool</h1>
              <p className="mt-2 text-gray-500">
                Enter your health metrics to get a comprehensive diabetes risk assessment
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="input">Input Data</TabsTrigger>
                <TabsTrigger value="results" disabled={!results}>
                  View Results
                </TabsTrigger>
              </TabsList>
              <TabsContent value="input">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="bg-white shadow-sm border-teal-100">
                    <CardHeader>
                      <CardTitle>Enter Your Health Data</CardTitle>
                      <CardDescription>Provide your health metrics for diabetes risk prediction</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form id="prediction-form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="glucose" className="flex items-center">
                                Glucose Level (mg/dL)
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        Fasting blood glucose level. Normal range is 70-99 mg/dL. Prediabetes: 100-125
                                        mg/dL. Diabetes: 126+ mg/dL.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.glucose} mg/dL</span>
                            </div>
                            <Slider
                              id="glucose"
                              min={70}
                              max={200}
                              step={1}
                              value={[formData.glucose]}
                              onValueChange={(value) => handleChange("glucose", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>70</span>
                              <span>135</span>
                              <span>200</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="bloodPressure" className="flex items-center">
                                Blood Pressure (mm Hg)
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        Diastolic blood pressure. Normal is below 80 mm Hg. High blood pressure can
                                        increase diabetes risk.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.bloodPressure} mm Hg</span>
                            </div>
                            <Slider
                              id="bloodPressure"
                              min={40}
                              max={130}
                              step={1}
                              value={[formData.bloodPressure]}
                              onValueChange={(value) => handleChange("bloodPressure", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>40</span>
                              <span>85</span>
                              <span>130</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="skinThickness" className="flex items-center">
                                Skin Thickness (mm)
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        Triceps skin fold thickness. A measure of body fat.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.skinThickness} mm</span>
                            </div>
                            <Slider
                              id="skinThickness"
                              min={0}
                              max={60}
                              step={1}
                              value={[formData.skinThickness]}
                              onValueChange={(value) => handleChange("skinThickness", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>0</span>
                              <span>30</span>
                              <span>60</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="insulin" className="flex items-center">
                                Insulin (mu U/ml)
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        2-Hour serum insulin. Normal fasting range is 2-25 mu U/ml.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.insulin} mu U/ml</span>
                            </div>
                            <Slider
                              id="insulin"
                              min={0}
                              max={300}
                              step={1}
                              value={[formData.insulin]}
                              onValueChange={(value) => handleChange("insulin", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>0</span>
                              <span>150</span>
                              <span>300</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="bmi" className="flex items-center">
                                BMI
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        Body Mass Index. Normal: 18.5-24.9. Overweight: 25-29.9. Obese: 30+.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.bmi.toFixed(1)}</span>
                            </div>
                            <Slider
                              id="bmi"
                              min={15}
                              max={50}
                              step={0.1}
                              value={[formData.bmi]}
                              onValueChange={(value) => handleChange("bmi", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>15</span>
                              <span>32.5</span>
                              <span>50</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="age" className="flex items-center">
                                Age
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="w-[200px] text-xs">
                                        Age in years. Diabetes risk increases with age, especially after 45.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <span className="text-sm font-medium">{formData.age} years</span>
                            </div>
                            <Slider
                              id="age"
                              min={18}
                              max={100}
                              step={1}
                              value={[formData.age]}
                              onValueChange={(value) => handleChange("age", value[0])}
                              className="flex-1"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>18</span>
                              <span>59</span>
                              <span>100</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <p className="text-xs text-gray-500">Your data is processed locally and never stored</p>
                      <Button
                        type="submit"
                        form="prediction-form"
                        className="bg-teal-600 hover:bg-teal-700"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Get Prediction"}
                      </Button>
                    </CardFooter>
                  </Card>

                  <div className="space-y-6">
                    <Card className="bg-white shadow-sm border-teal-100">
                      <CardHeader>
                        <CardTitle>Understanding Your Metrics</CardTitle>
                        <CardDescription>Key factors in diabetes risk assessment</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Glucose Level</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">High Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Blood glucose concentration is one of the most important indicators for diabetes.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">BMI (Body Mass Index)</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">High Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Higher BMI values are associated with increased diabetes risk.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Insulin Level</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "70%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">Medium Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Abnormal insulin levels can indicate insulin resistance or other metabolic issues.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Age</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">Medium Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Diabetes risk increases with age, particularly for type 2 diabetes.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Blood Pressure</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">Medium Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            High blood pressure often co-occurs with diabetes and can increase risk.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Skin Thickness</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                            <span className="ml-2 text-xs font-medium">Lower Impact</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            A measure of body fat that can provide additional context for risk assessment.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h3 className="text-sm font-medium text-yellow-800 mb-2">Medical Disclaimer</h3>
                      <p className="text-xs text-yellow-700">
                        This tool is for educational purposes only and should not replace professional medical advice.
                        Always consult with a healthcare provider for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="results">
                {results && (
                  <div className="grid gap-8 md:grid-cols-2">
                    <Card className="bg-white shadow-sm border-teal-100">
                      <CardHeader>
                        <CardTitle>Your Diabetes Risk Assessment</CardTitle>
                        <CardDescription>Results from multiple machine learning models</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Model Predictions</h3>

                          <div className="space-y-6">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="font-medium">Naive Bayes</span>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="w-[200px] text-xs">
                                          Probabilistic classifier based on Bayes' theorem with strong independence
                                          assumptions.
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-3 h-3 rounded-full ${
                                      results.naiveBayes.probability > 0.7
                                        ? "bg-red-500"
                                        : results.naiveBayes.probability > 0.4
                                          ? "bg-yellow-500"
                                          : "bg-green-500"
                                    }`}
                                  ></div>
                                  <span
                                    className={`font-bold ${
                                      results.naiveBayes.probability > 0.7
                                        ? "text-red-500"
                                        : results.naiveBayes.probability > 0.4
                                          ? "text-yellow-500"
                                          : "text-green-500"
                                    }`}
                                  >
                                    {(results.naiveBayes.probability * 100).toFixed(1)}% Risk
                                  </span>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className={`h-2.5 rounded-full ${
                                    results.naiveBayes.probability > 0.7
                                      ? "bg-red-500"
                                      : results.naiveBayes.probability > 0.4
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                  }`}
                                  style={{ width: `${results.naiveBayes.probability * 100}%` }}
                                ></div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="font-medium">Bayesian Model</span>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="w-[200px] text-xs">
                                          Incorporates prior medical knowledge and updates beliefs based on evidence.
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-3 h-3 rounded-full ${
                                      results.bayesian.probability > 0.7
                                        ? "bg-red-500"
                                        : results.bayesian.probability > 0.4
                                          ? "bg-yellow-500"
                                          : "bg-green-500"
                                    }`}
                                  ></div>
                                  <span
                                    className={`font-bold ${
                                      results.bayesian.probability > 0.7
                                        ? "text-red-500"
                                        : results.bayesian.probability > 0.4
                                          ? "text-yellow-500"
                                          : "text-green-500"
                                    }`}
                                  >
                                    {(results.bayesian.probability * 100).toFixed(1)}% Risk
                                  </span>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className={`h-2.5 rounded-full ${
                                    results.bayesian.probability > 0.7
                                      ? "bg-red-500"
                                      : results.bayesian.probability > 0.4
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                  }`}
                                  style={{ width: `${results.bayesian.probability * 100}%` }}
                                ></div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="font-medium">Random Forest</span>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="w-[200px] text-xs">
                                          Ensemble learning method that builds multiple decision trees and merges their
                                          predictions.
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-3 h-3 rounded-full ${
                                      results.randomForest.probability > 0.7
                                        ? "bg-red-500"
                                        : results.randomForest.probability > 0.4
                                          ? "bg-yellow-500"
                                          : "bg-green-500"
                                    }`}
                                  ></div>
                                  <span
                                    className={`font-bold ${
                                      results.randomForest.probability > 0.7
                                        ? "text-red-500"
                                        : results.randomForest.probability > 0.4
                                          ? "text-yellow-500"
                                          : "text-green-500"
                                    }`}
                                  >
                                    {(results.randomForest.probability * 100).toFixed(1)}% Risk
                                  </span>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className={`h-2.5 rounded-full ${
                                    results.randomForest.probability > 0.7
                                      ? "bg-red-500"
                                      : results.randomForest.probability > 0.4
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                  }`}
                                  style={{ width: `${results.randomForest.probability * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`p-6 rounded-lg ${
                            results.consensus.risk === "high"
                              ? "bg-red-50 border border-red-100"
                              : results.consensus.risk === "moderate"
                                ? "bg-yellow-50 border border-yellow-100"
                                : "bg-green-50 border border-green-100"
                          }`}
                        >
                          <h3 className="text-lg font-medium mb-2">Consensus Assessment</h3>
                          <p className="text-sm">
                            {results.consensus.risk === "high" ? (
                              <span className="text-red-600">
                                <strong>Higher Risk:</strong> Based on our models, you have a higher risk of diabetes.
                                We recommend consulting with a healthcare professional for proper screening.
                              </span>
                            ) : results.consensus.risk === "moderate" ? (
                              <span className="text-yellow-600">
                                <strong>Moderate Risk:</strong> You have a moderate risk of diabetes. Consider lifestyle
                                changes and regular check-ups with your healthcare provider.
                              </span>
                            ) : (
                              <span className="text-green-600">
                                <strong>Lower Risk:</strong> Your risk of diabetes appears to be lower based on the data
                                provided. Maintain a healthy lifestyle for continued prevention.
                              </span>
                            )}
                          </p>
                        </div>

                        <div className="flex gap-4">
                          <Button variant="outline" onClick={resetForm} className="flex-1">
                            Try Again
                          </Button>
                          <Link href="/how-it-works" className="flex-1">
                            <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
                          </Link>
                        </div>
                      </CardContent>
                      <CardFooter className="text-xs text-gray-500 border-t pt-4">
                        <p>
                          Disclaimer: This prediction is for educational purposes only and should not replace
                          professional medical advice. Please consult with a healthcare provider for proper diagnosis
                          and treatment.
                        </p>
                      </CardFooter>
                    </Card>

                    <div className="space-y-6">
                      <Card className="bg-white shadow-sm border-teal-100">
                        <CardHeader>
                          <CardTitle>Your Health Metrics</CardTitle>
                          <CardDescription>Summary of your input data</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <p className="text-sm font-medium">Glucose Level</p>
                                <p className="text-2xl font-bold">
                                  {formData.glucose} <span className="text-sm font-normal text-gray-500">mg/dL</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formData.glucose < 100
                                    ? "Normal range"
                                    : formData.glucose < 126
                                      ? "Prediabetic range"
                                      : "Diabetic range"}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-medium">BMI</p>
                                <p className="text-2xl font-bold">{formData.bmi.toFixed(1)}</p>
                                <p className="text-xs text-gray-500">
                                  {formData.bmi < 18.5
                                    ? "Underweight"
                                    : formData.bmi < 25
                                      ? "Normal weight"
                                      : formData.bmi < 30
                                        ? "Overweight"
                                        : "Obese"}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-medium">Blood Pressure</p>
                                <p className="text-2xl font-bold">
                                  {formData.bloodPressure}{" "}
                                  <span className="text-sm font-normal text-gray-500">mm Hg</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formData.bloodPressure < 80
                                    ? "Normal range"
                                    : formData.bloodPressure < 90
                                      ? "Elevated"
                                      : "High"}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-medium">Age</p>
                                <p className="text-2xl font-bold">
                                  {formData.age} <span className="text-sm font-normal text-gray-500">years</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formData.age < 45
                                    ? "Lower risk age group"
                                    : formData.age < 65
                                      ? "Moderate risk age group"
                                      : "Higher risk age group"}
                                </p>
                              </div>
                            </div>

                            <div className="pt-4 border-t">
                              <h4 className="text-sm font-medium mb-2">Additional Metrics</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <p className="text-sm">
                                    Insulin: <span className="font-medium">{formData.insulin} mu U/ml</span>
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm">
                                    Skin Thickness: <span className="font-medium">{formData.skinThickness} mm</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-white shadow-sm border-teal-100">
                        <CardHeader>
                          <CardTitle>Next Steps</CardTitle>
                          <CardDescription>Recommendations based on your results</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Consult a Healthcare Provider</h4>
                            <p className="text-sm text-gray-500">
                              Share these results with your doctor for professional evaluation and advice.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Maintain a Healthy Diet</h4>
                            <p className="text-sm text-gray-500">
                              Focus on whole foods, vegetables, lean proteins, and limit processed foods and added
                              sugars.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Regular Physical Activity</h4>
                            <p className="text-sm text-gray-500">
                              Aim for at least 150 minutes of moderate exercise per week.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Monitor Your Health</h4>
                            <p className="text-sm text-gray-500">
                              Regular check-ups and blood tests can help track your health status over time.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
