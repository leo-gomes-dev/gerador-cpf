# 🛠️ Validador e Formatador de CPF Dinâmico

## 👨‍🏫 Professor: Leo Gomes Developer
🌐 [leogomesdeveloper.com](https://leogomesdeveloper.com)  
🚀 **Projeto em Produção:** [gerador-cpf-zeta.vercel.app](https://gerador-cpf-zeta.vercel.app/)

Este projeto faz parte do laboratório prático da nossa turma Full Stack JavaScript. Ele demonstra de forma clara como traduzir regras matemáticas de negócio corporativas (utilizadas pela Receita Federal) em uma interface web funcional usando HTML5 estruturado, CSS3 moderno com foco em UX e JavaScript puro.

---

## 🔗 Demonstração em Tempo Real

O projeto está implantado e disponível para testes online na plataforma Vercel através do link abaixo:
👉 **[Acessar o Validador de CPF Online](https://gerador-cpf-zeta.vercel.app/)**

Os alunos podem utilizar esta URL de produção para comparar o comportamento da sua aplicação local com o ambiente oficial de referência homologado em aula.

---

## 📌 Estrutura do Projeto

O projeto é composto por três pilares essenciais:
* **`index.html`**: A interface de usuário estruturada e totalmente estilizada com um design limpo, responsivo, focado em experiência do usuário (UX), bloqueio de caracteres inválidos e acessibilidade.
* **`cpf.js`**: O motor lógico da aplicação responsável por escutar eventos do DOM, interceptar a digitação para aplicar a máscara progressiva em tempo real, higienizar os inputs com expressões regulares, calcular os dígitos verificadores e renderizar o resultado formatado.
* **Material de Apoio (Planilha de Excel)**: A ferramenta visual utilizada em sala para desmistificar o algoritmo de validação passo a passo antes de iniciar o código.

---

## 🧮 O Conceito Base: Da Planilha para o Código

Muitos alunos sentem dificuldade em entender a lógica regressiva de multiplicação dos dígitos do CPF. Para solucionar isso, o projeto utiliza uma **Planilha de Modelagem de Dados** no Excel que renderiza a matemática visualmente antes da codificação:

1. **Vetorização dos Dígitos:** O CPF inicial (ex: `522.478.070`) é quebrado em células individuais de um vetor (de 1º ao 9º dígito).
2. **Constantes Regressivas (1º DV):** Alinha-se uma linha de multiplicadores constantes que decrescem de `10` até `2`.
3. **Produto e Somatória:** Multiplica-se cada dígito pela sua constante vertical correspondente (ex: $5 \times 10 = 50$, $2 \times 9 = 18$). Em seguida, faz-se a soma de todos os produtos obtidos (resultando em `215`).
4. **Cálculo do Resto (Mod):** Divide-se o total da soma por `11`. O resto obtido na nossa planilha de exemplo é `6`. 
5. **Aplicação de Condicional:** Aplicando a regra ($11 - \text{resto}$), descobrimos o **1º Dígito Verificador** que é **`5`**.
6. **Cálculo do 2º DV:** O processo é repetido deslocando as constantes de `11` a `2`, incluindo agora o primeiro dígito verificador recém-descoberto na cauda dos pesos matemáticos para encontrar o dígito final **`4`**.

O script `cpf.js` automatiza exatamente esse fluxo matricial simulado na planilha usando laços `for` dinâmicos.

---

## 🚀 Como Executar o Projeto Localmente

1. Certifique-se de que os arquivos `index.html` e `cpf.js` estejam no mesmo diretório local.
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno ou utilize extensões como o *Live Server* no VS Code.
3. Digite os números no campo — a máscara inteligente aplicará os pontos e o hífen automaticamente em tempo real e bloqueará qualquer letra.
4. Clique em **Validar CPF** ou pressione **Enter** para ver o resultado na tela.

---

## 💡 Desafios de Evolução (Para os Alunos)

Se você já consolidou toda a lógica explicada em aula pelo, avance no projeto implementando os seguintes pontos técnicos:

* **Feedback Visual com Classes CSS:** Em vez de injetar estilos diretamente pelo JavaScript (`style.color`), crie duas classes no CSS (ex: `.text-success` e `.text-danger`) e gerencie o visual do box de resposta utilizando `boxCpf.classList.add()` e `boxCpf.classList.remove()`.
* **Histórico de Consultas Recentes:** Utilize o `localStorage` do navegador para salvar os últimos 3 CPFs válidos verificados pelo usuário e exiba-os em uma lista de histórico abaixo do validador principal.

---

⭐ *A engenharia de software consiste em transformar lógica abstrata em ferramentas de alta utilidade. Bons estudos!*  
_— Desenvolvido por Leo Gomes Developer_
