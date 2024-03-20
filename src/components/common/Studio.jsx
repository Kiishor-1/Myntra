import studio from '../../assets/images/studio.png';
import { FaChevronRight } from "react-icons/fa";

export default function Studio() {
  return (
    <div className='absolute border-2 left-[30%] top-[5.1rem] hidden group-hover:block shadow-md py-2 px-3 h-[70vh] w-[35vw] bg-white '>
      <img src={studio} alt="Studio" />
      <button className='px-4 py-3 mt-4 mx-auto border rounded-md flex gap-2 items-center text-[1rem] text-black font-semibold'>Explore Studio <FaChevronRight/> </button>
    </div>
  )
}
