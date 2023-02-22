async function handleSubmit() {
    const nome =document.getElementById("nome")
    const email =document.getElementById("email")
    const assunto = document.getElementById("assunto")
    await fetch("http://localhost:3333/",{method:"post", headers:{
        "content-type": "application-json"
    },
    body: JSON.stringify({nome: nome, email: email, assunto: assunto})
    }).then(response => {
        response.status = 201 && alert("Mensagem enviada")
        response.status = 500 && alert("Mensagem não enviada")
    })
}