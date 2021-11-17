import React from 'react'
import Card from './cards/cards';
import './Classroom.css'
const Classroom = () => {
  const imageAddress = 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg';
  const title = "Lorem, ipsum  temporibus magnam";
  const notification = ['data', 'shivam', 'rajesh'];
  return (
    <div className="container">
      <div className="row ">
        <div className="col d-flex justify-content-around">
          <div className="make">
            <Card image={imageAddress} title={title} notification={notification}/>
          </div>
        </div>
        <div className="col d-flex justify-content-around">
        <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
        <div className="col d-flex justify-content-around">
        <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
        <div className="col d-flex justify-content-around"> 
          <div className="make">
          <Card image={imageAddress} title={title} notification={notification} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Classroom;