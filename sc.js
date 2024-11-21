function mostrarResposta() {
    document.getElementById("resposta").style.display = "block";
    document.getElementById("resposta").innerHTML = "Amei a resposta";
    document.getElementById("no").style.display = "none";
    document.getElementById("resposta-img").style.display = "block";
    var img = document.getElementById("resposta-img");
    img.src =
      "https://media.storiesig.info/get?uri=https%3A%2F%2Finstagram.fods1-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F271333134_1342791946170007_4777305177260578073_n.jpg%3F_nc_ht%3Dinstagram.fods1-1.fna.fbcdn.net%26_nc_cat%3D107%26_nc_ohc%3DBAHhN3xj0iAQ7kNvgHuqQNi%26_nc_gid%3Db938f98534dc457c83d04cb2b8261e5e%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AYAAQShRk1svr2fcig7hPC7sqwVmC1_1lntjd2jhH_gR1g%26oe%3D6742E8EB%26_nc_sid%3D1e20d2&__sig=O42gR9Vo8mUfRhM7DqZPbw&__expires=17320560171200";
    img.height = 300;
  }
  
  function mudarPosicao() {
    const buttonNao = document.getElementById("no");
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
  }