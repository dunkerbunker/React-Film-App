import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    movie: {
        padding: '10px',
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bold',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.04)',
        },
    },
    title: {
        color : theme.palette.text.primary,
        paddingLeft: '18px',
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },
}));
