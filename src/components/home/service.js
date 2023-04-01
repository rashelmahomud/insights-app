import Image from "next/image"
import imgs from '../../../public/images/se.jpg';
import User from "./user";
export default function service() {


    return (
        <div>
            <h1 className="text-center text-4xl font-semibold">Most Popular</h1>
            <div className="lg:mx-36 p-10 mb-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </div>

    )
}


function Post() {
    return (
        <div>
            <Image src={imgs} alt="" />
            <div>
                <p className="text-sm"> <span className="text-red-500">Business-Travel</span> <span>10-April-2023</span></p>
                <h1 className="text-2xl font-semibold mb-3">Your Most Customers Are Ours gerested Sourch of learning</h1>
                <p className="text-sm">The key to your success on Fiverr is the brand you build for yourself through your Fiverr reputation. We gathered some tips and resources to help you become a</p>
                <User />
            </div>
        </div>
    )
}