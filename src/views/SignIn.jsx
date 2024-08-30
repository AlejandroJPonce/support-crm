import '../styles/SignIn.css'

export default function SignIn () {
  return (
  <>
    <div className='signin-form-box'>
      <span className='box-title'>Ingresar</span>
      <input className='form-input' placeholder='Email' type='email'></input>
      <input className='form-input' placeholder='Password' type='password'></input>
      <a href="/sign-up" className='form-route'>Aun no haces parte del equipo ?</a>
      <button className='login-button'>Iniciar Sesion</button>
    </div>
  </>
  )
}