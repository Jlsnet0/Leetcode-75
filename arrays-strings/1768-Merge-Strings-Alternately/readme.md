# 1768. Merge Strings Alternately

**Dificuldade:** Easy


## Problema

Intercalar duas strings letra por letra, começando por `word1`. Quando uma
string acaba antes da outra, o restante é colado direto, sem alternância.

## Estratégia

1. Usar dois índices (`i` para `word1`, `j` implícito via o mesmo `i` para
   `word2`) percorrendo as duas strings ao mesmo tempo — **Two Pointers**.
2. O loop precisa rodar até a **string mais longa** terminar, não até a soma
   dos tamanhos → usar `Math.max(word1.length, word2.length)` como limite.
3. A cada iteração, dois `if`s independentes:
   - `if (i < word1.length) result += word1[i]`
   - `if (i < word2.length) result += word2[i]`

   Quando uma string já terminou, seu `if` simplesmente para de executar —
   isso resolve sozinho o caso do "resto sem alternância".



## Complexidade

| | Complexidade | Motivo |
|---|---|---|
| Tempo | `O(n)` | cada letra das duas strings é processada uma única vez |
| Espaço | `O(n)` | `result` cresce proporcionalmente a `word1.length + word2.length` |


## Padrão a reconhecer no futuro

Sempre que o enunciado pedir para **percorrer duas estruturas ao mesmo
tempo** (arrays ou strings) de forma coordenada, especialmente quando elas
podem ter **tamanhos diferentes** → pensar em **Two Pointers**, usando
`Math.max` (ou condições independentes) para lidar com a diferença de
tamanho.