
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCards = ({item}) => {
       const {name ,image, price, recipe,_id} = item;
       const {user} =useAuth()
       const navigate = useNavigate();
       const location = useLocation();
       const axiosSecure = useAxiosSecure();
       const [,refetch] = useCart();

       const handleAddToCard = () =>{
        if(user && user.email){
          //send cart item to the database
          
          const cartItem = {
            menuId:_id,
            email:user.email,
            name,
            image,
            price
          }  
          axiosSecure.post('/carts', cartItem)
          .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} added to your cart`,
  showConfirmButton: false,
  timer: 1500
});

//refetch cart to update the cart items count
refetch()
            }
          })
        }
        else{
          Swal.fire({
  title: "You are not Logged",
  text: "Please login to add to the cart?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login!"
}).then((result) => {
  if (result.isConfirmed) {
   //send the user to the login page
   navigate('/login',{state:{from:location}})
  }
});
        }
       }
      return (
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="bg-slate-900 text-white absolute right- mr-4 mt-4 px-4">${price}</p>
  <div className="card-body flex flex-col items-center text-center">
    <h2 className="text-2xl mb-2 text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="w-full justify-center text-center">
      <button
      onClick={handleAddToCard}
       className="btn btn-outline border-0 mt-4 bg-slate-100 hover:bg-slate-900 hover:text-white border-b-4 border-orange-400">Add to cart</button>
    </div>
  </div>
</div>
      );
};

export default FoodCards;