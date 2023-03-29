import Link from "next/link"

export default function Navbar(){
    return (
       
        <header className="container mx-auto">
            <nav>
                <ul className="flex flex-row py-10 justify-center">
                    <li className="text-xl px-10 text-blue-400 font-bold box-border">
                        <Link href={'/'}>About</Link>
                    </li>
                    <li className="text-xl px-10 text-blue-400 font-bold">
                        <Link href={'/knowledge'}>Knowledge</Link>
                    </li>
                    <li className="text-xl px-10 text-blue-400 font-bold">
                        <Link href={'/repositories'}>Repositories</Link>
                    </li>
                    <li className="text-xl px-10 text-blue-400 font-bold">
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    
                </ul>
            </nav>
         </header>
          
          
    )
}