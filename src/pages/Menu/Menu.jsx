import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/cover";
import menuImg from '../../assets/assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import saladImg from"../../assets/assets/menu/salad-bg.jpg"
import pizzaImg from"../../assets/assets/menu/pizza-bg.jpg"
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";

import SectionTitle from "../../components/SectonTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
       const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'popular');
        const soup = menu.filter(item => item.category === 'popular');
          const salad = menu.filter(item => item.category === 'popular');
            
             const pizza = menu.filter(item => item.category === 'popular');
             
             const offered = menu.filter(item => item.category === 'popular');
            
      return (
            <div >
                   <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
              <Cover img={menuImg} title="our menu"></Cover>
              {/* maim cover */}
              <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" ></SectionTitle>
              {/*offered menu items */}
             <MenuCategory items={offered}></MenuCategory>
             {/*dessert menu items*/}
             <MenuCategory 
             items={dessert}
             title="dessert"
             img={dessertImg}
             ></MenuCategory>

              {/* soup menu items*/}
             <MenuCategory 
             items={ soup}
             title="soup"
             img={soupImg}
             ></MenuCategory> 
             {/* salad  menu items*/}
             <MenuCategory 
             items={ salad}
             title="salad "
             img={saladImg}
             ></MenuCategory> 
             {/* pizza menu items*/}
             <MenuCategory 
             items={ pizza}
             title="pizza"
             img={pizzaImg}
             ></MenuCategory> 
             
               
            </div>
      );
};

export default Menu;