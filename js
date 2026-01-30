function send() {
  const msg = document.getElementById("message").value.toLowerCase();
  let response = "Vou verificar isso pra você 🙂";

  if (msg.includes("problema")) response = "Sinto muito pelo ocorrido. Vamos resolver!";
  if (msg.includes("obrigado")) response = "Eu que agradeço! 😊";
  if (msg.includes("demora")) response = "Peço desculpas pelo tempo de espera.";

  document.getElementById("response").innerText = response;
}
