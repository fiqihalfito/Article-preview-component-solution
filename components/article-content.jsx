import { article } from "../constants/"

function ArticleContent() {
    return (
        <div className="px-8 pt-8 pb-4 md:pb-0">
            <h1 className="font-bold text-lg md:text-xl text-custom-veryDarkGrayishBlue mb-4">{article.title}</h1>
            <p className="text-custom-desaturatedDarkBlue ">{article.content}</p>
        </div>
    )
}

export default ArticleContent