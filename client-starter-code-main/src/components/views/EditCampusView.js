import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
    const { handleGPA, allCampuses, handleEmail, unEnroll, handleSubmit, students, handleStudentSubmit, handleLastName, handleFirstName, handleCampus, handleAddress, handleDescription, campus, deleteStudent, fetchCampus } = props;
    const classes = useStyles()
    const currentcampus = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].campusId === campus.id) {
            currentcampus.push(students[i])
        }
    }
    if (currentcampus.length === 0) {
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
                                Form for Editing Campus: {campus.name}
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
                                Add Student
                            </Typography>
                        </div>
                        {/* A place if user wants to add a student  */}
                        <form style={{ textAlign: 'center' }} onSubmit={(e) => { handleStudentSubmit(e); fetchCampus(campus.id) }}>
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

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
                            <input type="text" name="campusId" onChange={(e) => handleEmail(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
                            <input type="text" name="campusId" onChange={(e) => handleGPA(e)} />
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
                        {students.map((student) => {
                            if (student.campusId === campus.id) {
                                let name = student.firstname + " " + student.lastname;
                                return (
                                    <div key={student.id}>
                                        <Link to={`/student/${student.id}`}>
                                            <h2 style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>{name}</h2>
                                        </Link>
                                    </div>
                                );
                            }
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
                                Form for Editing Campus: {campus.name}
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
                        {students.map((student) => {
                            if (student.campusId === campus.id) {
                                let name = student.firstname + " " + student.lastname;
                                return (
                                    <div key={student.id}>
                                        <Link to={`/student/${student.id}`}>
                                            <h2 style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>{name}</h2>
                                        </Link>
                                        <button onClick={() => unEnroll(student.id)}>Remove From Campus</button>
                                        <br />
                                        <br />
                                    </div>
                                );
                            }
                        }
                        )}
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Add Student
                            </Typography>
                        </div>
                        {/* A place if user wants to add a student  */}
                        <form style={{ textAlign: 'center' }} onSubmit={(e) => { handleStudentSubmit(e); fetchCampus(campus.id) }}>
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

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
                            <input type="text" name="campusId" onChange={(e) => handleEmail(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
                            <input type="text" name="campusId" onChange={(e) => handleGPA(e)} />
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