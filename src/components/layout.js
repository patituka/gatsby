import React from 'react'
import { NavLink, Flex, Text, Grid, Box } from 'theme-ui'
import Images from './images'
import { Divider } from 'theme-ui'

const LayoutLink = props => (
    <NavLink href={props.href} p={2} space={3}>
        <Text variant='nav'>{props.text}</Text>
    </NavLink>
)

const Layout = ({ children }) => {

    const firstDivRef = React.useRef();
    const secondDivRef = React.useRef();

    const handleScrollFirst = (scroll) => {
        secondDivRef.current.scrollTop = scroll.target.scrollTop*0.2;
    };

    const handleScrollSecond = (scroll) => {
        firstDivRef.current.scrollTop = scroll.target.scrollTop*5;
    };

    return (
        <Grid gap={4} columns={['1fr 1fr']}>
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

            <Box>
                <Flex as="nav">
                    <LayoutLink href="#!" text="Home" />
                    <LayoutLink href="#!" text="Blog" />
                    <LayoutLink href="#!" text="Projets" />
                </Flex>

                <Divider />

                <div 
                    onScroll={handleScrollSecond}
                    ref={secondDivRef}>
                    {children}
                </div>
            </Box>
        </Grid>
    )
}

export default Layout
