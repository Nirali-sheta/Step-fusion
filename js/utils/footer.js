
document.addEventListener("DOMContentLoaded", function() {
        fetch('/html/components/footer.html')  
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);
               
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    
});