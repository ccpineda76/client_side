/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
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

const AllStudentsView = (props) => {
  const { students, deleteStudent, editStudent } = props;
  // If there is no student, display a message
  const classes = useStyles();
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>
      <div className={classes.formContainer}>
        {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          // let campusname  = student.campus.name;
          // console.log(campusname);
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>{name}</h2>
              </Link>
              {/* <Typography className={classes.title} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>Enrolled at {campusname}</Typography> */}
              <br />
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
              <br />
              <br />
            </div>
          );
        }
        )}
      </div>
      <br />
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br /><br />
    </div>
  );
};


export default AllStudentsView;