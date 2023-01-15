import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development,data science and data engineering world.
      From project Iinitialization To Deployment
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web2/Web3 Tech</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js,Next.js,Django,Node.js
            Typescript,Solidity,Web3,
            Wordpress and Drupal
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL,Puthon,Machine Learning,Deep Learning,Advanced Excel,Tableau,R
            SAS
and Qliksense
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pyspark,AWS,GCP,ETL,Data Warehousing,Airflow,Hadoop,Kafka,
            Snowflake,Shell Scripting and Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
