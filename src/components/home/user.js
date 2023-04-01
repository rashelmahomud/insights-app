import Image from "next/image";
import img from '../../../public/images/mylogo.png'
export default function user() {
    return (
        <div>
            <div className="flex my-2 gap-6">
                <Image src={img} className="w-12 h-12 rounded-full" alt="user" />
                <div>
                    <h2 className="font-semibold">Flying High</h2>
                    <p>CEO & Founder</p>
                </div>
            </div>
        </div>
    )
}
