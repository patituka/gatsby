import React from 'react'
import { NavLink, Flex, Text, Grid, Box } from 'theme-ui'
import Images from './images'
import { Divider } from 'theme-ui'
import * as styles from './layout.module.scss'

const LayoutLink = props => (
    <NavLink href={props.href} p={2} space={3}>
        <Text variant='nav'>{props.text}</Text>
    </NavLink>
)

const Layout = ({ children }) => {

    const firstDivRef = React.useRef();
    const secondDivRef = React.useRef();

    const handleScrollFirst = (scroll) => {
        secondDivRef.current.scrollTop = scroll.target.scrollTop * 0.2;
    };

    const handleScrollSecond = (scroll) => {
        firstDivRef.current.scrollTop = scroll.target.scrollTop * 5;
    };

    return (
        <Grid gap={4} columns={['1fr 1fr']} id={styles.scrollbar}>
            <Box>
                <Images
                    variant="side"
                    onScroll={handleScrollFirst}
                    divRef={firstDivRef}
                    style={{
                        height: '100vh',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        transform: 'scale(1, -1)'
                    }}
                />
            </Box>

            <Box style={{ marginRight: '1.5em' }}>
                <Flex as="nav">
                    <LayoutLink href="#!" text="WebZine PatYo" />
                    <LayoutLink href="#!" text="Menu" />
                </Flex>

                <Divider />

                <div
                    onScroll={handleScrollSecond}
                    ref={secondDivRef}
                    style={{
                        height: "85vh",
                        overflow: "auto",
                    }}>
                    {children}
                </div>
            </Box>
        </Grid>
    )
}

export default Layout
