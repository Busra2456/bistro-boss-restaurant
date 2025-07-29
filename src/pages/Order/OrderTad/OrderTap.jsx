import FoodCards from "../../../components/FoodCares/FoodCards";

const OrderTap = ({items}) => {
      return (
             <div className="grid md:grid-cols-3 gap-10 mt-6">
            {items.map(item =><FoodCards
      key={item._id}
      item={item}
      ></FoodCards>)}
      </div>
      );
};

export default OrderTap;