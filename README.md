# 🩺 Diabetes Prediction Web App

A machine learning-based web application built with Flask that predicts the likelihood of diabetes in individuals based on medical data input by the user.

---

## 📁 Project Structure

healthcare/ ├── static/ # Static files (CSS, JS) ├── templates/ # HTML templates (home.html, result.html) ├── app.py # Flask web application ├── diabetes.csv # Dataset used for training the model ├── diabetes_model.h5 # Trained deep learning model ├── scaler.joblib # Scaler used for preprocessing input data ├── train_model.py # Script used to train the ML model └── requirements.txt # Python dependencies

yaml
Copy
Edit

---

## 🚀 Features

- ✅ User-friendly web interface for input
- ✅ Real-time diabetes prediction using a trained ML model
- ✅ Clean separation of frontend (HTML/CSS) and backend (Flask)
- ✅ Easy to customize and improve

---

## 🧰 Technologies Used

- Python
- Flask
- scikit-learn
- Keras (TensorFlow backend)
- Pandas & NumPy
- HTML5 & CSS3 (basic styling)

---

## 📊 Dataset Details

- **File:** `diabetes.csv`
- **Source:** Pima Indian Diabetes Dataset
- **Attributes:** Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age
- **Target:** 1 (Diabetic) or 0 (Not Diabetic)

---

## 🔧 How to Run This Project

### 🛠️ Requirements

- Python 3.x installed
- pip (Python package manager)

### 💻 Steps to Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/ManikantaPerla07/healthcare.git
cd healthcare
(Optional) Create a Virtual Environment

bash
Copy
Edit
python -m venv venv
Activate the virtual environment:

On Windows: venv\Scripts\activate

On Mac/Linux: source venv/bin/activate

Install Dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask App

bash
Copy
Edit
python app.py
Open in Browser

Go to: http://127.0.0.1:5000/

📸 Screenshots
Include screenshots of the web app here after running it locally.

📌 Project Info
Roll Number: 40

Registration Number: 12317679

Section: K23KE

Assignment: 4 (Gamification)

Topic: Binomial and Poisson Distribution with Visualization and PMF/CDF

Note: Dataset values derived using registration digits.

🧠 Future Improvements
Add login system

Store user history

Use live API for medical data

Deploy online via Render / Heroku

👨‍💻 Author
Manikanta Perla

📧 Email: [Add your email here]

🔗 LinkedIn: [Add your LinkedIn profile]

🎓 Institution: [Add your college/university name]

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Pima Indian Diabetes Dataset

TensorFlow & Keras

Flask Documentation

yaml
Copy
Edit

---

You can now:

✅ Paste this into your `README.md` on GitHub  
✅ Replace the bracketed info (like LinkedIn or email) with your actual details  
✅ Upload screenshots in your GitHub repo if you want to enhance the “Screenshots” section  

Let me know if you'd like me to help write a version for **deployment instructions** (e.g., Render or Replit) too!
