import Image from "next/image"
import fb from "../public/images/icon-facebook.svg"
import pt from "../public/images/icon-pinterest.svg"
import tw from "../public/images/icon-twitter.svg"
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}

function ArticleShare({ isSharing }) {
    return (
        <motion.div className="px-8 flex items-center gap-4 bg-custom-veryDarkGrayishBlue absolute h-full w-full md:hidden rounded-b-lg"
            animate={isSharing ? "open" : "closed"}
            variants={variants}
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

export default ArticleShare