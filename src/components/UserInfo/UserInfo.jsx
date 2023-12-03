import styles from './styles.module.css';

const {userInfo}=styles

const UserInfo =(  {name,age,location,phone}) => {
  return (
  <div className={userInfo}>
  {
   <ul>

  <li>Name :{name}</li>
  <li>Age : {age}</li>
  <li>Location :{location}</li>
  <li>Phone : {phone}</li>
  </ul> 
  }
  </div>
  )
}

// UserInfo.propTypes = {
//   name:PropTypes.string,
//   age:PropTypes.string,
//   location:PropTypes.string,
//   phone: PropTypes.string
  
//   };

export default UserInfo;