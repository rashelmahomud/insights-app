import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
export default function header() {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "HOME", link: "/" },
        { name: "TAGES", link: "/" },

    ]
    return (
        <div className='w-full z-50 fixed z-45 top-0 left-0 bg-zinc-900'>
            <div className='lg:flex items-center justify-between py-4 lg:px-10 px-10'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white gap-3'>
                    <span className='text-3xl text-indigo-600'><i class="fa-solid fa-headphones"></i></span>
                    Designer
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-5 cursor-pointer lg:hidden'>

                    {
                        open ? <AiFillDelete /> : <AiOutlineMenu />
                    }

                </div>

                <ul className={`lg:flex md:items-center md:pb-3 pb-12 absolute lg:static text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-18 opacity-100" : "top-[-490px] lg:opacity-100 opacity-0"}`}>

                    {
                        links.map((link) => (

                            <li key={link.name} className='lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400 '>{link.name} </li>
                        ))
                    }

                </ul>


            </div>

        </div>
    )
}
