const botao = document.querySelector(".btn-cpf");
const inputCpf = document.querySelector(".cpf-input");
const boxCpf = document.querySelector(".box-cpf");

// 1. MÁSCARA EM TEMPO REAL: Executada a cada tecla digitada pelo usuário
inputCpf.addEventListener("input", (evento) => {
  let valor = evento.target.value;

  // Remove tudo o que NÃO for número (bloqueia letras e caracteres especiais)
  valor = valor.replace(/\D/g, "");

  // Aplica a formatação de forma progressiva conforme o usuário digita
  if (valor.length > 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  } else if (valor.length > 6) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else if (valor.length > 3) {
    valor = valor.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }

  // Atualiza o valor do input na tela com a máscara aplicada
  evento.target.value = valor;
});

// 2. EVENTO DE VALIDAÇÃO: Executado ao clicar no botão
botao.addEventListener("click", () => {
  const cpfInput = inputCpf.value;
  validarCpf(cpfInput);
});

function validarCpf(cpfInput) {
  // Limpa estilos e mensagens de validações anteriores
  boxCpf.style.color = "";
  boxCpf.textContent = "";

  if (!cpfInput) {
    boxCpf.style.color = "#dc2626"; // Vermelho erro
    boxCpf.textContent = "Por favor, digite um CPF.";
    return;
  }

  // Remove a máscara para fazer o cálculo matemático apenas com números
  const cpfNumeros = cpfInput.replace(/\D/g, "");

  // Rejeita sequências repetidas (ex: 111.111.111-11)
  if (cpfNumeros.length === 11 && /^(\d)\1{10}$/.test(cpfNumeros)) {
    boxCpf.style.color = "#dc2626";
    boxCpf.textContent = "CPF Inválido (Sequência repetida)";
    return;
  }

  // Verifica se possui o tamanho exato de 11 dígitos numéricos
  if (cpfNumeros.length !== 11) {
    boxCpf.style.color = "#dc2626";
    boxCpf.textContent = "CPF Inválido (Deve conter 11 dígitos)";
    return;
  }

  // Função interna para calcular os dígitos verificadores (Lógica da Planilha)
  const calcularDigito = (cpfIncompleto) => {
    let somatoria = 0;

    for (let index = 0; index < cpfIncompleto.length; index++) {
      let digitoAtual = cpfIncompleto.charAt(index);
      let constante = cpfIncompleto.length + 1 - index;

      somatoria += Number(digitoAtual) * constante;
    }
    const resto = somatoria % 11;
    return resto < 2 ? "0" : (11 - resto).toString();
  };

  const primeiroDigitoVerificador = calcularDigito(cpfNumeros.substring(0, 9));

  const segundoDigitoVerificador = calcularDigito(
    cpfNumeros.substring(0, 9) + primeiroDigitoVerificador,
  );

  const cpfValidado =
    cpfNumeros.substring(0, 9) +
    primeiroDigitoVerificador +
    segundoDigitoVerificador;

  // Compara se o gerado matematicamente é igual ao digitado
  if (cpfNumeros !== cpfValidado) {
    boxCpf.style.color = "#dc2626";
    boxCpf.textContent = "CPF Inválido (Dígitos não conferem)";
    return;
  }

  // Se passou em tudo, exibe o sucesso com o CPF já mascarado
  inputCpf.value = "";
  boxCpf.style.color = "#16a34a"; // Verde sucesso
  boxCpf.textContent = `✅ CPF Válido: ${cpfInput}`;
}
