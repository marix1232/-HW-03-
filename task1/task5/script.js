document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('textForm');
    const inputField = document.getElementById('textInput');
    const duplicateField = document.getElementById('duplicateField');

    
    inputField.addEventListener('input', function() {
        duplicateField.textContent = inputField.value;
    });

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const text = inputField.value;
        console.log(text); 
        inputField.value = '';
        duplicateField.textContent = '';
    });
});
