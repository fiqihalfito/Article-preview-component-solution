
import Image from "next/image"
import drawers from "../public/images/drawers.jpg"

function ArticleImage() {
    return (
        <div className="bg-sky-200 max-h-56 md:max-h-min overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-r-none">
            {/* <Image src="/images/drawers.jpg" alt="article-image" width={660} height={528} /> */}
            <Image src={drawers} alt="article-image" className="md:object-cover h-full w-full" />
        </div>
    )
}

export default ArticleImage