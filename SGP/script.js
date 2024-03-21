document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        arrivalDate: document.getElementById('arrivalDate').value,
        departureDate: document.getElementById('departureDate').value,
        adults: document.getElementById('adults').value,
        places: document.getElementById('places').value,
        hotel: document.getElementById('hotel').value
    };

    emailjs.send('service_3u6nez8', 'template_j1red6h', formData)
        .then(function (response) {
            alert('Form submitted successfully!');
            document.getElementById('reservationForm').reset();
        })
        .catch(function (error) {
            console.error('Error sending email:', error);
            alert('Form submission failed. Please try again later.');
        });
});
