import React, { useState, useEffect } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

import PubSub from 'pubsub-js'

import sanitizeHtml from 'sanitize-html';



export default function md(props) {
  const [text, setText] = useState(props.text);
  const [theme, setTheme] = useState('dark');
  const mys = (msg, data) => {
    console.log('变更了')
    setTheme(data)
  };

  useEffect(() => {
    PubSub.subscribe('变更了', mys)
    return (mys) => PubSub.unsubscribe('变更了', mys)
  }, [])

  return (
    <MdEditor
      modelValue={text}
      onChange={setText}
      theme={theme}
      sanitize={(text) => sanitizeHtml(text)}
    />
  );
};

