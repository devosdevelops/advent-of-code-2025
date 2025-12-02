/**
 * Utility functions to display results and code for Advent of Code solutions
 * Reusable across all day pages
 */

export const displayResults = (results) => {
    if (results.code1 !== undefined) {
        document.getElementById("code1").innerHTML = `Code 1: ${results.code1}`;
    }
    if (results.revolutions !== undefined) {
        document.getElementById("revolutions").innerHTML = `Total Revolutions: ${results.revolutions}`;
    }
    if (results.code2 !== undefined) {
        document.getElementById("code2").innerHTML = `Code 2: ${results.code2}`;
    }
    if (results.output !== undefined) {
        document.getElementById("output").innerHTML = `Final number: ${results.output}`;
    }
};

export const displayCode = (codeString) => {
    const jsCodeElement = document.getElementById("jsCode");
    if (jsCodeElement) {
        jsCodeElement.textContent = codeString;
    }
};
