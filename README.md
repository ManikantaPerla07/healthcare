# Diabetes Risk Assessment System
A software implemented over the web medium that predicts a person’s chances of suffering from diabetes by analyzing his/her health records through a machine learning algorithm.
## Features
* Provides a user-friendly web interface for inputting health information.
* Is based on a pre-trained neural network model for predicting diabetes risk.
* Employs data preprocessing techniques (StandardScaler) for optimal model performance.
* Clear and concise display of the predicted diabetes risk.
## Installation
1.  **Clone the repository:**
```bash
git clone <https://github.com/ManikantaPerla07/healthcare>
cd healthcare
```
2.  **Install the required packages:**
```bash
pip install -r requirements.txt
```
## Usage
1.  **Run the Flask application:**
```bash
python app.py
```
Here is what you should do: **Start your web browser**at `http://127.0.0.1:5000/` then navigate to get the landing page.
3. Click on the prediction interface, most likely a `/predict_page` link.
4. Fill in the necessary health information on the form and then click the “Predict” button.
5.  The system will display the predicted diabetes risk.
## Example Input
To obtain a prediction, one would typically input values for the following features:
* Pregnancies (e.g., 0, 1, 5)
* Glucose (e.g., 80, 120, 180)
* BloodPressure (e.g., 70, 85, 95)
* SkinThickness (e.g., 20, 30, 40)
* Insulin (e.g., 0, 50, 150)
* BMI (e.g., 25.0, 30.5, 35.0)
* DiabetesPedigreeFunction (e.g., 0.5, 1.2)
* Age (e.g., 25, 40, 60)
## Important Note
It is an ASD risk predictor that is based on machine learning model and should not be viewed as a replacement for professional medical advice. Always get help from a health care provider for diagnosis and treatment.
## Project Structure
* **`static/`**: Contains static files (CSS and JavaScript).
* **`css/style.css`**: Stylesheet for the web application.
* **`js/main.js`**: Handles client-side interactions.
* **`templates/`**: Contains HTML templates.
* **`index.html`**: Prediction input form and result display.
* **`landing.html`**: Initial landing page.
* **`app.py`**: The main flask application file that does the routing of requests, implement the backend logic and integrate with models for predictions.
* **`diabetes_model.h5`**: Pre-trained Keras/TensorFlow neural network model.
* **`diabetes.csv`**: Dataset used for training the model.
* **`requirements.txt`**: List of Python dependencies.
* **`scaler.pkl`**: Trained StandardScaler object for preprocessing input data.
* The `train_model.py` file is in charge of writing the codes for training the ML model and a scaler.
## Technologies Used
* Python
* Flask
* TensorFlow
* Keras
* Pandas
* NumPy
* Scikit-learn (StandardScaler, train\_test\_split)
* Joblib
