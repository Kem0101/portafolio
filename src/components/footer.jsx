export default function Footer(){
    return (
        <div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="flex flex-row items-center  justify-between px-5">
                <p ><span>©  </span><span >2023</span><span> </span><span>Personal</span><span> - </span><span>Reservados todos los derechos..</span></p>
                <div className="flex flex-row px-5">
                    <a href="#" className=" px-2"> <img src="linkedin.png" alt=""  className=" w-8"/> </a>
                    <a href="#" className=" px-2"> <img src="github.png" alt="" className=" w-8"/> </a>
                    <a href="#" className=" px-2"> <img src="gorjeo.png" alt="" className=" w-8"/> </a>
                    <a href="#" > <img src="instagram.png" alt="" className=" w-8"/> </a>
                </div>
                
            </div>
          

            
        </div>
    )
}