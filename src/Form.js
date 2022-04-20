import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Forms=()=>
{
    
    return(
        <>
      
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-lg-7 col-sm-12 col-md-10 p-3'>
                <h1>Insurance Policy</h1>
                
                    <label>Name</label>
                    <input
                    type="text"
                    placeholder='Name of the Person'
                    className="form-control"
                    />

                </div>
                <div className="col-lg-7 col-md-10 col-sm-12 p-3">
                    <label>Company Name</label>
                    <input
                    type="text"
                    placeholder='Name of the Company'
                    className="form-control"

                    />

                </div>
                <div className='col-lg-7 col-sm-12 col-md-10 p-3'>
                    <label>Contact Number</label>
                    <input
                    type="number"
                    placeholder="Mention the Number"
                    className="form-control"
                    />

                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                        <label>Mail@Id</label>
                        <input
                        type="text"
                        placeholder='Mail@ID'
                        className='form-control'
                        />

                    </div>
                    <div className='col-lg-7 col-sm-12 col-md-10 p-3'>
                        <label>Type Of Insurance</label>
                        <input
                        type="checkbox"
                        className="form-check-input ms-md-2 ms-lg-3 ms-sm-2"
                        />Personal Insurance
                        <input
                        type="checkbox"
                        className="form-check-input ms-md-2 ms-lg-3 ms-sm-2"

                        />Business Insurance

                    </div>
                    <div className='col-lg-7 col-sm-12 col-md-10'>
                        <label>Address</label>
                       <textarea className="form-control">


                       </textarea>



                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-10 p-3">
                        <label>Annual Income</label>
                        <input
                        type="number"
                        className="form-control"

                        />

                    </div>
                    <div className="row justify-content-around mt-3">
                        <div className='col-lg-7 col-md-5 col-sm-5'>
                    
                    <button className="btn btn-danger me-4">Cancel</button>
                    <button className="btn btn-success">Submit</button>
                    </div>
                    </div>

            </div>
            </div>


        
        
        



        </>
    )
}

