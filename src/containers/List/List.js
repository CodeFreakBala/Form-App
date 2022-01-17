import React, { useEffect, useState,useContext } from 'react';
import Card from '../../components/UI/Card/Card';
import classes  from './List.module.scss'


function ListComponent(props) {

  const [formData,setFormData] = useState(null)

  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("form_details"));
    setFormData(formData)
    // console.log(formData)
  },[])
 
  return (
      <div>
      <div className="container content-space">
        <div className="row justify-content-center ">
          <div className="col-lg-4"> 
            {formData ?
              <Card>
                <div>
                  Form Name: <span>{formData.form_name}</span>
                </div>
                <div>
                  Created At: <span>{formData.createdAt}</span>
                </div>
                <div>
                  Form Slug: <span>{formData.formSlug}</span>
                </div>
              </Card> :
              <Card><p className='text-center'>No data found!</p></Card>
            }
          </div>
          </div>
        </div>
      </div>
  );
}

export default ListComponent;
