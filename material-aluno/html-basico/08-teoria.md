
# Codificação de caracteres: entendendo o UTF-8

## 1. Como os computadores representam textos?

Quando escrevemos uma página HTML, utilizamos letras, números, sinais de pontuação e outros caracteres.

Entretanto, computadores armazenam e processam informações utilizando valores numéricos representados em formato binário.

Isso significa que os caracteres de um texto precisam ser representados por uma sequência de bytes para que possam ser armazenados e interpretados pelos sistemas.

A **codificação de caracteres** define como esses caracteres são representados numericamente.

## 2. O que é Unicode?

Unicode é um padrão que estabelece uma identificação numérica para os caracteres utilizados nos diferentes sistemas de escrita do mundo.

Cada caractere possui um código próprio, chamado de *code point*.

Por exemplo:

- A letra `A` possui o código Unicode `U+0041`.
- A letra `á` possui o código Unicode `U+00E1`.
- O símbolo `€` possui o código Unicode `U+20AC`.

O Unicode permite representar caracteres de diferentes idiomas, símbolos matemáticos, sinais de pontuação e emojis.

Entretanto, precisamos de uma maneira de transformar esses códigos em bytes para armazená-los e transmiti-los. É nesse ponto que entram as codificações Unicode.

## 3. O que é UTF-8?

UTF-8 significa *Unicode Transformation Format – 8 bits*.

É uma codificação de caracteres capaz de representar os caracteres definidos pelo padrão Unicode utilizando sequências de um a quatro bytes.

Sua principal vantagem é permitir a representação de uma grande variedade de caracteres e idiomas, mantendo compatibilidade com o padrão ASCII para os caracteres básicos.

Por isso, UTF-8 é amplamente utilizado em páginas web e em diversos outros sistemas.

## 4. Por que utilizar UTF-8 em páginas HTML?

Imagine uma página escrita em português:

```html
<p>Olá! Estou aprendendo desenvolvimento web.</p>
```

O texto contém caracteres como `á` e `ê`, que precisam ser interpretados corretamente pelo navegador.

Se o navegador interpretar os bytes do documento utilizando uma codificação diferente daquela utilizada para salvar o arquivo, alguns caracteres poderão aparecer incorretamente.

Esse problema é conhecido informalmente como *mojibake*: quando um texto é interpretado com uma codificação inadequada e apresenta caracteres sem sentido ou símbolos inesperados.

Por exemplo, uma palavra como `ação` pode aparecer incorretamente como `aÃ§Ã£o`.

Utilizar UTF-8 de maneira consistente ajuda a evitar esse tipo de problema.

## 5. Declarando a codificação no HTML

Para informar ao navegador que o documento utiliza UTF-8, adicionamos o atributo `charset` ao elemento `meta`:

```html
<meta charset="UTF-8">
```

Essa declaração deve ficar dentro do elemento `head`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Aprendendo a utilizar caracteres especiais: á, é, í, ó, ú e ç.</p>
</body>
</html>
```

O atributo `charset` informa ao navegador qual codificação deve utilizar para interpretar os bytes do documento.

É importante compreender que essa declaração não converte automaticamente o arquivo para UTF-8. O arquivo também precisa estar efetivamente salvo nessa codificação.

## 6. Salvando arquivos em UTF-8 no VS Code

O Visual Studio Code permite consultar e alterar a codificação utilizada para salvar um arquivo.

Na barra de status, na parte inferior da janela, você encontrará a indicação da codificação atual, geralmente apresentada como `UTF-8`.

Ao clicar nessa indicação, o editor apresenta opções relacionadas à codificação, incluindo:

- **Reopen with Encoding:** reabre o arquivo utilizando outra codificação para interpretação.
- **Save with Encoding:** salva o arquivo utilizando uma codificação selecionada.

Ao trabalhar com documentos HTML que declaram `charset="UTF-8"`, mantenha também o arquivo salvo em UTF-8.

Dessa maneira, a codificação declarada no documento e a codificação efetivamente utilizada no arquivo estarão de acordo.

## 7. Para revisar

1. Por que os computadores precisam representar caracteres por meio de valores numéricos?
2. O que é Unicode?
3. Qual é a diferença entre Unicode e UTF-8?
4. Quantos bytes um caractere pode utilizar na codificação UTF-8?
5. Por que UTF-8 é amplamente utilizado em páginas web?
6. Qual é a finalidade do atributo `charset`?
7. Onde devemos declarar a codificação de caracteres no documento HTML?
8. Por que não basta declarar `charset="UTF-8"` se o arquivo estiver salvo em outra codificação?