export default function CategoryOptions({category}) {
    let fashion = category.fashion;
    let colors =['#EF7C8E', '#EF7C8E', '#9F2B00', '#D37506', 'teal', '#EF7C8E'];
  return (
    <div className={`absolute border-2 ${category.item === 'studio' ? 'left-[30%]':'left-[10%]'} top-[5.1rem] hidden group-hover:block shadow-md py-4 px-6 option h-[70vh] ${category.item === 'studio' ? 'w-[35vw]':'w-[70vw]'} bg-white flex justify-between items-center`}>
        <div className="flex flex-wrap flex-col h-[100%] text-[14px]">
            {
                fashion.length > 0 &&
                fashion.map((wear, id)=>(
                    <div className="" key={id}>
                        <p className={`p-1 mt-2 text-[${colors[id+1]}]`}>{wear.name}</p>
                        <ul className="p-1 leading-6">
                            {
                             wear.options.length > 0 &&
                                wear.options.map((option, id)=>(
                                    <li className="text-black font-normal" key={id}>{option}</li>
                                ))   
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
