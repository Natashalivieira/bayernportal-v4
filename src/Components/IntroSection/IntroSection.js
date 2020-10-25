import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './IntroSection.elements';

export default function IntroSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonAction,
  img,
  alt,
  imgStart,
  start
}) {
  const [open, setOpen] = React.useState(true);
  
  const preventDefault = (event) => event.preventDefault();


  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>

            <InfoColumn>
                <Heading lightText={true}>Creating an Interactive Citizen Service Experience</Heading>
                <TopLine lightTopLine={true}>Together we are bringing the government closer to the people</TopLine>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

