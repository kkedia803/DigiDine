import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>{/* Card Blog */}
            <Navbar />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Card */}
                    <Link to="/create-menu" className="group relative block rounded-xl focus:outline-none" >
                        <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/90">
                            <img className="size-full absolute top-0 start-0 object-cover" src="https://img.freepik.com/free-vector/restaurant-colorful-menu-template_23-2148379706.jpg?t=st=1732530494~exp=1732534094~hmac=1700025c3f7fce1180fc6e89a49d0344d78779fa314aa385375161a8030dc18e&w=996" alt="Blog Image" />
                        </div>

                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                                    Create Menu
                                </h3>
                            </div>
                        </div>
                    </Link>
                    {/* End Card */}
                    {/* Card */}
                    <a className="group relative block rounded-xl focus:outline-none" href="#">
                        <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/90">
                            <img className="size-full absolute top-0 start-0 object-cover" src="https://img.freepik.com/free-vector/phone-scanning-qr-code-bar-background_23-2147592364.jpg?t=st=1732530672~exp=1732534272~hmac=f94b858570da0a939574da83e3f2177021cdb6d7a1fcdbe4fec4c16026c497f1&w=740" alt="Blog Image" />
                        </div>

                        <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                                    Scan Menu
                                </h3>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}</div>

    )
}

export default Menu