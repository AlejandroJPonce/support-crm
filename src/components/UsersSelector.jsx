import "./componentsStyles/UsersSelector.css";

export default function UsersSelector() {
  return (
    <>
      <div className="container">
        <div className="dropdown">
          <div className="select">
            <span>Select Gender</span>
            <i className="fa fa-chevron-left"></i>
          </div>
          <input type="hidden" name="gender" />
          <ul className="dropdown-menu">
            <li id="male">Male</li>
            <li id="female">Female</li>
          </ul>
        </div>

        <span className="msg"></span>
      </div>
    </>
  );
}
