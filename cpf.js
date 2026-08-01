const botao = document.querySelector(".btn-cpf");
const inputCpf = document.querySelector(".cpf-input");

botao.addEventListener("click", () => {
  const cpfInput = inputCpf.value;
  geradorCpf(cpfInput);
});

function geradorCpf(cpfInput) {
  if (!cpfInput) {
    console.error("Por favor, digite um CPF.");
    return;
  }

  cpfInput = cpfInput.replace(/\D/g, "");

  if (cpfInput.length < 11) {
    console.error("Cpf invalido");
    return;
  }

  const digitoVerificador = (cpfIncompleto) => {
    let somatoria = 0;

    for (let index = 0; index < cpfIncompleto.length; index++) {
      let digitoAtual = cpfIncompleto.charAt(index);
      let constante = cpfIncompleto.length + 1 - index;

      somatoria += Number(digitoAtual) * constante;
    }
    const resto = somatoria % 11;
    return resto < 2 ? "0" : (11 - resto).toString();
  };

  const primeiroDigitoVerificador = digitoVerificador(cpfInput.substring(0, 9));

  const segundoDigitoVerificador = digitoVerificador(
    cpfInput.substring(0, 9) + primeiroDigitoVerificador,
  );

  const cpfValidado =
    cpfInput.substring(0, 9) +
    primeiroDigitoVerificador +
    segundoDigitoVerificador;

  if (cpfInput !== cpfValidado) {
    console.error("Cpf invalido");
    return;
  }
  const cpfComMascara = cpfValidado.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4",
  );
  inputCpf.value = "";
  document.querySelector(".box-cpf").textContent =
    `CPF Válido: ${cpfComMascara}`;
  return cpfComMascara;
}
