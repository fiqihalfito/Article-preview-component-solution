"use client"

import Image from "next/image"
import fb from "../public/images/icon-facebook.svg"
import pt from "../public/images/icon-pinterest.svg"
import tw from "../public/images/icon-twitter.svg"
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, y: 0, x: "-50%" },
    closed: { opacity: 0, y: 10, x: "-50%" },
    // -translate-x-1/2 is replaced by (x: "-50%")
}

function TooltipShare({ isSharing }) {
    return (
        <motion.div
            initial={false}
            animate={isSharing ? "open" : "closed"}
            variants={variants}
            className="px-8 hidden md:flex items-center gap-4 bg-custom-veryDarkGrayishBlue absolute h-auto w-auto py-4 rounded-lg -top-2/3 left-1/2
            select-none
        after:h-4
        after:w-4
        after:bg-inherit
        after:absolute
        after:bottom-0
        after:left-1/2
        after:-translate-x-1/2
        after:translate-y-1/2
        after:rotate-45
        "

        >
            <span className="text-custom-grayishBlue tracking-[.5rem] font-bold">SHARE</span>
            <div>
                <Image src={fb} alt="fb" className="max-w-none" />
            </div>
            <div>
                <Image src={tw} alt="tw" className="max-w-none" />
            </div>
            <div>
                <Image src={pt} alt="pt" className="max-w-none" />
            </div>
        </motion.div>
    )
}

export default TooltipShare