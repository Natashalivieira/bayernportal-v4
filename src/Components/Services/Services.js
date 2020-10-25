import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Button2 from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SchoolIcon from '@material-ui/icons/School';
import AccessibleIcon from '@material-ui/icons/Accessible';
import WorkIcon from '@material-ui/icons/Work';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  InfoColumn3,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './Services.elements';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: theme.palette.background.paper,
      },
}))

export default function Services({}) {

  const classes = useStyles();

  return (
    <>
      <InfoSec>
        <Container>
            <InfoColumn3>
                <Heading lightText={false}>Bayern Government Services and Information</Heading>
                <Heading lightText={false}>_</Heading>
            </InfoColumn3>

          <InfoRow>
            <InfoColumn>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <DescriptionIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Documents" secondary="Find the right information to renew your ID Card, Passport, request certificates, forms and others" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <HomeWorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Living in Bayern" secondary="Moving around in Bayern? Here you get all insights about mobility, traffic and more" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="School and Education" secondary="Everything about vocational training, academic studies, internships and universities" />
                </ListItem>
            </List>
            </InfoColumn>

             <InfoColumn2>
             <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AccessibleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Disaster Relief" secondary="If you have disabilities or need emergency assistance, here you will find all the information" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Employment" secondary="Here you find everything you need to know about work, career, taxes and duties" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EmojiTransportationIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tourism and Hospitality" secondary="Looking for information about travelling in Bayern? Read more about accomodations options and more" />
                </ListItem>
            </List>
            </InfoColumn2>

            <InfoColumn2>
             <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SupervisedUserCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Family and Children" secondary="All you need to know about childcare, birth, marriage, partnership and more" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocalHospitalIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Health" secondary="Worried about your health? Here you find all about health insurance, hospitals, farmacies and more" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FlagIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Volunteering" secondary="Want to volunteer, but don't know what you need? Click here to find out about every detail." />
                </ListItem>
            </List>
            </InfoColumn2>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}