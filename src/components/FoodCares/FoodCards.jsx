
const FoodCards = ({item}) => {
       const {name ,image, price, recipe} = item
      return (
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="bg-slate-900 text-white absolute right- mr-4 mt-4 px-4">${price}</p>
  <div className="card-body text-center">
    <h2 className="text-2xl mb-2 text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="w-full justify-center">
      <button className="btn bg-primary-content w-full ">Add to card</button>
    </div>
  </div>
</div>
      );
};

export default FoodCards;