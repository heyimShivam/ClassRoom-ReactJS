import './card.css'
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
                          return <li className='list'>{notification}<span style={{ float: 'right' }}><i class="fas fa-bell bell_ico"></i></span></li>
                        })
                    }
                    </ol>
                    </div>
             <a href="#" className="btn btn-primary">Open</a>
           </div>
         </div>         
      </div>
    )
  }
  export default Card;