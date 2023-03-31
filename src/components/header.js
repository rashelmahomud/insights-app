import Link from 'next/link';

export default function header() {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-cener py-3">
                <div className="md:flex-none flex justify-center py-4 sm:py-0 order-2 sm:order-1">
                    <input placeholder="search.." className="p-2 lg:w-80 outline-none rounded-full" type="text" />
                </div>

                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-semibold ">insights</h1>
                        </Link>
                </div>

                <div className="flex order-3 gap-5 text-xl">

                    <Link href="/"> Home</Link>
                    <Link href="/">Tags</Link>
                   
                </div>
            </div>

        </header>
    )
}
