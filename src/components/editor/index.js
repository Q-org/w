import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import Frame from 'react-frame-component';

export default () => {
    const [text, setText] = useState('hello md-editor-rt!');
    const [theme] = useState('light');
    const [previewTheme,setPreviewTheme] = useState('github');
    const [codeTheme,setCodeTheme] = useState('gradient');
    return (
        <MdEditor modelValue={text} onChange={setText} theme={theme} previewTheme={previewTheme} codeTheme={codeTheme} />
    );
}