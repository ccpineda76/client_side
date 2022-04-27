import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    formContainer: {
        width: '500px',
        backgroundColor: '#f0f0f5',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customizeAppBar: {
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    formTitle: {
        backgroundColor: '#c5c8d6',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px 5px 0px 0px',
        padding: '3px'
    },
}));

const NewCampusView = (props) => {
    const { handleChange, handleSubmit, handleCampus, handleAddress, handleDescription, handleId } = props;
    const classes = useStyles()

    return (
        <div>
            <h1>New Student</h1>

            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <div className={classes.formTitle}>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                            Add a Campus
                        </Typography>
                    </div>
                    <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Name: </label>
                        <input type="text" name="firstname" onChange={(e) => handleCampus(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
                        <input type="text" name="lastname" onChange={(e) => handleAddress(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                        <input type="text" name="campusId" onChange={(e) => handleDescription(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID number: </label>
                        <input type="text" name="campusId" onChange={(e) => handleId(e)} />
                        <br />
                        <br />

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewCampusView;