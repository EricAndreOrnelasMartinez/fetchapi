
const form = document.getElementById('Form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let datos = FormData(form);

    fetch('backend.php',{
        method: 'POST',
        body: datos
    })
    
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})