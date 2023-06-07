/* 
mui 
悬浮窗口： MUI的Dialog , IconButton,gird,form,box
按钮和功能：
    点赞按钮,数量
      功能:数量,fetch
    分享按钮,功能
      功能 title, url,navictor 
    评论按钮和功能
    
*/
import React, { useState } from 'react';
import {
  Dialog,
  IconButton,
  Grid,
  Box,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

const FloatingWindow = () => {
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
    setLikes(likes + 1);
    // You can also use fetch to update the likes on the server
  };

  const handleShare = () => {
    // You can implement the share functionality here
    // For example, using the Web Share API:
    if (navigator.share) {
      navigator.share({
        title: 'Your title',
        url: 'https://your-url.com',
      });
    }
  };

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <FavoriteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Actions</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item>
              <IconButton onClick={handleLike}>
                <FavoriteIcon />
              </IconButton>
              {likes}
            </Grid>
            <Grid item>
              <IconButton onClick={handleShare}>
                <ShareIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <CommentIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FloatingWindow;
