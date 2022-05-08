/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
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

const StudentView = (props) => {
  const { student, pupil, deletion, allStudents} = props;
  const classes = useStyles();
  let mailEval = "Student email was never provided";
  let gradeEval = "Student GPA was never provided";


  if(student.gpa !== null)
  {
    gradeEval = student.gpa;
  }
  if(student.email !== null)
  {
    mailEval = student.email;
  }


  if (student.campus == null) {
    return (
      <div>
        <h1>{pupil}</h1>
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
                <div>{mailEval}</div>
                <br />
                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Grade Point Average: </div>
                <div>{gradeEval}</div>
                <br />
                <br />
                <button onClick={() => deletion(now_student.id)}>Delete Student</button>
                <Link to={`/editstudent/${now_student.id}`}>
                  <button>Edit Student</button>
                </Link>
              </div>
            )
          }
        })}
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>{pupil}</h1>
        {allStudents.map((now_student) => {
          if (student.id === now_student.id) {
            return (
              <div className={classes.formContainer} >
                <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Student Name: </h2>
                <p>{now_student.firstname + " " + now_student.lastname}</p>
                <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>
                  This Student is enrolled at:
                </Typography>
                <Link to={`/campus/${student.campus.id}`}>
                  <p>{student.campus.name}</p>
                </Link>
                <br />
                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Campus ID: </div>
                <div>{student.campus.id}</div>
                <br />
                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Student Email: </div>
                <div>{mailEval}</div>
                <br />
                <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Grade Point Average: </div>
                <div>{gradeEval}</div>
                <br />
                <br />
                <button onClick={() => deletion(now_student.id)}>Delete Student</button>
                <Link to={`/editstudent/${now_student.id}`}>
                  <button>Edit Student</button>
                </Link>
              </div>
            )
          }
        })}
      </div>
    );
  }
};

export default StudentView;