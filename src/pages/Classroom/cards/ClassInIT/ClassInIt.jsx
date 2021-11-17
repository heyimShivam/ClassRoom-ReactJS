import "./classInit.css";

const ClassInIt = () => {
  const image = 'https://s35691.pcdn.co/wp-content/uploads/2016/09/iStock_87294393_LARGE.160928.jpg';
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const type = queryParams.get('type');
  //backEnd
  const Classname = "Math";
    return (
      <div className="container-fluid" style={{marginTop:`-30px`}}>
        <div className="mainClassWork">
          This is Class {id}
          <div className="classText">
          <h1><strong>{Classname}</strong></h1>
          </div>
        </div>
        <br></br>
      </div>
    )
  }
  export default ClassInIt;