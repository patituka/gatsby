import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Image } from "theme-ui"
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = (props) => {

    const data = useStaticQuery(graphql`
        query {
            allUnsplash(sort: {fields: [created_at], order: DESC}) {
                edges {
                    node { 
                        id 
                        urls { small } 
                    }
                }
            }
        }
  `)

    const [images, setImages] = useState(data.allUnsplash.edges);

    return <div
        ref={props.divRef}
        onScroll={props.onScroll}
        id="scrollableDiv"
        style={props.style}
    >
        <InfiniteScroll
            dataLength={images.length}
            next={() => setImages([...images, ...data.allUnsplash.edges])}
            style={{ display: 'flex', flexDirection: 'column' }}
            inverse={false}
            hasMore={true}
            scrollableTarget="scrollableDiv"
        >
            {images.map(({ node, index }) => (
            <Image style={{ transform: 'rotate(180deg)'}} key={index} src={node.urls.small} />
        ))}
        </InfiniteScroll>
    </div>
}

export default Images