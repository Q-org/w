import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@docusaurus/Link';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




export default function Producte(props) {

    // console.log(props.id)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //props = { "url": "/race", "key": "ifa-1", "avator": "综", "title": "财务会计 - 综合", "type": "综合实训", "subheader": "585任务", "content": "凭证类,发票类,审计类,成本类,报表类,行政类,账簿类,费用类,资产类,辅助表,银行类", "tt1": "单位", "tg1": "东方家具 , 中行 , 鑫隆家具 , 明松电器 , 三友家电 , 艾丽制衣 , 丰源公司" }


    const { url, id, avator, title, subheader, content, tt1, tg1 } = props




    return (
        <div>
            <Card key={id} sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {avator}
                        </Avatar>
                    }
                    action={0 ?
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        : null
                    }
                    title={title}
                    subheader={subheader}
                />
                {0 ? <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                /> : null}
                {1 ?
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {content}.
                        </Typography>
                    </CardContent>
                    : null}
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Link to={url}>
                            <ShareIcon />
                        </Link>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={e => handleExpandClick(e)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {tt1 ? <Typography paragraph>{tt1}</Typography> : null}
                        <Typography paragraph>
                            {tg1}.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </div>);
}
