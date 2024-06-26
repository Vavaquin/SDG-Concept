document.addEventListener('DOMContentLoaded', (event) => {

    const element = document.getElementById('jsz');


    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.1)'; 
    });


    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)'; 
    });
});
