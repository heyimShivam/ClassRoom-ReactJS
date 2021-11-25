import './footer.css';

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark">
      <div className="page-footer_back"></div>
      <div>
        <div className="container">


          <div className="row py-4 d-flex align-items-center">

            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right">


              <a className="fb-ic" href="#">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>

              <a className="tw-ic" href="#">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>

              <a className="gplus-ic" href="#">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>

              <a className="li-ic" href="#">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a className="ins-ic" href="#">
                <i className="fab fa-instagram white-text"> </i>
              </a>

            </div>


          </div>


        </div>
      </div>


      <div className="container text-center text-md-left mt-5">

        <div className="row mt-3">


          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


            <h6 className="text-uppercase font-weight-bold">Company name</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur obcaecati cum velit earum numquam.</p>

          </div>



          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <i className="fas fa-home mr-3"></i>Sai, Kangra, H.P.</p>
            <p>
              <i className="fas fa-envelope mr-3"></i> <a href="mailto:shivamthalwal@gmail.com" style={{ color: '#bbb' }}>shivamthalwal@gmail.com</a></p>
            <p>
              <i className="fas fa-phone mr-3"></i><a herf="tel:+91821-960-1395">+ 91 821 960 1395</a></p>
            <p>
              <i className="fas fa-print mr-3"></i> + 91 821 960 1395</p>

          </div>

          <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Message Now</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <form>
              <fieldset className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
              </fieldset>
              <fieldset className="form-group">
                <textarea className="form-control" rows="3" id="exampleMessage" placeholder="Message"></textarea>
              </fieldset>
              <fieldset className="form-group text-xs-right">
                <button type="button" className="btn btn-secondary btn-md">Send</button>
              </fieldset>
            </form>

          </div>






        </div>


      </div>
      <div className="footer-copyright text-center py-3">
        <hr style={{ marginLeft: '45px', marginRight: '45px', background: 'white' }} />Made With Love
      </div>


    </footer>
  )
}
export default Footer;