from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np
from joblib import load

app = Flask(__name__)

# Load the trained model and scaler
model = tf.keras.models.load_model('diabetes_model.h5')
scaler = load('scaler.joblib')

@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/predict')
def predict_page():
    return render_template('index.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.get_json()
        
        # Extract features in the correct order
        features = [
            data['pregnancies'],
            data['glucose'],
            data['blood_pressure'],
            data['skin_thickness'],
            data['insulin'],
            data['bmi'],
            data['diabetes_pedigree'],
            data['age']
        ]
        
        # Convert to numpy array and reshape
        features = np.array(features).reshape(1, -1)
        
        # Scale the features
        features_scaled = scaler.transform(features)
        
        # Make prediction
        prediction = model.predict(features_scaled)
        probability = float(prediction[0][0])
        
        # Determine the result and confidence
        result = 'Diabetic' if probability >= 0.5 else 'Not Diabetic'
        confidence = probability if result == 'Diabetic' else (1 - probability)
        
        # Return the prediction result
        return jsonify({
            'result': result,
            'probability': probability,
            'confidence': confidence
        })
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return jsonify({
            'error': 'An error occurred while making the prediction',
            'details': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True) 