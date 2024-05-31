import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


import { toast } from "react-toastify";

function ContactData() {

    const baseurl = process.env.REACT_APP_BASEURL;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState([]);
    const [refresh, setRefresh] = useState(false);
  
  
    // const updateHandler = async (id) => {
    //   try {
    //     const { data } = await axios.put(
    //       `${server}/task/${id}`,
    //       {},
    //       {
    //         withCredentials: true,
    //       }
    //     );
  
    //     toast.success(data.message);
    //     setRefresh((prev) => !prev);
    //   } catch (error) {
    //     toast.error(error.response.data.message);
    //   }
    // };


    const deleteHandler = async (id) => {
      try {
        const { data } = await axios.delete(`${baseurl}/api/v1/message/${id}`, {
          withCredentials: true,
        });
  
        toast.success(data.message);
        setRefresh((prev) => !prev);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  
    
  
    useEffect(() => {
       
      axios
        .get(`${baseurl}/api/v1/message/getallcontact`, {
          withCredentials: true,
        })
        .then((res) => {
             setContact(res.data.contact);
           
        })
        .catch((e) => {
          toast.error(e.response.data.message);
      
        });
    }, [refresh]);

    

  return (
    <>

     {/* <!-- Breadcrumb Section Begin --> */}
     <section className="breadcrumb-section set-bg breadcrumb_img" data-setbg="img/breadcrumb/classNamees-breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Contact Data</h2>
                        <div className="breadcrumb-option">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span> Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* Breadcrumb Section End */}


     <div className='container mt-4'  >
     <div className='row' >
    
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            contact.length>0 ?
            contact.map((val,ind)=>
               <tr key={ind} >
                <th>{ind+1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.message.slice(0,50)}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>deleteHandler(val._id)} >Delete</button>
                  
                </td>

              </tr>

             )
             :
             <tr><th colSpan={6} className='text-center text-danger'>No Data</th></tr>
            
          }


        </tbody>
      </table>
      </div>
      </div>
    
    
    </>
  )
}

export default ContactData