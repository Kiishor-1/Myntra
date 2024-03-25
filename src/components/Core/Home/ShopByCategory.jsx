import OfferCard from "./OfferCard";
import { images } from "../../../data/categoryImages";
import { offers } from "../../../data/categoryAndOffers";
export default function ShopByCategory() {
    return (
        <div className="px-5 py-7">
            <h2 className="text-gray-700 text-[1.7rem] font-bold tracking-widest py-10 uppercase tracking-[0.3rem]">Shop By Category</h2>
            <div className="px-6 py-5 grid grid-cols-6 grid-flow-row gap-8">
                {
                    images.length > 0 &&
                    images.map((image, id) => (
                        <OfferCard key={id} offer={offers[id]} image={image} />
                    ))
                }
            </div>
        </div>
    )
}
