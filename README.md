# 🛠️ Validador e Formatador de CPF Dinâmico

## 👨‍🏫 Professor: Leo Gomes Developer

🌐 [leogomesdeveloper.com](https://leogomesdeveloper.com)

Este projeto faz parte do laboratório prático da nossa turma Full Stack JavaScript. Ele demonstra de forma clara como traduzir regras matemáticas de negócio corporativas (utilizadas pela Receita Federal) em uma interface web funcional usando HTML5 estruturado, CSS3 moderno e JavaScript puro.

---

## 📌 Estrutura do Projeto

O projeto é composto por três pilares essenciais:

- **`index.html`**: A interface de usuário estruturada e totalmente estilizada com um design limpo, responsivo, focado em experiência do usuário (UX) e acessibilidade.
- **`cpf.js`**: O motor lógico da aplicação responsável por escutar eventos do DOM, higienizar os inputs com expressões regulares, calcular os dígitos verificadores e renderizar o resultado formatado.
- **Material de Apoio (Planilha de Excel)**: A ferramenta visual utilizada em sala para desmistificar o algoritmo de validação passo a passo antes de iniciar o código.

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

## 🚀 Como Executar o Projeto

1. Certifique-se de que os arquivos `index.html` e `cpf.js` estejam no mesmo diretório local.
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno ou utilize extensões como o _Live Server_ no VS Code.
3. Digite qualquer string de CPF no campo (o validador aceita caracteres poluídos com pontos e traços) e clique em **Validar CPF**.

---

## 💡 Desafios de Evolução (Para os Alunos)

Se você já consolidou toda a lógica explicada em aula pelo **Professor Leo**, avance no projeto implementando os seguintes pontos técnicos:

- **Validação de Sequências Repetidas:** Crie uma função auxiliar que impeça o algoritmo de dar como "Válido" strings contendo números totalmente repetidos (como `111.111.111-11`), pois eles passam na validação matemática pura mas não são CPFs reais.
- **Máscara Dinâmica em Tempo Real:** Altere o evento para capturar as entradas à medida que o usuário digita (`input`), formatando e adicionando os pontos e o hífen na tela automaticamente sem a necessidade de clicar em um botão.

---

⭐ _A engenharia de software consiste em transformar lógica abstrata em ferramentas de alta utilidade. Bons estudos!_  
_— Desenvolvido por Leo Gomes Developer_
