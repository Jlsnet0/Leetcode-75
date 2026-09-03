# 1071. Greatest Common Divisor of Strings
 
**Dificuldade:** Fácil
 
## Problema
 
Dadas duas strings `str1` e `str2`, retornar a maior string `x` tal que `x` "divide" ambas — ou seja, `x` concatenada consigo mesma uma ou mais vezes forma exatamente `str1` e também forma exatamente `str2`. Se não existir esse `x`, retornar `""`.
 
```
Input:  str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
 
Input:  str1 = "LEET", str2 = "CODE"
Output: ""
```
 
## Estratégia
 
O problema é o análogo, em strings, do MDC (Máximo Divisor Comum) entre números.
 
**Passo 1**
 
Se `x` divide tanto `str1` quanto `str2`, então as duas são, cada uma, repetições de `x`. Nesse caso, concatenar `str1 + str2` produz a mesma sequência de caracteres que `str2 + str1`, a mesma quantidade total de cópias de `x`, só que agrupadas em ordem diferente:
 
```
str1 + str2 === str2 + str1
```
 
Essa igualdade é verdadeira se e somente se existir um divisor comum. Se for falsa, já sabemos que a resposta é `""` e paramos por aqui. Sem essa checagem, o resto do algoritmo poderia calcular um `n` "válido" e devolver um pedaço de string errado.
 
**Passo 2**
 
Passada a checagem acima, sabemos que existe um `x`. O tamanho dele precisa dividir tanto `str1.length` quanto `str2.length` e o maior tamanho possível é exatamente:
 
```
gcd(str1.length, str2.length)
```
 
calculado com o algoritmo de Euclides.
 
**Passo 3**
 
Com o tamanho `n` em mãos, falta só o conteúdo. Como `x` é sempre um prefixo de `str1` (e de `str2`, já que as duas são feitas de repetições dele), basta pegar os primeiros `n` caracteres com `slice(0, n)`.

 
## Complexidade
 
| | Complexidade | Motivo |
|---|---|---|
| Tempo | `O(n1 + n2)` | Dominado pela criação/comparação de `str1 + str2` e `str2 + str1` |
| Espaço | `O(n1 + n2)` | Espaço extra das duas strings concatenadas |
 
O `gcd` em si roda em `O(log(min(n1, n2)))`, bem mais rápido que a parte de concatenação.
 
## Padrão para reconhecer no futuro
 
- **Verificar se duas sequências "se encaixam" por repetição** → testar `A + B === B + A`.
- **Encontrar o maior tamanho de algo que divide duas quantidades** → pensar em MDC / algoritmo de Euclides, mesmo fora de contexto numérico.
- **Saber o tamanho da resposta mas precisar extrair o conteúdo** → `slice(0, tamanho)` para pegar o prefixo.
