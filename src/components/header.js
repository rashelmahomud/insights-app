import Link from 'next/link';

export default function header() {
    return (
        <header className="fixed z-40 w-full navbar top-0 bg-zinc-900">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-cener py-3">
                <div className="md:flex-none flex justify-center py-4 sm:py-0 order-2 sm:order-1">
                    <input placeholder="search.." className="p-2 lg:w-80 outline-none rounded-full" type="text" />
                </div>

                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"}>
                        <h1 className="text-2xl text-white font-semibold ">insights</h1>
                        </Link>
                </div>

                <div className="flex order-3 gap-5 text-xl text-white">

                    <Link href="/"> Home</Link>
                    <Link href="/">Tags</Link>
                   
                </div>
            </div>

        </header>
    )
}
