function fnCarregarDados(usuario) {
  const url = "https://api.github.com/users/" + usuario;
  console.log(url)
  fetch(url)
    .then(resposta => {
      return resposta.json()
    })
    .then(dados => {
      fnMostrarDados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.twitter_username, dados.html_url, dados.blog)
    })
}

function fnMostrarDados(foto, nome, resumo, email, twitter, github, blog){
  document.getElementById("foto").src= foto
  document.getElementById("nome").innerHTML = nome
  document.getElementById("resumo").innerHTML = resumo + "<br><strong id='email'></strong>"
  document.getElementById("email").innerHTML = email
  document.getElementById("twitter").href = "https://www.x.com" + twitter
  document.getElementById("github").href = github
  document.getElementById("blog").href = "https://" + blog
  if (twitter == null){
    document.getElementById("twitter").style.display = 'none';
  }else{
    document.getElementById("twitter").style.display = 'inline';
  }
  if (blog == null){
    document.getElementById("blog").style.display = 'none';
  }else{
    document.getElementById("blog").style.display = 'inline';
  }
}

let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function(){
  fnCarregarDados(document.getElementById("usuario").value)
  document.getElementById("espaco-cartao").style.display = "block";
  document.getElementById("espaco-botao").style.display = "none";
})

let btnOutroUsuario = document.getElementById("botao-outro-usuario")
btnOutroUsuario.addEventListener("click", function(){
  document.getElementById("espaco-cartao").style.display = "none";
  document.getElementById("espaco-botao").style.display = "block";
})