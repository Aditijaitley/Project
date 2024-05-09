function Process() {
    return ( 
        <>

  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        
        <h1 className="mb-5" style={{marginLeft:300,marginRight:300}}>3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="position-relative border  pt-5 pb-4 px-4" style={{border:"2 solid red"}}>
            <div
              className="d-inline-flex align-items-center justify-content-center  rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 ,backgroundColor:"#db4900"}}
            >
              <i className="fa fa-globe fa-3x text-white" style={{fontSize:80}}/>
            </div>
            <h5 className="mt-4">Choose A Destination</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
            are you looking for a beach vacation, an adventurous trip, a cultural experience
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="position-relative border  pt-5 pb-4 px-4" style={{border:"purple"}}>
            <div
              className="d-inline-flex align-items-center justify-content-center  rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 ,backgroundColor:"#db4900" }}
            >
              <i className="fa fa-dollar-sign fa-3x text-white"style={{fontSize:80}} />
            </div>
            <h5 className="mt-4">Select a Package</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Choose a package according to destination , duration ,interests and budget
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="position-relative border border-red pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 ,backgroundColor:"#db4900"}}
            >
              <i className="fa fa-plane fa-3x text-white" style={{fontSize:80}}/>
            </div>
            <h5 className="mt-4">Pay Online</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Pay Online by  credit card , debit card or atm card
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>





</>

      );
}

export default Process ;