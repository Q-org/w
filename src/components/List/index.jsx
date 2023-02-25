import React, { Component } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PubSub from 'pubsub-js'

export default class Lists extends Component {
  state = {
    users: [],
    isFirst: true,
    计数器: 0,
    isLoading: false,
    err: null,
  }


  componentDidMount() {
    PubSub.subscribe('MY TOPIC', (msg, data) => {
      this.setState(data)
    });
  }

  render() {
    const { items: users } = this.state
    
    if (!users || users.length === 0) return ''
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

        {users.map(user => <div key={user.id}>
          <ListItem alignItems="flex-start" >
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={user.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={user.login}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>)}

        <ListItem alignItems="flex-start" key="88">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>


      </List >
    );
  }
}
