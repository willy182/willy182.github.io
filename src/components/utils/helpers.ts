interface ScriptAttributes {
    src: string;
    async?: boolean;
    defer?: boolean;
    crossorigin?: 'anonymous' | 'use-credentials';
    integrity?: string;
    type?: string;
}

export const addScript = (attributes: ScriptAttributes): void => {
    const script = document.createElement('script');

    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        if (value !== undefined) {
            script.setAttribute(key, value.toString());
        }
    });

    // Append script to the document body
    document.body.appendChild(script);
};

export const removeScript = (src: string): void => {
    const script = document.querySelector(`script[src="${src}"]`);
    if (script) {
        script.remove();
    }
};