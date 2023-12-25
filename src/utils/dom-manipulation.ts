export const createDOMElementForKey = (key: string) => `<span class="pressed-key">${key}</span>`

export const getDisplayerDOMElement = () => document.getElementById('keypress-displayer') as HTMLDivElement;
