let objUser=[
    {
        username:"1113302737",
        password:"2262375"
    },
    
    {
        username:"Santiago",
        password:"2262434"
    },
    {
        username:"1",
        password:"1"
    }
]

function getInfo(event) {
    event.preventDefault()

    const $numeroDeDocumento = document.getElementById('username').value

    const $password = document.getElementById('password').value

    let boolean = false

    objUser.forEach(element => { 
        if (element.password === $password && element.username === $numeroDeDocumento) {
            boolean = true
            location.href = "menu.html"
        }
    })
    if (!boolean) {
        alert("Documento y/o contraseña incorrecta. O no tienes acceso permitido");
    }
}

const $form = document.getElementById('form')
$form.addEventListener("submit", getInfo) 