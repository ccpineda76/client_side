/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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

const AllCampusesView = (props) => {
  const { deleteCampus } = props;
  const classes = useStyles();

  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
      <div>
        <h1>There are no campuses.</h1>
        <br />
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
        <br /><br />
      </div>
    )
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div className={classes.formContainer}>
          <div key={campus.id} >
            <Link to={`/campus/${campus.id}`}>
              <h2 className={classes.formTitle} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center'}}>{campus.name}</h2>
            </Link>
            <Typography className={classes.title} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center' , textDecoration: 'underline' }}>Campus ID</Typography>
            <h3>{campus.id}</h3>
            <Typography className={classes.title} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline'  }}>Address</Typography>
            <p>{campus.address}</p>
            <Typography className={classes.title} style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e', textAlign: 'center', textDecoration: 'underline'  }}>Description</Typography>
            <p>{campus.description}</p>
            <button onClick={() => deleteCampus(campus.id)}>Delete</button>
            <hr />
          </div>
        </div>
      ))}
      <br />
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br /><br />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;