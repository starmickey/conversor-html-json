import { JSDOM } from "jsdom";

/**
 * Convierte un código HTML en una cadena JSON válida.
 *
 * Esta función toma un contenido HTML como entrada, lo analiza utilizando `jsdom` 
 * para obtener su estructura DOM y devuelve un JSON con la estructura del primer 
 * elemento significativo encontrado en el `<body>`.
 *
 * @param {string} html - Código HTML en formato de cadena.
 * @returns {string} - Cadena JSON con la estructura HTML serializada en el formato: 
 *                     { "result": "<estructura_html>" }.
 */
export default function htmlToJsonString(html) {
    // Crear un DOM virtual con el HTML de entrada
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Obtener el primer elemento significativo dentro del <body>
    const rootElement = document.body.firstChild;

    // Si no se encuentra un elemento válido, devolver un JSON con un resultado vacío
    if (!rootElement) {
        return JSON.stringify({ result: "" }, null, 2);
    }

    // Serializar la estructura HTML completa del elemento raíz
    const htmlString = rootElement.outerHTML;

    // Devolver la estructura en formato JSON con el resultado
    return JSON.stringify({ result: htmlString }, null, 2);
}
