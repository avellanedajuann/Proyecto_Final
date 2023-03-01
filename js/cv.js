
document.getElementById('revelar_datos').addEventListener('click', function () {
    document.getElementById('quien_soy').style.display = 'contents' ;
 })
 
 document.getElementById('revelar_datos').addEventListener('click', function () {
    document.getElementById('quien_soy').style.display = 'contents' ;
 })

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then((json) => console.log(json));