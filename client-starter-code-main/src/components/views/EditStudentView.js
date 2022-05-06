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

const EditStudentView = (props) => {
    const { student, allStudents, handleEmail, handleGPA, handleFirstName, handleLastName, handleStudentSubmit, handleCampusID } = props
    const classes = useStyles();
    if (student.campus == null) {
        return (
            <div>
                <h1>Current Student Information</h1>
                {allStudents.map((now_student) => {
                    if (student.id === now_student.id) {
                        return (
                            <div className={classes.formContainer} >
                                <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Student Name: </h2>
                                <p>{now_student.firstname + " " + now_student.lastname}</p>
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Campus: </div>
                                <div>This student is not enrolled in a campus</div>
                                <br />
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Student Email: </div>
                                <div>{now_student.email}</div>
                                <br />
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Grade Point Average: </div>
                                <div>{now_student.gpa}</div>
                                <br />
                                <br />
                            </div>
                        )
                    }
                })}
                <h1>Student Editing Form</h1>
                <div className={classes.root}>
                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Add a Student
                            </Typography>
                        </div>
                        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleStudentSubmit(e)}>
                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
                            <input type="text" name="firstname" onChange={(e) => handleFirstName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
                            <input type="text" name="lastname" onChange={(e) => handleLastName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
                            <input type="number" name="campusId" onChange={(e) => handleCampusID(e)} />
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Current Student Information</h1>
                {allStudents.map((now_student) => {
                    if (student.id === now_student.id) {
                        return (
                            <div className={classes.formContainer} >
                                <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Student Name: </h2>
                                <p>{now_student.firstname + " " + now_student.lastname}</p>
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Campus: </div>
                                <div>{student.campus.name}</div>
                                <br />
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Student Email: </div>
                                <div>{now_student.email}</div>
                                <br />
                                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Grade Point Average: </div>
                                <div>{now_student.gpa}</div>
                                <br />
                                <br />
                            </div>
                        )
                    }
                })}
                <h1>Student Editing Form</h1>
                <div className={classes.root}>
                    <div className={classes.formContainer}>
                        <div className={classes.formTitle}>
                            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                                Add a Student
                            </Typography>
                        </div>
                        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleStudentSubmit(e)}>
                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
                            <input type="text" name="firstname" onChange={(e) => handleFirstName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
                            <input type="text" name="lastname" onChange={(e) => handleLastName(e)} />
                            <br />
                            <br />

                            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
                            <input type="number" name="campusId" onChange={(e) => handleCampusID(e)} />
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default EditStudentView;