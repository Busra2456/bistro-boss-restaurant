import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner/Banner";
import BistroBoss from "../Home/Bistro/BistroBoss";
import Category from "../Home/Category/Category";
import Featured from "../Home/Featured/Featured";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Testimonials from "../Home/Testimonials/Testimonials";

const Home = () => {
      return (
            <div>
                    <Helmet>
                          <title>Bistro Boss | Menu</title>
                          
                        </Helmet>

                  <Banner></Banner>
                  <Category></Category>
                  <BistroBoss></BistroBoss>
                  <PopularMenu></PopularMenu>
                  <Featured></Featured>
                  <Testimonials></Testimonials>

            </div>
      );
};

export default Home;