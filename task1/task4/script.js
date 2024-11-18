document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('link');

    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const userInput = prompt('Введите новый текст для ссылки:'); 

        if (userInput !== null) { 
            link.textContent = userInput; 
        }
    });
});
