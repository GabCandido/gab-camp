
# Desafio: Construindo uma página de receita

Você foi encarregado de criar uma página simples para apresentar uma receita. O objetivo é organizar as informações de maneira clara, permitindo que qualquer pessoa consulte os ingredientes necessários e acompanhe o modo de preparo.

Neste desafio, você deverá construir uma página HTML para uma receita de **panquecas simples**.

## Código inicial

Crie uma pasta chamada `recipe-page` e, dentro dela, um arquivo `index.html`.

Comece com a estrutura básica abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panquecas simples</title>
</head>
<body>

</body>
</html>
```

## O que desenvolver

Complete o documento para apresentar a receita. Sua página deverá conter:

1. Um título principal com o nome da receita.
2. Um parágrafo apresentando brevemente o prato.
3. Uma seção intitulada **Ingredientes**, contendo uma lista não ordenada com pelo menos quatro ingredientes.
4. Uma seção intitulada **Modo de preparo**, contendo uma lista ordenada com pelo menos quatro etapas, na sequência correta.
5. Uma imagem relacionada à receita, acompanhada de um texto alternativo que descreva seu conteúdo.

Você pode utilizar esta imagem como referência:

`https://cdn.freecodecamp.org/curriculum/labs/recipe.jpg`

O conteúdo da receita deve ser coerente: os ingredientes apresentados precisam ser utilizados nas etapas de preparo.

## Critérios de conclusão

- [ ] O documento possui a estrutura básica de HTML.
- [ ] O título da aba do navegador identifica a receita.
- [ ] A página possui apenas um título principal (`h1`).
- [ ] A apresentação da receita utiliza um parágrafo (`p`).
- [ ] A seção de ingredientes utiliza um título secundário (`h2`) e uma lista não ordenada (`ul`).
- [ ] A lista de ingredientes possui pelo menos quatro itens (`li`).
- [ ] A seção de preparo utiliza um título secundário (`h2`) e uma lista ordenada (`ol`).
- [ ] A lista de preparo possui pelo menos quatro etapas (`li`).
- [ ] A imagem utiliza os atributos `src` e `alt` adequadamente.

Salve o arquivo e abra a página com o Live Server. Confira o resultado no navegador e verifique se a organização da receita está clara e se todas as etapas estão na ordem correta.

**Importante:** este desafio deve ser desenvolvido somente com HTML. Não é necessário utilizar CSS ou JavaScript.