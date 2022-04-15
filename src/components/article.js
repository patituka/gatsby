import React from 'react'
import { Link } from 'gatsby'
import { Grid, Heading, Text, Paragraph, Divider } from 'theme-ui'

export default (props) => (
   <Link to={props.to} style={{ marginTop: '1.5em', color: 'inherit', textDecoration: 'inherit' }}>
      <Grid columns={[2, '2fr 1fr']}>
         <Heading as='h1'>{props.title}</Heading>
         <Text>{props.date}</Text>
      </Grid>
      <Paragraph variant="block">
         {props.excerpt}
      </Paragraph>
      <Divider />
   </Link>
)

