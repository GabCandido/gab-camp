
# HTML Boilerplate: a estrutura inicial de um documento

## 1. O que é HTML Boilerplate?

No desenvolvimento web, é comum iniciar uma página HTML utilizando uma estrutura básica que já contém os elementos e as declarações essenciais para o documento.

Essa estrutura inicial é conhecida como **HTML Boilerplate**.

O termo *boilerplate* é utilizado na programação para se referir a um conjunto de código que serve como ponto de partida e costuma ser reutilizado em diferentes projetos.

Em vez de começar cada página do zero, podemos utilizar essa estrutura e acrescentar o conteúdo específico de cada projeto.

## 2. Estrutura básica de um documento HTML

Observe um exemplo de HTML Boilerplate:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Minha primeira página</h1>
    <p>Este é o conteúdo da página.</p>
</body>
</html>
```

Vamos compreender a função de cada parte dessa estrutura.

## 3. A declaração DOCTYPE

A primeira linha do documento é:

```html
<!DOCTYPE html>
```

Essa declaração informa ao navegador que o documento utiliza o padrão HTML moderno.

Ela não é uma tag HTML e não representa um elemento da página. Sua função é indicar ao navegador como interpretar o documento.

Sua ausência pode fazer com que o navegador utilize um modo de renderização legado, conhecido como *quirks mode*, que pode produzir diferenças no comportamento e na apresentação da página.

## 4. O elemento html

O elemento `html` é o elemento raiz do documento. Todos os demais elementos da página ficam dentro dele, com exceção da declaração DOCTYPE.

```html
<html lang="pt-BR">
    ...
</html>
```

Observe o atributo `lang`.

Ele informa o idioma principal do conteúdo da página. Nesse exemplo, `pt-BR` indica português do Brasil.

Essa informação é importante para ferramentas que interpretam o conteúdo, incluindo leitores de tela, mecanismos de busca e recursos de tradução.

## 5. O elemento head

O elemento `head` reúne informações sobre o documento, conhecidas como metadados, além de referências a recursos externos.

Essas informações são processadas pelo navegador e, em geral, não aparecem diretamente na área de conteúdo da página.

Exemplo:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha página</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

Entre os elementos que costumam aparecer dentro de `head`, destacam-se:

- `meta`: fornece metadados sobre o documento.
- `title`: define o título da página.
- `link`: estabelece relações com recursos externos, como folhas de estilos.

### 5.1. O elemento title

O elemento `title` define o título do documento.

```html
<title>Minha página</title>
```

Esse texto normalmente aparece na aba do navegador e também pode ser utilizado por mecanismos de busca e outros serviços que identificam páginas web.

É importante não confundir `title` com os elementos de título do conteúdo, como `h1` e `h2`.

O elemento `title` pertence ao `head`, enquanto `h1` e os demais títulos fazem parte do conteúdo apresentado no `body`.

### 5.2. O elemento meta

O elemento `meta` fornece informações sobre o documento que não são representadas por outros elementos específicos.

Dois exemplos comuns são:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

O primeiro informa a codificação de caracteres utilizada pelo documento.

O segundo fornece instruções relacionadas à área de visualização (*viewport*) em dispositivos.

A codificação UTF-8 será estudada com mais detalhes na próxima teoria.

### 5.3. A configuração viewport

A configuração:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

ajuda o navegador a ajustar a área de visualização da página às dimensões disponíveis no dispositivo.

Se uma página for acessada em um celular, por exemplo, essa configuração permite que a largura da área de visualização corresponda à largura da tela do dispositivo.

O valor `initial-scale=1.0` define a escala inicial de visualização.

Essa configuração é importante para o desenvolvimento de páginas responsivas, que se adaptam a diferentes tamanhos de tela.

## 6. O elemento body

O elemento `body` contém o conteúdo principal apresentado ao visitante da página.

É nele que colocamos elementos como:

- Títulos e subtítulos.
- Parágrafos.
- Imagens.
- Links.
- Listas.
- Formulários.

Exemplo:

```html
<body>
    <h1>Bem-vindo!</h1>
    <p>Esta página utiliza uma estrutura HTML básica.</p>
</body>
```

Enquanto o `head` reúne informações sobre o documento, o `body` contém o conteúdo da página.

## 7. A importância do HTML Boilerplate

O HTML Boilerplate oferece uma estrutura consistente para iniciar novos documentos.

Ao utilizá-lo, garantimos que informações importantes sejam declaradas desde o início, facilitando a interpretação do documento pelo navegador e sua integração com outros recursos.

A estrutura também torna o código mais organizado e previsível, especialmente quando trabalhamos com várias páginas dentro de um mesmo projeto.

## 8. Para revisar

1. O que significa o termo HTML Boilerplate?
2. Qual é a finalidade da declaração `DOCTYPE`?
3. Qual é a função do elemento `html`?
4. Para que serve o atributo `lang`?
5. Qual é a diferença entre `head` e `body`?
6. Qual é a finalidade do elemento `title`?
7. Qual é a função do elemento `meta`?
8. Por que utilizamos a configuração `viewport`?
9. Onde devemos inserir o elemento `link` quando queremos conectar uma folha de estilos?