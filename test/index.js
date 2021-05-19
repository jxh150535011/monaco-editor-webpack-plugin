
import * as monaco from '@xhjin/monaco-editor/esm/vs/editor/editor.api';

monaco.editor.create(document.getElementById('container'), {
    value: 'console.log("Hello, world")',
    language: 'javascript'
});
