import '../styles/SignUp.css'

export default function SignUp () {
  return (
  <>
    <div className='signin-form-box'>
      <span className='box-title'>Ingresar</span>
      <input className='form-input' placeholder='Email'></input>
      <input className='form-input' placeholder='Password'></input>
      <a href="/" className='form-route'>Ir a iniciar sesion</a>
      <button className='login-button'>Registrarme</button>
    </div>
  </>
  )
}