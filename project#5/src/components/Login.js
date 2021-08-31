import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
  return (
    <div className = "login">
      <div className = "login__user">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="login__field">
        <input type="text" />
      </div>
      <div className="login__field">
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </div>
  )
}

export default Login
