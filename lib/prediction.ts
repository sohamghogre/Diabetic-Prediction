// Machine learning models for diabetes prediction
import { NaiveBayes } from "./models/naive-bayes"
import { BayesianModel } from "./models/bayesian"
import { RandomForest } from "./models/random-forest"

// Initialize models with pre-trained parameters
// In a real application, these would be trained on actual diabetes datasets
const naiveBayesModel = new NaiveBayes()
const bayesianModel = new BayesianModel()
const randomForestModel = new RandomForest()

// Normalize input data to the range expected by our models
const normalizeData = (data) => {
  return {
    glucose: (data.glucose - 70) / (200 - 70), // Normalize to 0-1
    bloodPressure: (data.bloodPressure - 40) / (130 - 40),
    skinThickness: data.skinThickness / 60,
    insulin: data.insulin / 300,
    bmi: (data.bmi - 15) / (50 - 15),
    age: (data.age - 18) / (100 - 18),
  }
}

// Determine consensus risk level based on model probabilities
const getConsensusRisk = (probabilities) => {
  const avgProbability = (probabilities.naiveBayes + probabilities.bayesian + probabilities.randomForest) / 3

  if (avgProbability > 0.7) return "high"
  if (avgProbability > 0.4) return "moderate"
  return "low"
}

// Main prediction function
export const predictDiabetes = async (userData) => {
  // Normalize the input data
  const normalizedData = normalizeData(userData)

  // Get predictions from each model
  const naiveBayesPrediction = naiveBayesModel.predict(normalizedData)
  const bayesianPrediction = bayesianModel.predict(normalizedData)
  const randomForestPrediction = randomForestModel.predict(normalizedData)

  // Determine consensus risk level
  const consensusRisk = getConsensusRisk({
    naiveBayes: naiveBayesPrediction.probability,
    bayesian: bayesianPrediction.probability,
    randomForest: randomForestPrediction.probability,
  })

  // Return all predictions
  return {
    naiveBayes: naiveBayesPrediction,
    bayesian: bayesianPrediction,
    randomForest: randomForestPrediction,
    consensus: {
      risk: consensusRisk,
    },
  }
}
