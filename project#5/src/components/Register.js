const Register = () => {
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
      <div className="login__field">
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </div>
  )
}

export default Register
