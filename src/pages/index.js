import * as React from "react"
import { Heading } from 'theme-ui'
import Layout from '../components/layout'
import { Paragraph } from 'theme-ui'
import { Grid, Text, Divider } from 'theme-ui'

const IndexPage = () => {
  return (

    <Layout>

      <Grid columns={[2, '2fr 1fr']}>
        <Heading>Titre de l'article</Heading>
        <Text as='h3'>4 avril 2022</Text>
      </Grid>
      <Paragraph variant="block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ac est et interdum. Etiam leo metus, dignissim vitae mauris et, maximus sodales ligula. Mauris finibus consectetur lorem, vitae ultrices magna. Nam congue lorem et sagittis congue. Sed gravida est nulla, eu vestibulum dolor dictum eu. Nullam molestie vestibulum velit, sit amet cursus leo hendrerit faucibus.
      </Paragraph>
      <Divider />

      <Grid columns={[2, '2fr 1fr']}>
        <Heading>Titre de l'article</Heading>
        <Text as='h3'>4 avril 2022</Text>
      </Grid>
      <Paragraph variant="block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ac est et interdum. Etiam leo metus, dignissim vitae mauris et, maximus sodales ligula. Mauris finibus consectetur lorem, vitae ultrices magna. Nam congue lorem et sagittis congue. Sed gravida est nulla, eu vestibulum dolor dictum eu. Nullam molestie vestibulum velit, sit amet cursus leo hendrerit faucibus.
      </Paragraph>
      <Divider />

      <Grid columns={[2, '2fr 1fr']}>
        <Heading>Titre de l'article</Heading>
        <Text as='h3'>4 avril 2022</Text>
      </Grid>
      <Paragraph variant="block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ac est et interdum. Etiam leo metus, dignissim vitae mauris et, maximus sodales ligula. Mauris finibus consectetur lorem, vitae ultrices magna. Nam congue lorem et sagittis congue. Sed gravida est nulla, eu vestibulum dolor dictum eu. Nullam molestie vestibulum velit, sit amet cursus leo hendrerit faucibus.
      </Paragraph>
      <Divider />

    </Layout>
  )
}

export default IndexPage
