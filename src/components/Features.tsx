import featureCart from "../assets/feature_card.svg";
import featureMedal from "../assets/feature_medal.svg";
import featurePrice from "../assets/feature_price.svg";
import featureShield from "../assets/feature_shield.svg";

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

const Features = () => {
    return (
        <div className="flex gap-14 my-32">
            {features.map((feature) => (
                <div className="flex gap-3 items-start">
                    <img className="max-w-5" src={feature.icon} alt="" />
                    <div>
                        <p className="uppercase text-lg font-jost">{feature.title}</p>
                        <p className="font-light text-base font-lato">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features