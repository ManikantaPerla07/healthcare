document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    const resultDiv = document.getElementById('result');
    let predictionChart = null;

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        resultDiv.innerHTML = `
            <div class="text-center">
                <div class="spinner-border text-primary mb-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <h3>Analyzing your data...</h3>
            </div>
        `;
        
        // Collect form data
        const formData = {
            pregnancies: document.getElementById('pregnancies').value,
            glucose: document.getElementById('glucose').value,
            blood_pressure: document.getElementById('blood_pressure').value,
            skin_thickness: document.getElementById('skin_thickness').value,
            insulin: document.getElementById('insulin').value,
            bmi: document.getElementById('bmi').value,
            age: document.getElementById('age').value
        };

        try {
            // Validate inputs
            if (!validateInputs(formData)) {
                throw new Error('Please enter valid values for all fields');
            }

            // Send prediction request
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Update result display with animation
            resultDiv.innerHTML = `
                <div class="result-content">
                    <h3 class="mb-4">Prediction Result</h3>
                    <div class="alert ${data.result === 'Diabetic' ? 'alert-danger' : 'alert-success'} animate__animated animate__fadeIn" role="alert">
                        <h4 class="alert-heading">
                            <i class="fas ${data.result === 'Diabetic' ? 'fa-exclamation-triangle' : 'fa-check-circle'} me-2"></i>
                            ${data.result}
                        </h4>
                        <p>Confidence: ${data.confidence}%</p>
                        <hr>
                        <p class="mb-0">${getRecommendation(data.result, data.confidence)}</p>
                    </div>
                </div>
            `;

            // Update or create chart
            if (predictionChart) {
                predictionChart.destroy();
            }

            const ctx = document.createElement('canvas');
            document.getElementById('predictionChart').innerHTML = '';
            document.getElementById('predictionChart').appendChild(ctx);

            predictionChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Diabetic', 'Not Diabetic'],
                    datasets: [{
                        data: [data.probability, 100 - data.probability],
                        backgroundColor: ['#dc3545', '#28a745'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.label}: ${context.raw.toFixed(1)}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });

        } catch (error) {
            resultDiv.innerHTML = `
                <div class="alert alert-danger animate__animated animate__shakeX" role="alert">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Error: ${error.message}
                </div>
            `;
        }
    });

    // Input validation function
    function validateInputs(data) {
        const ranges = {
            glucose: { min: 0, max: 500 },
            blood_pressure: { min: 0, max: 200 },
            skin_thickness: { min: 0, max: 100 },
            insulin: { min: 0, max: 1000 },
            bmi: { min: 0, max: 100 },
            age: { min: 0, max: 120 }
        };

        for (const [key, value] of Object.entries(data)) {
            if (key in ranges) {
                const numValue = parseFloat(value);
                if (isNaN(numValue) || numValue < ranges[key].min || numValue > ranges[key].max) {
                    return false;
                }
            }
        }
        return true;
    }

    // Get recommendation based on prediction
    function getRecommendation(result, confidence) {
        if (result === 'Diabetic') {
            if (confidence > 80) {
                return 'High risk detected. Please consult with a healthcare professional immediately.';
            } else {
                return 'Moderate risk detected. Consider scheduling a check-up with your doctor.';
            }
        } else {
            if (confidence > 80) {
                return 'Low risk detected. Continue maintaining a healthy lifestyle.';
            } else {
                return 'Moderate risk detected. Consider regular health check-ups and maintain a healthy lifestyle.';
            }
        }
    }
}); 