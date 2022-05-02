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
  const { student, deleteStudent } = props;
  const classes = useStyles();
  // Render a single Student view 
  if (student.campus !== null) {
    return (
      <div>
        <div className={classes.formContainer} >
          <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Student Name: </h2>
          <p>{student.firstname + " " + student.lastname}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>
            This Student is enrolled at:
          </Typography>
          <Link to={`/campus/${student.campus.id}`}>
            <p>{student.campus.name}</p>
          </Link>
          <br />
        </div>
        <br/>
        <Link to={`/students`}>
          <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
        </Link>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className={classes.formContainer} >
          <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Student Name: </h2>
          <p>{student.firstname + " " + student.lastname}</p>
          <div className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}> Campus: </div>
          <div>This student is not enrolled in a campus</div>
          <br />
        </div>
        <br/>
        <Link to={`/students`}>
          <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
        </Link>
      </div>
    );
  }
};

export default StudentView;