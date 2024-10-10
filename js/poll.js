
        // Обробка події відправки форми
        document.getElementById("survey-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Запобігає справжній відправці форми
            document.getElementById("form-container").style.display = "none"; // Сховати форму
            document.getElementById("thank-you-message").style.display = "block"; // Показати повідомлення подяки
        });
