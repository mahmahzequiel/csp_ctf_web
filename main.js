window.onload = function() {
    fetch('login.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}