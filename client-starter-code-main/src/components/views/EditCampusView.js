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

const EditCampusView = (props) => {
    const { handleSubmit, handleStudentSubmit, handleLastName, handleFirstName, handleCampus, handleAddress, handleDescription, addStudent, campus, deleteStudent, fetchCampus } = props;
    const classes = useStyles()

    if (campus.students.length === 0) {
        return (
            <div>
                <br />
                <br />
                <br />
                <div className={classes.root}>
                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Editing Campus: {campus.name}
                            </Typography>
                        </div>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
                        <p>{campus.address}</p>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
                        <p>{campus.description}</p>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Enrolled Student(s)</Typography>
                        <div>No enrolled students</div>
                        <br />
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Campus ID</Typography>
                        <p>{campus.id}</p>
                        <br />
                    </div>
                    <br />

                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Editing Campus: {campus.name}
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

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID: {campus.id}</label>
                            <br />
                            <br />
                            <Button variant="contained" color="primary" type="submit">
                                Submit Change
                            </Button>
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <br />
                <br />
                <br />
                <div className={classes.root}>
                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Editing Campus: {campus.name}
                            </Typography>
                        </div>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
                        <p>{campus.address}</p>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
                        <p>{campus.description}</p>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Enrolled Student(s)</Typography>
                        {campus.students.map(student => {
                            let name = student.firstname + " " + student.lastname;
                            return (
                                <div key={student.id}>
                                    <li>{name}</li>
                                </div>
                            );
                        }
                        )}
                        <br />
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Campus ID</Typography>
                        <p>{campus.id}</p>
                        <br />
                    </div>
                    <br />

                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Editing Campus: {campus.name}
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

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID: {campus.id}</label>

                            <br />
                            <br />
                            <Button variant="contained" color="primary" type="submit">
                                Submit Change
                            </Button>
                            <br />
                            <br />

                        </form>

                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Student(s)
                            </Typography>
                        </div>
                        {campus.students.map(student => {
                            let name = student.firstname + " " + student.lastname;
                            return (
                                <div key={student.id}>
                                    <li>{name}</li>
                                    <br />
                                    {/* Using two functions, deleting the student from the database then refreshing it after it gets deleted */}
                                    <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
                                    <br />
                                    <br />
                                </div>
                            );
                        }
                        )}
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Add Student
                            </Typography>
                        </div>
                        {/* A place if user wants to add a student  */}
                        <form style={{ textAlign: 'center' }} onSubmit={(e) => {handleStudentSubmit(e); fetchCampus(campus.id)}}>
                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
                            <input type="text" name="firstname" onChange={(e) => handleFirstName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
                            <input type="text" name="lastname" onChange={(e) => handleLastName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID: {campus.id}</label>
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
}
export default EditCampusView;