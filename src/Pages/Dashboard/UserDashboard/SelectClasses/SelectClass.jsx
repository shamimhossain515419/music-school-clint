
import SelectTitle from "../../../../Hooks/SelectTitle/SelectTitle";

import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCard from "../../../../Hooks/useCard/useCard";




const SelectClass = () => {
  const  [data,refetch]= useCard()
console.log(data);
     const total = data?.reduce((sum, item) => sum + item.price, 0)
     const token = localStorage.getItem('access-token')
     const handleDelete = (id) => {

          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    axios.delete(`https://music-school-server.vercel.app/cards/${id}`,{
                         headers:{
                              authorization: ` bearer ${token}`
                            }
                    })
                    .then(result=>{
                         if(result.data.deletedCount){
                              refetch()
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                                 )
                         }  
                    })
                    
                    }
          })



     }

     return (
          <div className=" w-full ">
               <SelectTitle subtitle=" Dedication to Teaching" HadersTitle="My Select Classes"></SelectTitle>

               <div className="  my-7 py-1 px-4 md:flex  justify-around items-center">

                    <h1 className=" text-2xl text-black font-medium"> Total Classes : {data && data.length} </h1>
                    <h1 className=" text-2xl text-black  font-medium">Total price : $ {total} </h1>


               </div>

               <div>
                    <div className="overflow-x-auto w-full">
                         <table className="table w-full">
                              {/* head */}
                              <thead className="bg-[#D59578] ">
                                   <tr className="bg-[#D59578] ">
                                        <th className=" px-4  text-lg text-black py-3">
                                             #
                                        </th>
                                        <th className=" px-4  text-lg text-black py-3">Image items</th>
                                        <th className=" px-4  text-lg text-black py-3">Name items</th>
                                        <th className=" px-4  text-lg text-black py-3">Price items</th>
                                        <th className=" px-4  text-lg text-black py-3">Action</th>

                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        data?.map((item, index) => (
                                             <tr key={item._id}>
                                                  <th className=" text-xl text-black font-semibold">
                                                       {index + 1}
                                                  </th>
                                                  <td>
                                                       <div className="avatar">
                                                            <div className="w-20 rounded">
                                                                 <img src={item.image} />
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>
                                                       <p className=" text-xl text-black font-semibold"> {item.name}</p>
                                                  </td>
                                                  <td  className=" text-xl text-black font-semibold"> ${item.price}</td>
                                                  <th className="">
                                                  <button onClick={() => handleDelete(item._id)} className=" bg-[#ea1919] text-white p-2 rounded">
                                                      <FaTrashAlt></FaTrashAlt></button>
                                                    <Link to={`/dashboard/payment/${item._id}`} className=" mx-7 text-xl font-medium   text-white py-1 px-5 rounded-md bg-[#D59578] "> Pay </Link>
                                                  </th>
                                             </tr>
                                        ))
                                   }


                              </tbody>



                         </table>
                    </div>
               </div>
          </div>
     );
};

export default SelectClass;