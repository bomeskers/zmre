module.exports = {
    mode: 'jit',
    purge: ['./index.html'],
    theme: {
        container: {
            center: true,
            maxWidth: {
                sm: '32em',
                md: '40em',
                lg: '48em',
                xl: '64em'
            }
        },
        fontFamily: {
            serif: ['Bentham', 'serif']
        },
        extend: {
            colors: {
                merino: '#F4F1DE', // Cream
                terracotta: '#E07A5F', // Red
                gunPowder: '#3D405B', // Blue
                acapulco: '#81B29A', // Green
                manhattan: '#F2CC8F' // Yellow
            }
        }
    }
};
