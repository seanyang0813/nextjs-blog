import Link from 'next/link'
export default function Nav() {
    //this is leerob's navbar setup from his site
    return (        
        <nav className="sticky-nav max-w-7xl flex items-center justify-end w-full mt-8 p-6 my-0 bg-white dark:bg-black bg-opacity-60">
            <div className="h-full">
                <Link href={`/blog`}>
                    <a className="text-black mx-6 text-2xl">Blog</a>
                </Link>
                <Link href={`/`}>
                    <a className="text-black mx-6 text-2xl">Home</a>
                </Link>
            </div>            
        </nav>
    )
}