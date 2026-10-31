
# Guia prático: construindo uma página com HTML

Neste guia, você vai construir uma página simples utilizando HTML. O objetivo é organizar informações com títulos e parágrafos, formando uma estrutura que o navegador consiga interpretar.

## 1. Preparando o ambiente

1. Abra o Visual Studio Code.
2. Crie uma pasta chamada `primeira-pagina`.
3. Abra essa pasta no VS Code.
4. Crie um arquivo chamado `index.html`.

O arquivo `index.html` será a página principal do nosso projeto.

## 2. Criando o documento HTML

Todo documento HTML deve possuir uma estrutura básica que informa ao navegador como interpretar seu conteúdo.

Comece inserindo a seguinte estrutura no arquivo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha primeira página</title>
</head>
<body>

</body>
</html>
```

O conteúdo que será apresentado na página deve ser escrito dentro do elemento `body`.

O elemento `title`, localizado em `head`, define o título que aparece na aba do navegador.

## 3. Inserindo o primeiro conteúdo

Dentro do `body`, escreva inicialmente uma frase simples, sem utilizar elementos HTML:

```html
Minha primeira página web.
```

Salve o arquivo e abra-o no navegador utilizando a extensão **Live Server**.

Observe como o navegador apresenta esse conteúdo.

Agora, substitua a frase pelo mesmo texto dentro de um elemento de título:

```html
<h1>Minha primeira página web.</h1>
```

Salve novamente e observe a diferença.

O elemento `h1` representa o título principal da página. Além de alterar a apresentação visual, ele identifica semanticamente a importância daquele conteúdo.

## 4. Organizando o conteúdo da página

Vamos construir uma página com o título **Guia de Tecnologias Web**.

Dentro do `body`, substitua o conteúdo anterior pelo seguinte:

```html
<h1>Guia de Tecnologias Web</h1>
```

Agora, adicione um subtítulo utilizando `h2`:

```html
<h2>Conhecendo as bases do desenvolvimento web</h2>
```

Logo abaixo, escreva um parágrafo introdutório:

```html
<p>Entenda o papel das principais tecnologias usadas na construção de páginas e aplicações web.</p>
```

Até aqui, sua página deve apresentar um título principal, um subtítulo e um parágrafo.

## 5. Criando seções de conteúdo

Uma página pode ser organizada em diferentes seções. Para isso, podemos utilizar títulos de níveis diferentes.

Adicione uma seção sobre HTML:

```html
<h3>HTML</h3>
<p>HTML define a estrutura e o conteúdo de uma página web.</p>
```

Em seguida, crie uma seção sobre CSS:

```html
<h3>CSS</h3>
<p>CSS controla a apresentação visual de uma página web.</p>
```

Por fim, adicione uma seção sobre JavaScript:

```html
<h3>JavaScript</h3>
<p>JavaScript permite adicionar comportamento e interatividade a uma página web.</p>
```

Observe como os elementos `h1`, `h2` e `h3` ajudam a estabelecer uma hierarquia entre os títulos.

## 6. Verificando o resultado

Salve o arquivo e confira a página no navegador.

Verifique se:

- Existe um título principal.
- O subtítulo aparece abaixo do título principal.
- O parágrafo introdutório aparece antes das seções.
- Existem três seções, cada uma com seu título e parágrafo.
- Os títulos utilizam os níveis adequados.

Utilize o Live Server para acompanhar as alterações enquanto trabalha.

## 7. Resultado esperado

Ao finalizar, você terá uma página HTML organizada com:

- Um título principal: Guia de Tecnologias Web.
- Um subtítulo: Conhecendo as bases do desenvolvimento web.
- Um parágrafo introdutório.
- Três seções: HTML, CSS e JavaScript.
- Um parágrafo explicativo para cada seção.

Antes de encerrar, confira se o código está organizado e se todas as tags utilizadas foram abertas e fechadas corretamente.