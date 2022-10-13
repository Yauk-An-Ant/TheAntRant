import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <div className="h-[5%] bg-white text-black text-xl">
                <LinkButton link="/">Home</LinkButton>
            </div>
        </div>
    )
}

const LinkButton = (props) => {
    return (
        <Link href={props.link} className="m-10">
            <h1>
                {props.children}
            </h1>
        </Link>
    )
}

export default Navbar;