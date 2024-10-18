import React from 'react'

function Homepage() {
  return (
    <>
      <div className="container-fluid bg-light w-100 h-100 p-0">
        <div className="row h-100 m-0">
          <div className="left col-2 bg-dark m-0 p-3">
            <hr className='mt-3 w-100 bg-light border-1' />
            <h6 className='text-light'>Connected</h6>
            <div className="users d-flex align-items-start justify-content-between h-75" style={{ flexWrap: 'wrap' }}>
              <div className="user mt-3">
                <h6 className="name p-3 text-light me-2  bg-primary" style={{ width: 'fit-content', borderRadius: '10px' }}>RP</h6>
                <h6 className="name text-light mt-1" style={{ width: 'fit-content', borderRadius: '10px' }}>Ravi P</h6>
              </div>
              <div className="user mt-3">
                <h6 className="name p-3 text-light me-2  bg-primary" style={{ width: 'fit-content', borderRadius: '10px' }}>RP</h6>
                <h6 className="name text-light mt-1" style={{ width: 'fit-content', borderRadius: '10px' }}>Ravi P</h6>
              </div>
              <div className="user mt-3">
                <h6 className="name p-3 text-light me-2  bg-primary" style={{ width: 'fit-content', borderRadius: '10px' }}>RP</h6>
                <h6 className="name text-light mt-1" style={{ width: 'fit-content', borderRadius: '10px' }}>Ravi P</h6>
              </div>
              <div className="user mt-3">
                <h6 className="name p-3 text-light me-2  bg-primary" style={{ width: 'fit-content', borderRadius: '10px' }}>RP</h6>
                <h6 className="name text-light mt-1" style={{ width: 'fit-content', borderRadius: '10px' }}>Ravi P</h6>
              </div>
            </div>
            <div className='mt-5'>
              <button className='btn-primary text-dark bg-light col-12  fs-5 p-1 mb-3'><b>Copy ROOM ID</b></button>
              <button className='btn text-light fs-5 col-12 p-1 mb-3'> <b>Leave</b></button>
            </div>
          </div>
          <div className="left col-10 bg-info"></div>
        </div>
      </div>
    </>
  )
}

export default Homepage
