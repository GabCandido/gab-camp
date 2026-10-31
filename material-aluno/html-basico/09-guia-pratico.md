
# Construindo um aplicativo de fotos de gatos

Neste guia, você vai construir uma página chamada **Cat Photo App**. Ao longo da atividade, vamos organizar o conteúdo, adicionar fotografias, criar links e listas e, por fim, montar um formulário para coletar informações sobre um gato.

Todo o projeto será desenvolvido em um único arquivo HTML. Ao longo da construção, utilize o navegador para acompanhar o resultado das alterações.

## 1. Criando a página

Crie uma pasta chamada `cat-photo-app` e, dentro dela, um arquivo chamado `index.html`.

Comece com a estrutura básica de um documento HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Photo App</title>
</head>
<body>

</body>
</html>
```

O conteúdo visível da página será escrito dentro do elemento `body`.

Adicione um título principal e um subtítulo:

```html
<h1>Cat Photo App</h1>

<h2>Fotos de gatos</h2>
```

Agora, acrescente um parágrafo abaixo do subtítulo:

```html
<p>Todo mundo gosta de ver fotos de gatos fofos na internet!</p>
```

Salve o arquivo e abra-o com o Live Server. Observe como o navegador apresenta os títulos e o parágrafo.

### Comentários e organização do código

Comentários são trechos escritos no código que não são exibidos na página. Em HTML, eles são delimitados por `<!--` e `-->`.

Por exemplo:

```html
<!-- Esta é a seção de fotografias -->
```

Os comentários podem ajudar a identificar partes do documento durante o desenvolvimento.

A indentação também contribui para a organização. Quando um elemento está dentro de outro, seu código deve ser deslocado para a direita, facilitando a visualização da estrutura.

## 2. Adicionando fotografias

O elemento `img` permite inserir imagens na página. Como vimos anteriormente, ele utiliza o atributo `src` para indicar o endereço da imagem e o atributo `alt` para fornecer uma descrição textual.

Abaixo do parágrafo, adicione uma fotografia:

```html
<img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="Um gato laranja descansando deitado de costas."
>
```

Observe o resultado no navegador.

Agora, acrescente outro parágrafo com um link para uma fotografia de gatos:

```html
<p>
    Veja também estes
    <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">
        gatos correndo
    </a>.
</p>
```

O elemento `a` cria um hiperlink. O atributo `href` indica o destino que será aberto quando o usuário clicar no texto.

Também é possível fazer com que o link seja aberto em uma nova aba. Para isso, utilize o atributo `target` com o valor `_blank`:

```html
<a
    href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    target="_blank"
>
    Ver fotografia em outra aba
</a>
```

Por fim, experimente colocar uma imagem dentro de um link. Assim, a própria imagem poderá ser clicada:

```html
<a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" target="_blank">
    <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        alt="Um gato laranja descansando deitado de costas."
    >
</a>
```

## 3. Organizando o conteúdo

Até agora, os elementos foram adicionados diretamente ao `body`. Entretanto, páginas maiores precisam de uma organização que ajude a identificar as diferentes partes do conteúdo.

O elemento `main` representa o conteúdo principal da página. Dentro dele, podemos utilizar elementos `section` para agrupar conteúdos relacionados.

Envolva o conteúdo que já construímos com um elemento `main`:

```html
<body>
    <main>
        <h1>Cat Photo App</h1>

        <!-- Conteúdo principal da página -->
    </main>
</body>
```

Agora, agrupe o título "Fotos de gatos", os parágrafos, os links e as imagens em uma seção:

```html
<main>
    <h1>Cat Photo App</h1>

    <section>
        <h2>Fotos de gatos</h2>

        <p>Todo mundo gosta de ver fotos de gatos fofos na internet!</p>

        <!-- Fotografias e links -->
    </section>
</main>
```

Uma página pode ter várias seções. Vamos criar outra para apresentar informações sobre os hábitos dos gatos.

Depois da primeira `section`, adicione:

```html
<section>
    <h2>O que os gatos gostam?</h2>
</section>
```

O elemento `section` representa uma seção temática do documento. Ele ajuda a dividir o conteúdo em partes com assuntos relacionados.

## 4. Criando listas

Listas são úteis para apresentar informações agrupadas.

Em HTML, podemos criar dois tipos principais de listas:

- Listas não ordenadas, com marcadores.
- Listas ordenadas, com numeração.

O elemento `ul` cria uma lista não ordenada. Cada item deve ser colocado dentro de um elemento `li`.

Dentro da seção "O que os gatos gostam?", adicione uma lista:

```html
<h3>Coisas que os gatos adoram:</h3>

<ul>
    <li>Brinquedos com penas</li>
    <li>Ponteiros laser</li>
    <li>Caixas de papelão</li>
</ul>
```

Já o elemento `ol` cria uma lista ordenada, na qual os itens são apresentados em sequência numérica.

Depois da lista anterior, acrescente:

```html
<h3>Três coisas que os gatos não gostam:</h3>

<ol>
    <li>Banhos</li>
    <li>Barulhos muito altos</li>
    <li>Visitas inesperadas</li>
</ol>
```

Observe a diferença entre os dois tipos de lista no navegador.

## 5. Fotografias com legendas e destaque textual

Podemos agrupar uma imagem e sua legenda utilizando os elementos `figure` e `figcaption`.

O elemento `figure` representa um conteúdo independente, como uma fotografia ou ilustração. O elemento `figcaption` fornece uma legenda para esse conteúdo.

Na seção sobre os hábitos dos gatos, depois da lista de coisas que eles adoram, acrescente:

```html
<figure>
    <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
        alt="Uma porção de lasanha em um prato."
    >
    <figcaption>Gatos adoram lasanha!</figcaption>
</figure>
```

Agora, vamos utilizar dois elementos para dar destaque a partes de um texto.

O elemento `em` indica ênfase em determinado trecho. Já o elemento `strong` indica que um conteúdo tem importância especial.

Altere a legenda da imagem para:

```html
<figcaption>Gatos <em>adoram</em> lasanha!</figcaption>
```

Na imagem seguinte, vamos utilizar `strong`:

```html
<figure>
    <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
        alt="Cinco gatos reunidos em um campo."
    >
    <figcaption>Gatos <strong>não gostam</strong> de outros gatos desconhecidos.</figcaption>
</figure>
```

Esses elementos não devem ser confundidos com recursos de estilização. Embora o navegador normalmente apresente `em` em itálico e `strong` em negrito, eles também comunicam significado ao documento.

## 6. Construindo um formulário

Vamos adicionar uma seção para que visitantes possam compartilhar informações sobre seus gatos.

Depois da seção anterior, crie uma nova seção:

```html
<section>
    <h2>Conte-nos sobre seu gato</h2>
</section>
```

O elemento `form` delimita um formulário HTML. Dentro dele, podemos inserir campos para receber informações do usuário.

Adicione um formulário à nova seção:

```html
<form>
    
</form>
```

### Campo de texto

O elemento `input` permite criar diferentes tipos de campos de entrada. O atributo `type` define o tipo de controle apresentado.

Para receber o endereço de uma fotografia, adicione um campo de texto:

```html
<input
    type="text"
    name="cat-photo"
    placeholder="Endereço da foto do seu gato"
    required
>
```

Observe os atributos utilizados:

- `type="text"` cria um campo de texto.
- `name` identifica o campo quando os dados são enviados.
- `placeholder` apresenta uma orientação dentro do campo.
- `required` indica que o preenchimento é obrigatório.

### Botão de envio

Para permitir que o usuário envie o formulário, adicione um botão:

```html
<button type="submit">Enviar</button>
```

O valor `submit` indica que o botão deve enviar o formulário.

Neste momento, o formulário ainda não está conectado a um servidor. Portanto, o botão não enviará as informações para um sistema externo.

## 7. Escolhendo o ambiente do gato

Agora vamos adicionar opções para identificar se o gato vive dentro ou fora de casa.

O elemento `input` também permite criar botões de opção, utilizando `type="radio"`.

Dentro do formulário, antes do campo de texto, adicione:

```html
<fieldset>
    <legend>Seu gato vive dentro ou fora de casa?</legend>

    <label>
        <input type="radio" name="indoor-outdoor" value="indoor">
        Dentro de casa
    </label>

    <label>
        <input type="radio" name="indoor-outdoor" value="outdoor">
        Fora de casa
    </label>
</fieldset>
```

O elemento `fieldset` agrupa campos relacionados. O elemento `legend` fornece um título para esse grupo.

Os elementos `label` associam um texto a um campo de formulário. Quando o campo está dentro do `label`, clicar no texto também permite selecionar a opção.

Observe que os dois campos `radio` possuem o mesmo valor no atributo `name`. Isso faz com que pertençam ao mesmo grupo: o usuário poderá selecionar apenas uma das opções.

O atributo `value` define o valor associado a cada opção.

### Características do gato

Diferentemente dos botões de opção, as caixas de seleção permitem marcar várias alternativas.

Para conhecer um pouco da personalidade do gato, adicione outro grupo:

```html
<fieldset>
    <legend>Como é a personalidade do seu gato?</legend>

    <label>
        <input type="checkbox" name="personality" value="loving">
        Carinhoso
    </label>

    <label>
        <input type="checkbox" name="personality" value="energetic">
        Agitado
    </label>

    <label>
        <input type="checkbox" name="personality" value="lazy">
        Preguiçoso
    </label>
</fieldset>
```

Como as caixas de seleção permitem múltiplas escolhas, os campos podem compartilhar o mesmo valor de `name`.

Também podemos deixar uma opção marcada inicialmente. Para isso, utilize o atributo booleano `checked`:

```html
<input type="checkbox" name="personality" value="loving" checked>
```

Experimente adicionar `checked` a uma das opções do formulário e observe o resultado no navegador.

## 8. Finalizando a página

Para encerrar o documento, vamos adicionar um rodapé.

O elemento `footer` representa o rodapé de uma página ou de uma seção. Ele pode conter informações complementares, como créditos, autoria e links relacionados.

Depois do elemento `main`, mas ainda dentro de `body`, acrescente:

```html
<footer>
    <p>Cat Photo App — Um espaço para compartilhar fotos de gatos.</p>
</footer>
```

A estrutura principal da página está concluída.

## 9. Revisando o resultado

Antes de encerrar, confira se sua página apresenta os seguintes elementos:

- [ ] Um documento HTML com estrutura básica.
- [ ] Um título principal e títulos secundários.
- [ ] Parágrafos e comentários.
- [ ] Fotografias com descrições alternativas.
- [ ] Links em textos e imagens.
- [ ] Conteúdo organizado em `main` e `section`.
- [ ] Listas ordenadas e não ordenadas.
- [ ] Fotografias agrupadas com legendas.
- [ ] Trechos de texto com ênfase e importância.
- [ ] Um formulário com campo de texto e botão de envio.
- [ ] Opções de seleção única e múltipla.
- [ ] Grupos de campos com títulos.
- [ ] Um rodapé.

Salve o arquivo e observe novamente a página no navegador. Experimente interagir com os campos do formulário, selecionar opções e abrir os links.

**Importante:** o formulário demonstra a estrutura HTML necessária para receber informações. Para armazenar ou processar os dados enviados, seria necessário implementar uma aplicação no lado do servidor, assunto que será estudado posteriormente.