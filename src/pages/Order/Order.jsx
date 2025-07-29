import { useState } from "react";
import orderCoverImg from "../../assets/assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";

import OrderTap from "./OrderTad/OrderTap";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
      const categories = ['salad', 'pizza','soup','dessert','drinks']
      const {category} = useParams();
      const initialIndex = categories.indexOf(category)
      const [tabIndex,setTabIndex] = useState(initialIndex);
      const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'dessert');
        const soup = menu.filter(item => item.category === 'soup');
          const salad = menu.filter(item => item.category === 'salad');
            
             const pizza = menu.filter(item => item.category === 'pizza');
             const drinks = menu.filter(item => item.category === 'drinks ');
      return (
            <div className="">
                   <Helmet>
                          <title>Bistro Boss | Order Food</title>
                          
                        </Helmet>
                 <Cover img={orderCoverImg} title="Order food"
                 ></Cover> 
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
     <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
     <Tab>Drinks</Tab>
   
  </TabList>
   {/* <TabPanel>
       <div className="grid md:grid-cols-3 gap-10 mt-6">
            {salad.map(item =><FoodCards
      key={item._id}
      item={item}
      ></FoodCards>)}
      </div> 
  </TabPanel> */}
  <TabPanel>
      <OrderTap items={salad}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap items={soup}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap items={pizza}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap items={dessert}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap items={drinks}></OrderTap>
  </TabPanel>
 
</Tabs>
            </div>
      );
};

export default Order;