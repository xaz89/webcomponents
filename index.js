// Nos devolverá que <app-element> es de tipo HTMLElement
const appElement = document.querySelector("app-element");
console.log("appElement: ", appElement, appElement.constructor.name);

// Nos devolverá que <element> es de tipo HTMLUnkownElement
const element = document.querySelector("element");
console.log("element: ", element, element.constructor.name);