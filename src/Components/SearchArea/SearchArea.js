import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {
  InfoSec,

} from './SearchArea.elements';



const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    justifyContent: 'center',
    width: 430,
  },
  content2: {
    justifyContent: 'center',
    width: 590,
    marginTop: theme.spacing(4),

  },
  title: {
    width: 200,
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
    borderRightStyle: 'solid',
  },
  root2: {
    '& > *': {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      // width: '40ch',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // width: '100%',
        width: '47ch',
      },
    },
  },
  root3: {
    '& > *': {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1.5),
      marginTop: theme.spacing(1),
      // width: '40ch',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // width: '100%',
        width: '42.1ch',
      },
    },
  },

}))

export default function SearchArea({primary}) {

  const classes = useStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>

  return (
    <>
      <InfoSec>
        <Container>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.title}>
                <Typography component="h4" variant="h4" fontWeight="fontWeightBold">
                  Discover Services In Bavaria
                </Typography>
              </CardContent>
            </div>
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  I'm looking for
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  What 
                </Typography>
                <Typography>
                  <form className={classes.root2} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search sector, organisation or keyword" variant="outlined" size="small" />
                  </form>
                </Typography>
            </CardContent>
            <CardContent className={classes.content2}>
                <Typography component="h6" variant="h6">
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Where 
                </Typography>
                <Typography>
                  <form className={classes.root3} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Enter location" variant="outlined" size="small"/><Button big fontBig primary={primary}>Search</Button>
                  </form>
                </Typography>
            </CardContent>
          </Card>
        </Container>
      </InfoSec>
    </>
  );
}

