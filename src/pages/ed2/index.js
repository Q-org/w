import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
    const [text, setText] = useState('hello md-editor-rt!');
    const [theme] = useState('dark');
    return <MdEditor modelValue={text} onChange={setText} theme={theme} />;
};