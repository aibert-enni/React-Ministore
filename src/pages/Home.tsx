//assets
import saleBlockImg from "../assets/saleBlockImage.png";

import { Link } from "react-router-dom";
import { appApi } from "../services/ApiService";
import Products_slider from "../components/product/ProductsSlider";
import { PostCard_slider } from "../components/post/PostCardSlider";
import Testimonials_slider from "../components/TestimonialsSlider";
import HomeSlider from "../components/home/HomeSlider";
import Features from "../components/Features";



const Home = () => {
  const { data: phones } = appApi.useFetchByCategoryQuery('phone');
  const { data: watches } = appApi.useFetchByCategoryQuery("watch");
  const { data: postsCards } = appApi.useFetchPostCardsQuery("");

  return (
    <main className="main-page">
      <HomeSlider />
      <div className="container-lg">
        <Features />
        <Products_slider products={phones} category="mobile" />
        <Products_slider products={watches} category="watches" />
      </div>
      <div className="bg-grey-10 my-28">
        <div className="container-lg flex justify-between items-center">
          <div className="">
            <p className="uppercase font-light text-3xl">- 10% off</p>
            <p className="font-light text-6xl uppercase mb-14">New Year Sale</p>
            <Link
              className="uppercase font-medium bg-black-1 px-12 py-4 text-white"
              to="shop"
            >
              shop sale
            </Link>
          </div>
          <img
            className="max-w-[500px]"
            src={saleBlockImg}
            alt="left slider arrow"
          />
        </div>
      </div>
      <div className="container-lg">
        <PostCard_slider postCards={postsCards} category="Latest" />
        <Testimonials_slider limit={5} />
      </div>
    </main>
  );
};

export default Home;
