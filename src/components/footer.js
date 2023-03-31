
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function footer() {
  return (
    <div className="font-bold my-10 bg-black">
      <div className='xl:container xl:mx-auto'>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-white p-10">
          <div>
            <h1 className='text-3xl'>PennyPot</h1>
            <p className="text-sm mt-5 test-gray-300">Join the revolosion and see how easy < br/> middle maks home lose</p>
          </div>

          <div>
            <h2>Company</h2>
            <p className="text-sm mt-5 test-gray-300">Contant</p>
          </div>

          <div>
            <h3>Who we help</h3>
            <ul className="text-sm mt-5 ">
              <li className='test-gray-300'>Customers</li>
              <li className='test-gray-300 my-3 '>Brokars</li>
              <li className='text-gray-300'>Lenders</li>
            </ul>

          </div>

          <div>
            <h2>Follow Us On</h2>

            <ul className='flex gap-5 mt-5'>
              <li className='border rounded-full p-2'><BsFacebook /></li>
              <li className='border rounded-full p-2'><BsInstagram /></li>
              <li className='border rounded-full p-2'><BsYoutube /></li>
              <li className='border rounded-full p-2'><BsYoutube /></li>
            </ul>
          </div>

        </div>

        <div className='p-10'>
          <hr />
          <div className='flex flex-wrap justify-between my-10'>
            <p className='text-gray-500 text-sm'>@ 2023 PennyPot | ABN 99 649 575 315 | Austoliyan Cradite Licency 536543</p>
            <ul className='text-gray-500 text-sm flex gap-5'> 
              <li>Trams & Codition</li>
              <li>Privery Police</li>
              <li>Privery</li>
              <li>Collection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
