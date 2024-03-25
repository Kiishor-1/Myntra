import Carousel from '../components/Core/Home/Carousel';
import ShopByCategory from '../components/Core/Home/ShopByCategory';
import ShopBybrand from '../components/Core/Home/ShopBybrand';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className=''>
      <Carousel/>
      <ShopBybrand title="Medal Worthy Brands To Bag"/>
      <ShopBybrand title="Grand Global Brands"/>
      <ShopByCategory/>
      <Footer/>
    </div>
  )
}
