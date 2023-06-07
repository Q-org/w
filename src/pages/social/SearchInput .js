/* 
mui 象新必应ai  的输入组件 
有切换 文字输入和语音输入iconbutton 
发送 iconbutton 
固定 iconbutton 
文字统计
 */
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import LockIcon from '@mui/icons-material/Lock';

const SearchInput = () => {
  const [text, setText] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleLockToggle = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="搜索"
        value={text}
        onChange={handleTextChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <MicIcon />
              </IconButton>
              <IconButton>
                <SendIcon />
              </IconButton>
              <IconButton onClick={handleLockToggle}>
                {isLocked ? <LockIcon /> : <LockIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div>字数: {text.length}</div>
    </div>
  );
};

export default SearchInput;
