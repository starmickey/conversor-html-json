import fs from "fs";
import htmlToJsonString from "./htmlToJsonString.js";

/**
 * Script para convertir un archivo HTML en una cadena JSON válida.
 *
 * Este script lee un archivo HTML desde la línea de comandos, lo procesa 
 * para convertirlo en una cadena JSON con el formato requerido y lo guarda 
 * en un archivo de salida.
 *
 * Uso:
 * node index.js archivo.html
 *
 * Parámetros:
 * - archivo.html: Ruta del archivo HTML de entrada.
 *
 * Salida:
 * - output.html: Archivo con la estructura JSON generada.
 */

// Obtener la ruta del archivo HTML desde los argumentos de la línea de comandos
const source = process.argv.slice(2)[0];

// Leer el contenido del archivo HTML
const html = fs.readFileSync(source, "utf8");

// Convertir el contenido HTML en una cadena JSON
const jsonString = htmlToJsonString(html);

// Guardar el resultado en un archivo de salida llamado "output.html"
fs.writeFileSync("output.html", jsonString, "utf8");
