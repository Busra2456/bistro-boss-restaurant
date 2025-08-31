import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectonTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
       const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
      console.log(data)
};
      return (
            <div className="text-4xl ">
                 <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
                 <div className="">
<form onSubmit={handleSubmit(onSubmit)}>
    
      <div className="form-control">
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Recipe Name*</legend>
  <input 
  {...register("name",{required: true})}
  required
  type="text"
 className="input w-full"
 placeholder="Recipe Name" />
 
</fieldset>
      </div>
      <div className="flex gap-6 ">
      {/* category */}
        <div className="form-control w-full">
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Category Name*</legend>
 <select {...register("category",{required: true})} className="select w-full ">
    <option disabled={true}>Select a category</option>
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
  <textarea  {...register("recipe",{required: true})} className="textarea h-24 w-full" placeholder="Bio"></textarea>
 
</fieldset>
     </div>

     <div className="w-full  ">
      <input  {...register("image",{required: true})} type="file" className="file-input" />
     </div>
 

   <button className="btn">Add Item <FaUtensils></FaUtensils></button>
    </form>
                 </div>
            </div>
      );
};

export default AddItems;