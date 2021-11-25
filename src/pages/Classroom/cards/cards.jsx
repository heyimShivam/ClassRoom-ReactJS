import './card.css'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="container cardClass">
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-body">
            <ol>
              {
                props.notification.map((notification) => {
                  return <li className='list' key={notification.toString()}>{notification}<span style={{ float: 'right' }}><i className="fas fa-bell bell_ico"></i></span></li>
                })
              }
            </ol>
          </div>

          <NavLink className="nav-link btn btn-primary" to={{
            pathname: "/class",
            search: "?id=1234",
            hash: `#${props.className}`,
          }} exact style={{ color: 'white' }}>
          Open Class
          </NavLink>

        </div>
      </div>
    </div>
  )
}
export default Card;