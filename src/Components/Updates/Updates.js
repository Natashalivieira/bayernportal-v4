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

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn3,
  
} from './Updates.elements';

const useStyles = makeStyles((theme) => ({
    title: {
        width: '100%',
        backgroundColor: '#DAEEF9',
      },
    root: {
        width: '100%',
        maxWidth: 400,
        height: 400,
        backgroundColor: '#DAEEF9',
        padding: 10,
      },
    root2: {
        maxWidth: 345,
        height: 400,
        paddingRight: 20,
      },
}))

export default function Updates({}) {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <InfoSec>
        <Container>
            
          <InfoRow>

            <InfoColumn>
            <Card className={classes.root2}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="News1"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="News1"
                />
                <CardContent>
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
                image="/static/images/cards/contemplative-reptile.jpg"
                title="News2"
                />
                <CardContent>
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
                <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
                >
                <ListItem >
                <Typography gutterBottom variant="h6" component="h3">Coronavirus (COVID-19) Updates</Typography>
                </ListItem>
                <ListItem >
                    <Link href="#" onClick={preventDefault}>Coronavirus (COVID-19): Guidance and Support</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" onClick={preventDefault}>The Federal government's Corona Warning App</Link>
                </ListItem>
                <ListItem >
                    <Link href="#" onClick={preventDefault}>Travel Advice: Coronavirus (COVID-19) Report Case</Link>
                </ListItem>  
                <ListItem >
                    <Link href="#" onClick={preventDefault}>Coronavirus (COVID-19): Guidance and Support</Link>
                </ListItem>
                <ListItem>
                    <Link href="#" onClick={preventDefault}>The Federal government's Corona Warning App</Link>
                </ListItem>
                <ListItem >
                    <Link href="#" onClick={preventDefault}>Travel Advice: Coronavirus (COVID-19) Report Case</Link>
                </ListItem>       
                </List>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}