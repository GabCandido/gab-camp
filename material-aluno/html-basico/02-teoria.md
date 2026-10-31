
# Atributos HTML

## 1. O que são atributos?

Os elementos HTML podem receber informações adicionais por meio de **atributos**.

Os atributos são escritos na tag de abertura e permitem configurar características ou comportamentos dos elementos.

Observe o exemplo:

```html
<a href="https://www.exemplo.com">Acessar site</a>
```

Nesse caso:

- `a` é o elemento que cria um link.
- `href` é o atributo que indica o destino do link.
- `https://www.exemplo.com` é o valor do atributo.
- `Acessar site` é o texto apresentado ao usuário.

A estrutura geral de um atributo é:

```html
<elemento atributo="valor">Conteúdo</elemento>
```

O nome do atributo e seu valor são separados pelo sinal de igual (`=`). Normalmente, o valor é colocado entre aspas.

Um elemento pode receber mais de um atributo:

```html
<img src="gato.jpg" alt="Um gato descansando">
```

Nesse exemplo, o elemento `img` possui dois atributos: `src` e `alt`.

É importante lembrar que os atributos são colocados na tag de abertura, e não na tag de fechamento.

## 2. Atributos dependem dos elementos

Nem todos os atributos podem ser utilizados em qualquer elemento.

Cada atributo possui uma finalidade e pode ser aplicável a elementos específicos.

Por exemplo, o atributo `href` é utilizado no elemento `a` para indicar o destino de um link. Colocá-lo em um elemento `h1` não produziria o mesmo efeito.

Alguns atributos também possuem valores específicos ou formatos esperados.

## 3. Links e os atributos href e target

O elemento `a` (*anchor*, ou âncora) é utilizado para criar links.

O atributo `href` define o endereço para o qual o usuário será direcionado ao clicar no link.

```html
<a href="https://www.wikipedia.org">Visitar a Wikipédia</a>
```

O texto entre as tags é a parte clicável do link.

### 3.1. Abrindo links em uma nova aba

O atributo `target` determina onde o documento vinculado será aberto.

Um dos valores mais utilizados é `_blank`, que solicita a abertura do destino em uma nova aba ou janela, dependendo das configurações do navegador.

```html
<a href="https://www.wikipedia.org" target="_blank">
    Visitar a Wikipédia
</a>
```

Quando o atributo `target` não é informado, o comportamento padrão é abrir o destino no mesmo contexto de navegação.

## 4. Imagens e os atributos src e alt

O elemento `img` permite inserir imagens em uma página web.

Dois atributos são especialmente importantes nesse elemento:

- `src`: indica o caminho ou endereço do arquivo de imagem.
- `alt`: fornece uma descrição textual da imagem.

Exemplo:

```html
<img
    src="imagens/praia.jpg"
    alt="Praia com água azul e areia clara"
>
```

### 4.1. O atributo src

O atributo `src` (*source*, ou origem) indica onde o navegador deve encontrar o arquivo da imagem.

Esse endereço pode apontar para um arquivo armazenado no próprio projeto ou para uma imagem disponível na internet.

### 4.2. O atributo alt

O atributo `alt` (*alternative text*, ou texto alternativo) descreve o conteúdo ou a finalidade da imagem.

Ele é importante por dois motivos principais:

- **Acessibilidade:** leitores de tela podem utilizar essa descrição para transmitir o conteúdo da imagem a pessoas que não conseguem visualizá-la.
- **Falha no carregamento:** caso a imagem não seja carregada, o navegador poderá apresentar o texto alternativo.

O texto alternativo deve ser útil e coerente com a imagem. Não basta escrever algo genérico como "imagem" ou repetir o nome do arquivo.

## 5. Atributos booleanos

A maioria dos atributos utiliza um nome e um valor. Entretanto, existem atributos cujo funcionamento depende simplesmente de sua presença no elemento.

Eles são chamados de **atributos booleanos**.

Um exemplo é `checked`, utilizado em campos de seleção do tipo checkbox:

```html
<input type="checkbox" checked>
```

A presença de `checked` indica que a opção deve aparecer marcada inicialmente.

Se o atributo for removido:

```html
<input type="checkbox">
```

A opção aparecerá desmarcada inicialmente.

Outros exemplos de atributos booleanos:

- `disabled`: desabilita um elemento.
- `readonly`: impede a edição do valor de um campo.
- `required`: indica que o preenchimento de um campo é obrigatório.

Observe o exemplo:

```html
<input type="text" value="Campo bloqueado" disabled>
```

Nesse caso, o campo aparece desabilitado e o usuário não consegue interagir com ele normalmente.

A presença de um atributo booleano representa sua ativação. Sua ausência representa sua desativação.

## 6. Para revisar

1. O que são atributos HTML e onde eles devem ser escritos?
2. Qual é a diferença entre o nome de um atributo e seu valor?
3. Qual é a finalidade dos atributos `href` e `target`?
4. Qual é a diferença entre os atributos `src` e `alt`?
5. Por que o atributo `alt` é importante para a acessibilidade?
6. O que caracteriza um atributo booleano?
7. Qual é o efeito dos atributos `checked`, `disabled` e `required`?