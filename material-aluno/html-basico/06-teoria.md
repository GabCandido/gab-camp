
# Conectando HTML e CSS com o elemento link

## 1. HTML e CSS trabalham juntos

Como vimos anteriormente, HTML e CSS possuem responsabilidades diferentes no desenvolvimento de páginas web.

- HTML define a estrutura e o conteúdo.
- CSS define a apresentação visual.

Para que o navegador aplique os estilos de um arquivo CSS a uma página HTML, precisamos estabelecer uma conexão entre os dois documentos.

Uma das maneiras mais comuns de fazer isso é utilizando o elemento `link`.

## 2. O elemento link

O elemento `link` estabelece uma relação entre o documento HTML atual e um recurso externo.

Ele é frequentemente utilizado para conectar uma folha de estilos CSS à página.

Observe o exemplo:

```html
<link rel="stylesheet" href="styles.css">
```

Nesse exemplo, temos dois atributos importantes:

- `rel`: informa o tipo de relação entre o documento HTML e o recurso externo.
- `href`: indica o endereço ou caminho do recurso que será conectado.

O valor `stylesheet` no atributo `rel` informa ao navegador que o recurso vinculado é uma folha de estilos.

Já o valor `styles.css` indica o arquivo que contém as regras CSS.

## 3. Onde utilizar o elemento link?

O elemento `link` deve ser colocado dentro do elemento `head` do documento HTML.

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>
```

O navegador utiliza essa referência para localizar e carregar a folha de estilos associada à página.

O elemento `link` é um elemento vazio: não possui conteúdo interno nem utiliza uma tag de fechamento.

## 4. Caminhos dos arquivos

O atributo `href` pode receber diferentes tipos de endereço.

Quando o arquivo CSS está na mesma pasta que o documento HTML, podemos indicar apenas seu nome:

```html
<link rel="stylesheet" href="styles.css">
```

Se o arquivo estiver dentro de uma subpasta chamada `css`, o caminho deverá considerar essa localização:

```html
<link rel="stylesheet" href="css/styles.css">
```

Portanto, o caminho informado em `href` precisa corresponder à localização real do arquivo.

Se o navegador não encontrar o recurso indicado, a folha de estilos não será carregada corretamente.

## 5. Por que utilizar uma folha de estilos externa?

Manter o CSS em um arquivo separado do HTML é uma prática bastante utilizada no desenvolvimento web.

Essa organização oferece algumas vantagens:

- **Separação de responsabilidades:** o HTML fica responsável pela estrutura, enquanto o CSS cuida da apresentação.
- **Manutenção:** alterações visuais podem ser realizadas sem modificar a estrutura do documento.
- **Reutilização:** uma mesma folha de estilos pode ser conectada a diferentes páginas.
- **Organização:** projetos maiores ficam mais fáceis de compreender e manter.

O estudo das propriedades e regras CSS será aprofundado em etapas posteriores do curso.

## 6. Para revisar

1. Qual é a finalidade do elemento `link`?
2. O que representam os atributos `rel` e `href`?
3. O que significa utilizar `rel="stylesheet"`?
4. Em qual parte do documento HTML devemos inserir o elemento `link`?
5. Por que é comum manter o CSS em um arquivo separado do HTML?
6. O que pode acontecer quando o caminho informado em `href` não corresponde à localização do arquivo?