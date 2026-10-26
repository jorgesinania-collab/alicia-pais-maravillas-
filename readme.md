
# Alicia en el País de las Maravillas

## Descripción
Página web interactiva con tres ejercicios inspirados en Alicia en el País de las Maravillas.

## Ejercicios
1. La poción mágica: calcula la altura final de Alicia y comprueba si puede pasar por la puerta.
2. La merienda del Sombrerero: calcula el precio de las bebidas y aplica un descuento del 10% al comprar cinco tazas o más.
3. El desafío de la Reina: cuenta los números pares e impares, calcula sus sumas y las compara.

## Tecnologías utilizadas
- HTML
- CSS
- JavaScript

## Cómo ejecutar
Abrir el archivo index.html en un navegador web.

## Autor
Estudiante de Programación Web I
## Casos de prueba

Se realizaron pruebas para verificar el funcionamiento de los tres ejercicios, incluyendo datos válidos, inválidos y casos límite.

### Ejercicio 1: La poción mágica

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Altura: 180 cm, poción: 40 ml | Altura final: 100 cm. Alicia puede pasar por la puerta. | Correcto |
| 2 | Altura: 180 cm, poción: 10 ml | Altura final: 160 cm. Alicia no puede pasar por la puerta. | Correcto |
| 3 | Altura: 100 cm, poción: 10 ml | Altura final: 80 cm. Alicia puede pasar por la puerta. | Correcto |
| 4 | Altura: 0 cm, poción: 10 ml | El sistema muestra un mensaje de error. | Correcto |
| 5 | Altura: 180 cm, poción fuera del rango permitido | El sistema muestra un mensaje de error. | Correcto |

### Ejercicio 2: La merienda del Sombrerero

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Nombre: Ana, bebida: té, cantidad: 2 | Subtotal: Bs 10. Descuento: Bs 0. Total: Bs 10. | Correcto |
| 2 | Nombre: Luis, bebida: café, cantidad: 5 | Subtotal: Bs 35. Descuento: Bs 3,50. Total: Bs 31,50. | Correcto |
| 3 | Nombre: María, bebida: chocolate, cantidad: 4 | Subtotal: Bs 32. Descuento: Bs 0. Total: Bs 32. | Correcto |
| 4 | Nombre vacío, bebida: té, cantidad: 2 | El sistema muestra un mensaje de error. | Correcto |
| 5 | Nombre: Pedro, bebida: jugo, cantidad: 0 | El sistema muestra un mensaje de error. | Correcto |

### Ejercicio 3: El desafío de la Reina

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | N = 5 | Pares: 2 números, suma 6. Impares: 3 números, suma 9. | Correcto |
| 2 | N = 1 | Pares: 0 números, suma 0. Impares: 1 número, suma 1. | Correcto |
| 3 | N = 2 | Pares: 1 número, suma 2. Impares: 1 número, suma 1. | Correcto |
| 4 | N = 0 | El sistema muestra un mensaje de error. | Correcto |
| 5 | N superior al máximo permitido | El sistema muestra un mensaje de error. | Correcto |

**Conclusión:** Los casos de prueba permiten comprobar el cálculo de resultados, la aplicación de descuentos, la clasificación de números y la validación de entradas incorrectas.
