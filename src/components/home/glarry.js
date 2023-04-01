import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


export default function glarry() {



    return (
        <section className="min-h-screen bg-zinc-900 z-10">

            <div>

                {slide()}
            </div>
        </section>
    )
}

function slide() {


    return (
        <div className="text-center my-10 pt-36" >
            <div className="">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    Autoplay={500}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="lg:px-20 py-5">
                            <h className="text-4xl font-bold text-white">Mastering Your Finances: Expert tips and tricks <br /> to achieve your financial goals</h>
                            <p className="text-white my-10">File Name*|2 Minute Read</p>
                            <button class="rounded-full text-black font-bold my-5 px-3 bg-white p-2">Read Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:px-20 py-5">
                            <h className="text-4xl font-bold text-white">Rashel Your Finances: Expert tips and tricks <br /> to achieve your financial goals</h>
                            <p className="text-white my-10">File Name*|2 Minute Read</p>
                            <button class="rounded-full text-black font-bold my-5 px-3 bg-white p-2">Read Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:px-20 py-5">
                            <h className="text-4xl font-bold text-white">Towhida Your Finances: Expert tips and tricks <br /> to achieve your financial goals</h>
                            <p className="text-white my-10">File Name*|2 Minute Read</p>
                            <button class="rounded-full text-black font-bold my-5 px-3 bg-white p-2">Read Now</button>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <h1 className="text-4xl text-white">....</h1>

            </div>

        </div>
    )
}
