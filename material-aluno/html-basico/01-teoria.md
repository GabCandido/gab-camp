
# HTML: estrutura e conteúdo das páginas web

## 1. O que é HTML?

HTML é a sigla para *HyperText Markup Language*, ou Linguagem de Marcação de Hipertexto.

É a linguagem utilizada para estruturar o conteúdo de páginas web. Por meio dela, indicamos ao navegador quais partes do conteúdo são títulos, parágrafos, imagens, links e outros elementos.

O HTML não é uma linguagem de programação. Ele não executa operações lógicas ou algoritmos como JavaScript. Sua função principal é organizar e descrever o conteúdo de uma página.

## 2. Elementos HTML

Uma página HTML é formada por elementos. Cada elemento representa uma parte do conteúdo ou uma estrutura da página.

Na maioria dos casos, um elemento é composto por:

- **Tag de abertura:** indica onde o elemento começa.
- **Conteúdo:** texto ou outros elementos que ficam dentro dele.
- **Tag de fechamento:** indica onde o elemento termina.

Observe o exemplo:

```html
<h1>Desenvolvimento Web</h1>
```

Nesse exemplo:

- `<h1>` é a tag de abertura.
- `Desenvolvimento Web` é o conteúdo.
- `</h1>` é a tag de fechamento.

A barra `/` indica que a tag está fechando um elemento.

### 2.1. Elementos e suas finalidades

Existem diferentes elementos HTML, cada um com uma finalidade específica.

Por exemplo:

```html
<h1>Meu primeiro site</h1>

<p>Estou aprendendo a desenvolver páginas web.</p>
```

O elemento `h1` representa um título de nível principal, enquanto `p` representa um parágrafo.

O navegador interpreta esses elementos e apresenta o conteúdo de acordo com sua estrutura e suas características padrão.

### 2.2. Letras maiúsculas e minúsculas

O HTML não diferencia letras maiúsculas de minúsculas nos nomes das tags. Portanto, `<H1>` e `<h1>` são interpretados da mesma maneira.

Apesar disso, a convenção adotada no desenvolvimento web é utilizar letras minúsculas:

```html
<h1>Meu primeiro site</h1>
```

Essa convenção facilita a leitura e mantém o código consistente.

## 3. Elementos que não possuem tag de fechamento

Nem todo elemento HTML utiliza uma tag de abertura e outra de fechamento.

Alguns elementos não possuem conteúdo interno e são chamados de **elementos vazios** (*void elements*).

Um exemplo é o elemento `img`, utilizado para inserir imagens:

```html
<img src="paisagem.jpg" alt="Paisagem com montanhas e um lago">
```

Observe que não existe uma tag `</img>`.

Outros exemplos de elementos vazios são:

- `br`: representa uma quebra de linha.
- `hr`: representa uma mudança temática no conteúdo.
- `meta`: fornece metadados sobre o documento.
- `input`: representa um campo de entrada de dados.

Em alguns exemplos, você poderá encontrar uma barra antes do fechamento da tag:

```html
<img src="paisagem.jpg" alt="Paisagem com montanhas e um lago" />
```

Essa forma também é aceita em HTML, mas a barra final não é necessária para elementos vazios.

## 4. HTML, CSS e JavaScript

O desenvolvimento de páginas web geralmente envolve três tecnologias fundamentais: HTML, CSS e JavaScript.

Cada uma possui uma responsabilidade diferente:

**HTML — Estrutura e conteúdo**

Define os elementos que compõem a página, como títulos, parágrafos, imagens e links.

**CSS — Apresentação visual**

Controla características visuais, como cores, fontes, espaçamentos, tamanhos e posicionamento dos elementos.

**JavaScript — Comportamento e interatividade**

Permite implementar funcionalidades, responder às ações dos usuários e modificar o conteúdo da página dinamicamente.

Essas tecnologias trabalham em conjunto para formar páginas e aplicações web.

## 5. Para revisar

1. O que significa a sigla HTML?
2. Qual é a finalidade do HTML em uma página web?
3. Qual é a diferença entre uma tag de abertura e uma tag de fechamento?
4. Por que o elemento `img` não possui uma tag de fechamento?
5. Qual é a responsabilidade de cada uma das três tecnologias: HTML, CSS e JavaScript?