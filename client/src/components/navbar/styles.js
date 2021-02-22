import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    appBar: {
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        justifyContent: "space-between",
        margin: "30px 0",
        padding: "10px 50px",
        alignItems: "center",
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
});