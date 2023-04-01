import Image from "next/image"
import image from '../../../public/images/ss.jpg';
import image1 from '../../../public/images/s.jpg';
export default function section2() {
    return (
        <div className="lg:mx-36 p-10 mb-20">
            <h1 className="text-4xl font-bold text-gray-700">Mastering Your Finances: <br />
                Expert Tips and Strategies to <br />
                Achieve Your Financial Goals</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

                <div>
                    <Image src={image} width={600} height={600} className="my-5" />
                    <p className="text-xl">Death is an inevitability, and while it’s a difficult topic to
                        discuss, planning for the future is essential. Life insurance
                        is an investment in the future, which can provide financial
                        security for your loved ones in the event of your untimely
                        demise.</p>
                    <button class="rounded-full text-xl text-white font-bold my-5 px-3 bg-black p-2">Read Now</button>
                </div>
                <div>
                    <Image src={image} width={600} height={600} className="my-5" />
                    <p className="text-xl">Death is an inevitability, and while it’s a difficult topic to
                        discuss, planning for the future is essential. Life insurance
                        is an investment in the future, which can provide financial
                        security for your loved ones in the event of your untimely
                        demise.</p>
                    <button class="rounded-full text-xl text-white font-bold my-5 px-3 bg-black p-2">Read Now</button>
                </div>

            </div>
        </div>
    )
}
