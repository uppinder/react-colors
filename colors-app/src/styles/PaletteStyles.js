export default {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        height: '50%',
        width: '20%',
        position: 'relative',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        backgroundColor: 'black',
        '& a': {
            height: '30px',
            width: '100px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none', 
            background: 'rgb(255, 255, 255, 0.3)',
            lineHeight: '30px',
            fontSize: '1rem',
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none'
        }
    }
};
