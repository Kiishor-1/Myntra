import { brandImages } from "../../../data/categoryImages"
import BrandCard from "./BrandCard"

export default function ShopBybrand({title}) {
    return (
        <div className="px-5 py-7">
            <h2 className="text-gray-700 text-[1.7rem] font-bold tracking-widest py-10 uppercase tracking-[0.3rem]">{title}</h2>
            <div className="px-6 py-5 flex flex-wrap">
                {
                    brandImages.length > 0 &&
                    brandImages.map((image, id) => (
                        <BrandCard key={id} image={image} />
                    ))
                }
            </div>
        </div>
    )
}
