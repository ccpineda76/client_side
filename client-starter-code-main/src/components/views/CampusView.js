/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

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

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteStudent, students } = props;
  const classes = useStyles();
  const currentcampus = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].campusId == campus.id) {
      currentcampus.push(students[i])
    }
  }

  if (currentcampus.length == 0) { //if the campus list is empty, give a message
    return (
      <div>
        <h1>{campus.name}</h1>
        <div className={classes.formContainer}>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
          <p>{campus.address}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
          <p>{campus.description}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>There are currently no enrolled student(s)</Typography>
        </div>
        <Link to={`/editcampus/${campus.id}`}>
          <button>Edit Campus</button>
        </Link>
      </div>
    );
  }
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <div className={classes.formContainer}>
        <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
        <p>{campus.address}</p>
        <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
        <p>{campus.description}</p>
        <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Enrolled Student(s)</Typography>
        {students.map((student) => {
          if (student.campusId === campus.id) {
            let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <h2 style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' }}>{name}</h2>
                </Link>
                <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
                <br />
                <br />
              </div>
            );
          }
          else if (students.length == 0) {
            return (<div>Something</div>);
          }
        }
        )}
        <br />
        <Link to={`/editcampus/${campus.id}`}>
          <button>Edit Campus</button>
        </Link>
      </div>
    </div>
  );
};

export default CampusView;