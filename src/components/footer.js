
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function footer() {
  return (
    <div className="text-2xl font-bold my-10 text-center bg-black">
      <div className='xl:container xl:mx-auto'>
        <div className=" grid lg:grid-cols-4 text-white p-10">
          <div>
            <h1>PennyPot</h1>
            <p className="text-sm">Join the revolosion and see how easy middle maks home lose</p>
          </div>

          <div>
            <h2>Company</h2>
            <p className="text-sm">Contant</p>
          </div>

          <div>
            <h3>Who we help</h3>
            <ul className="text-sm">
              <li>Customers</li>
              <li>Brokars</li>
              <li>Lenders</li>
            </ul>

          </div>

          <div>
            <h2>Follow Us On</h2>

            <ul className='flex'>
              <li><BsFacebook /></li>
              <li><BsInstagram /></li>
              <li><BsYoutube /></li>
              <li><BsYoutube /></li>
            </ul>
          </div>

        </div>

        <div>
          <hr />
        </div>
      </div>
      This is a footer section
    </div>
  )
}
