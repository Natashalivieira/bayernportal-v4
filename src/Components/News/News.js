import React from 'react';
// import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import News1 from '../../Images/News1.jpg';
import News2 from '../../Images/News2.jpg';
import News3 from '../../Images/News3.jpg';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn3,
  Heading,
  
} from './News.elements';

const useStyles = makeStyles((theme) => ({
    title: {
        width: '100%',
        backgroundColor: '#DAEEF9',
      },
    root: {
        width: '100%',
        maxWidth: 400,
        height: 380,
        backgroundColor: '#DAEEF9',
        padding: 10,
      },
    root2: {
        maxWidth: 345,
        height: 380,
        paddingRight: 20,
      },
}))

export default function News({}) {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <InfoSec>
        <Container>
            <InfoColumn3>
                <Heading lightText={false}>News</Heading>
                <Heading lightText={false}>_</Heading>
            </InfoColumn3>

          <InfoRow>

            <InfoColumn>
            <Card className={classes.root2}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="News1"
                height="140"
                image={News1}
                title="News1"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   12 Oct. 2020 | Medtech, Health, AI
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Online-Seminar Digital Health in Québec, Canada
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   The State of Bavaria Montreal Office, the Bavarian State Ministry of Economis Affairs, Regional Development and Energy as well as Bayern...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                View More
                </Button>
            </CardActions>
            </Card>
            </InfoColumn>

             <InfoColumn>
             <Card className={classes.root2}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="News2"
                height="140"
                image={News2}
                title="News2"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   5 Sep. 2020 | Economy, Technology, AI
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Bavarian virtual delegation at MTL: Digital Week
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    The State of Bavaria Office in Montreal, in collaboration with Bayern International, invites you to participate in this virtual Bavarian delegation...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                View More
                </Button>
            </CardActions>
            </Card>
            </InfoColumn>

            <InfoColumn>
            <Card className={classes.root2}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="News3"
                height="140"
                image={News3}
                title="News3"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   5 Sep. 2020 | Economy, Technology, AI
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Bavarian virtual delegation at MTL: Digital Week
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    The State of Bavaria Office in Montreal, in collaboration with Bayern International, invites you to participate in this virtual Bavarian delegation...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                View More
                </Button>
            </CardActions>
            </Card>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}