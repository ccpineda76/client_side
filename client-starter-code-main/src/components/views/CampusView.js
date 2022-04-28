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
  const { campus, students, deleteStudent } = props;
  console.log(campus.students)
  const classes = useStyles();
  if (campus.students.length === 0) {
    return (
      <div>
        <h1>{campus.name}</h1>
        <div className={classes.formContainer}>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
          <p>{campus.address}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
          <p>{campus.description}</p>
        </div>
        <h1>NOTE: There are currently no students enrolled in this university</h1>
      </div>
    );
  }
  // Render a single Campus view with list of its students
  else {
    return (
      <div>
        <h1>{campus.name}</h1>
        <div className={classes.formContainer}>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Address</Typography>
          <p>{campus.address}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Description</Typography>
          <p>{campus.description}</p>
          <Typography className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline' }}>Enrolled Student(s)</Typography>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <li>{name}</li>
                </Link>
                <br />
                <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
                <br />
                <br />
                {/* <button>Add Student</button><button style={{marginLeft: '10px'}}>Delete</button> */}
              </div>
            );
          })}
          <br />
        </div>
      </div>
    );
  }
};

export default CampusView;