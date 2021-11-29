import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
    return (
        <Layout pageTitle="Homepage">
           <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="A Highland Coo"
                src="../images/coo.jpg"
            />
        </Layout>
    )
}

export default IndexPage
