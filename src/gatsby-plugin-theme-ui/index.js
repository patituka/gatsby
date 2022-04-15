

const theme = {
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: 'Plus Jakarta Sans, sans-serif',
        heading: 'Rubik',
        monospace: 'Menlo, monospace'
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
        semibold: 600,
    },
    text: {
        default: {
            color: 'text',
            fontSize: 3,
        },
        nav: {
            textTransform: 'uppercase',
            fontFamily: 'heading',
            fontWeight: 'heading',
            fontSize: 12,

        },
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        block: {
            variant: 'paragraph',
            my: 2,
            textAlign: 'justify',
            textAlignLast: 'start',
            textJustify: 'auto',
        },
    },
    links: {
        bold: {
            fontWeight: 'bold',
        },
        nav: {
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
        }
    },

    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6'
    },
    images: {
        side: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body'
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
            textAlign: 'justify'
        },
        a: {
            color: 'primary'
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        img: {
            maxWidth: '100%'
        },
        hr: {
            marginBottom: '2em'
        }
    }
}

export default theme