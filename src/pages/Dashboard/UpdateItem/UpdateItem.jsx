import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectonTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
     
      const { register, handleSubmit , reset} = useForm();
      const  {name,category,recipe,price,_id} = useLoaderData();
     
          const axiosPublic = useAxiosPublic();
       const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
      console.log(data)
      //image upload to imgbb and then get an url
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
          'content-type' : 'multipart/form-data'
        }
      });
      if (res.data.success){
        //now send the menu item to the server with the image url
        const menuItem = {
          name: data.name,
          category:data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image:res.data.data.display_url
        }
        //
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log('da o',menuRes.data);
        if(menuRes.data.modifiedCount > 0){
          // show success popup
          // reset();
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${data.name} is updated to the menu.`,
  showConfirmButton: false,
  timer: 1500
});

        }
      }
      console.log('paisy',res.data);
};
      return (
            <div>
                 <SectionTitle heading="Update an Item" subHeading="Refresh info" ></SectionTitle> 
                  <div className="">
                 <form onSubmit={handleSubmit(onSubmit)}>
                     
                       <div className="form-control">
                             <fieldset className="fieldset">
                   <legend className="fieldset-legend">Recipe Name*</legend>
                   <input 
                   {...register("name",{required: true})}
                   required
                   type="text"
                   defaultValue={name}
                  className="input w-full"
                  placeholder="Recipe Name" />
                  
                 </fieldset>
                       </div>
                       <div className="flex gap-6 ">
                       {/* category */}
                         <div className="form-control w-full">
                             <fieldset className="fieldset">
                   <legend className="fieldset-legend">Category Name*</legend>
                  <select defaultValue={category} {...register("category",{required: true})} className="select w-full ">
                     <option disabled={true} value="default">Select a category</option>
                    <option value="Salad">salad</option>
                      <option value="Pizza">Pizza</option>
                     <option value="Soups">Soups</option>
                      <option value="Desserts">Desserts</option>
                       <option value="Drinks">Drinks</option>
                   </select>
                  
                  
                 </fieldset>
                       </div>
                       {/* Price */}
                         <div className="form-control w-full">
                             <fieldset className="fieldset">
                   <legend className="fieldset-legend"> Price*</legend>
                     <input 
                  
                   type="number"
                   defaultValue={price}
                  className="input w-full"
                  placeholder="Price" 
                   {...register("price",{required: true})}/>
                  
                 </fieldset>
                       </div>
                      </div>
                      {/* recipe details */}
                      <div className="">
                 <fieldset className="fieldset">
                   <legend className="fieldset-legend ">Recipe details</legend>
                   <textarea defaultValue={recipe} {...register("recipe",{required: true})} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                  
                 </fieldset>
                      </div>
                 
                      <div className="w-full  ">
                       <input  {...register("image",{required: true})} type="file" className="file-input" />
                      </div>
                  
                 
                    <button className="btn">Update menu Item</button>
                     </form>
                                  </div>
            </div>
      );
};

export default UpdateItem;