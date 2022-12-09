import img2 from "./img1.jpg"

import anh1 from "./anh1.jpg"
import anh2 from "./anh2.jpg"
import anh3 from "./anh3.jpg"
import anh4 from "./anh4.jpg"
import anh5 from "./anh5.jpg"

import anh6 from "./anh6.jpg"


const Gallery = () => {
    return (
        <div className="mt-4">
            <h1 className="font-bold text-5xl text-center mt-28 mb-16">
                PACKER PEN GALLERY
            </h1>
            <div className="sm:block hidden container mb-12">
                <div className="row">
                    <div className="col-3 m-auto">
                        <img src={img2} />
                        <img className="mt-3" src={anh1} />
                    </div>
                    <div className="col-6 object-cover">
                        <div className="truncate rounded-2xl">
                            <img className="w-full" src={anh6} />
                        </div>
                        <div className="truncate rounded-2xl mt-3">
                            <img className="w-full" src={anh5} />
                        </div>
                    </div>
                    <div className="col-3 m-auto">
                        <img src={anh2} />
                        <img className="mt-3 mb-3" src={anh3} />
                        <img src={anh4} />
                    </div>
                </div>
            </div>
            <div className="sm:hidden block container mb-12 ml-4 mr-4">
                <div className="row">
                    <div className="col-6 p-0">
                        <img className="pr-1 pl-1" src={img2} />
                        <img className="mt-2 pr-1 pl-1" src={anh1} />
                    </div>
                    <div className="col-6 p-0 rounded-xl overflow-hidden">
                        <img className="pl-1 pr-1 w-full h-full object-cover" src={anh6} />
                    </div>
                </div>
                <div className="row">
                    <div className=" rounded-xl overflow-hidden p-0 mt-2">
                        <img className="pl-1 pr-1 w-full" src={anh5} />
                    </div>
                </div>
                <div className="row">
                    <div className=" rounded-xl overflow-hidden p-0 mt-2">
                        <img className="pl-1 pr-1 w-full" src={anh2} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 rounded-xl overflow-hidden p-0 mt-2">
                        <img className="pl-1 pr-1 w-full" src={anh3} />
                    </div>
                    <div className="col-6 rounded-xl overflow-hidden p-0 mt-2">
                        <img className="pl-1 pr-1 h-full" src={anh4} />
                    </div>
                </div>
                {/* <div className="col-3 m-auto">
                    <img src={anh2} />
                    <img className="mt-3 mb-3" src={anh3} />
                    <img src={anh4} />
                </div> */}

            </div>
            <div className="m-auto d-flex justify-center mt-4 flex-row mb-4">
                <div className="w-4 h-4 bg-black mr-1 rounded-full">
                </div>
                <div className="w-4 h-4 bg-gray-400 rounded-full">
                </div>
            </div>
        </div>

    )
}

export default Gallery