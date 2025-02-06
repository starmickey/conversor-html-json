# Conversor de HTML a JSON

Este proyecto convierte un archivo HTML en una cadena JSON válida, extrayendo la estructura del primer elemento significativo dentro del `<body>`.

## 📌 Características
- Convierte un archivo HTML en una estructura JSON válida.
- Extrae el primer elemento del `<body>` y lo serializa en formato JSON.
- Utiliza `jsdom` para procesar el HTML en un entorno Node.js.
- Guarda el resultado en un archivo `output.html`.

## 🚀 Instalación

### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/tu-repositorio/html-to-json.git
 cd html-to-json
```

### 2️⃣ Instalar dependencias
```sh
 npm install
```

## 🛠️ Uso

Ejecuta el siguiente comando en la terminal:
```sh
 node index.js archivo.html
```
Donde `archivo.html` es el archivo HTML que deseas convertir.

## 📂 Archivos principales

### `index.js`
- Lee el archivo HTML de entrada.
- Llama a `htmlToJsonString()` para convertir el HTML en JSON.
- Guarda el resultado en `output.html`.

### `htmlToJsonString.js`
- Utiliza `jsdom` para analizar el HTML.
- Extrae la estructura del primer elemento significativo del `<body>`.
- Retorna el resultado en formato JSON.

## 📤 Ejemplo de salida
Si el archivo `archivo.html` contiene:
```html
<table id="Encabezado_Empresa" class="datos" borderColor="#5d6d7e" width="99%" border="1" style="font-size: 10px;"> <tbody> </tbody> </table>
```
El archivo `output.html` generará:
```json
{
  "result": "<table id=\"Encabezado_Empresa\" class=\"datos\" borderColor=\"#5d6d7e\" width=\"99%\" border=\"1\" style=\"font-size: 10px;\"> <tbody> </tbody> </table>"
}
```

## 📜 Licencia
Este proyecto es de código abierto bajo la licencia MIT.

