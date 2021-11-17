import React from 'react'
import Card from './cards/cards';
import './Classroom.css'
const Classroom = () => {
  const imageAddress = 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg';
  const title = "Mathematics (MA-102)";
  const notification = ['data', 'shivam', 'rajesh'];
  const className = "Science";
  return (
    <div className="container">
      <div className="row ">
        <div className="col d-flex justify-content-around">
          <div className="make">
            <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around">
        <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around">
        <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} className={className} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Classroom;