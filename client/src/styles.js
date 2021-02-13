import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        justifyContent: "center",
        margin: "30px 0",
        alignItems: "center",
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down("xs")]:{
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}))