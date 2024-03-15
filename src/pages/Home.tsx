//assets
import featureCart from "../assets/feature_card.svg";
import featureMedal from "../assets/feature_medal.svg";
import featurePrice from "../assets/feature_price.svg";
import featureShield from "../assets/feature_shield.svg";
import saleBlockImg from "../assets/saleBlockImage.png";
//
import { Link } from "react-router-dom";
import { productApi } from "../services/ProductService";
import Products_slider from "../components/ProductsSlider";
import { PostCard_slider } from "../components/PostCardSlider";
import Testimonials_slider from "../components/TestimonialsSlider";
import HomeSlider from "../components/HomeSlider";

const features = [
  {
    title: "Free delivery",
    description: "To every coutry in world",
    icon: featureCart,
  },
  {
    title: "Quality guarantee",
    description: "If broken we will refund money",
    icon: featureMedal,
  },
  {
    title: "Daily offers",
    description: "various discounts",
    icon: featurePrice,
  },
  {
    title: "100% secure payment",
    description: "Your money secure",
    icon: featureShield,
  },
];

const Home = () => {
  const { data: phones } = productApi.useFetchByCategoryQuery("phone");
  const { data: watches } = productApi.useFetchByCategoryQuery("watch");
  const { data: postsCards } = productApi.useFetchPostCardsQuery("");

  return (
    <main className="main-page">
      <HomeSlider />
      <div className="features container mx-auto max-w-screen-lg">
        <div className="flex gap-14 my-32">
          {features.map((feature) => (
            <div className="flex gap-3 items-start">
              <img className="max-w-5" src={feature.icon} alt="" />
              <div>
                <p className="uppercase text-lg">{feature.title}</p>
                <p className="font-light text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Products_slider products={phones} category="mobile" />
        <Products_slider products={watches} category="watches" />
      </div>
      <div className="bg-grey-10 my-28">
        <div className="container mx-auto max-w-screen-lg flex justify-between items-center">
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
      <div className="container mx-auto max-w-screen-lg">
        <PostCard_slider postCards={postsCards} category="Latest" />
        <Testimonials_slider limit={5} />
      </div>
    </main>
  );
};

export default Home;
