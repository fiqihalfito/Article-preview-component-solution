import Image from "next/image"
import { article } from "../constants"

function ArticleAuthor() {
    return (
        <div className="flex items-center px-8">
            <Image src={article.author.img} alt="avatar" width={40} height={40} className="rounded-full " />
            <div className="ml-4">
                <h1 className="font-bold text-custom-veryDarkGrayishBlue">{article.author.name}</h1>
                <h2 className=" text-custom-grayishBlue">{article.author.date}</h2>
            </div>
        </div>
    )
}

export default ArticleAuthor