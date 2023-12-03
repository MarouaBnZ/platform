import {UserInfo,UserForm,Container} from './components'

const userData= [
  {
    id:1,
    name:"Maroua",
    age:20,
    location:"Tunis",
    phone:123456,
  },

{
    id:2,
    name:"Nadia",
    age:30,
    location:"Tunis",
    phone:1234567,
  },
    {
    id:3,
    name:"Feradoues",
    age:35,
    location:"Bizerte",
    phone:123387,
  },
]
  
function App() {

  const userList =userData.map((user) => (
<UserInfo 
key={user.id}
 name={user.name}
  age={user.age} 
  location={user.location} 
  phone ={user.phone} />

      ));

      return(
      <>
        <Container>
          <UserForm/>
        </Container>
        <Container> {userList}</Container>
      
      </>
      )
   
}

export default App
