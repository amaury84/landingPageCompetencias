
// Initialize Monaco Editor
function initMonacoEditor() {
    const container = document.getElementById('monaco-editor-container');
    if (!container) return;
    
    // Create the editor
    window.editor = monaco.editor.create(container, {
        value: '// Write your code here
',
        language: 'python',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
            enabled: true
        }
    });
    
    // Add language selection
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            monaco.editor.setModelLanguage(window.editor.getModel(), this.value);
        });
    }
    
    // Add a method to get the editor content
    window.getEditorContent = function() {
        return window.editor.getValue();
    };
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load Monaco Editor
    const script = document.createElement('script');
    script.src = '/static/monaco-editor/vs/loader.js';
    script.onload = function() {
        require.config({ paths: { 'vs': '/static/monaco-editor/vs' }});
        require(['vs/editor/editor.main'], function() {
            initMonacoEditor();
        });
    };
    document.head.appendChild(script);
});
