import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, Img, BoxText } from './AcomplishmentsStyles';
import { AcomplishmentsList } from "../../constants/constants";


const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {AcomplishmentsList.map((data, i) => (
        <Box>
          <BoxText>{data.name}</BoxText>
          <Img src={data.image} />
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
