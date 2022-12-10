"use client"

import { useState } from "react"
import ArticleAuthor from "./article-author"
import ArticleShare from "./article-share"
import ShareButton from "./share-button"

function AuthorOrProfil() {
    const [isSharing, setSharing] = useState(false)

    function handleShare() {
        setSharing(!isSharing)
        // console.log("clicked");
    }

    return (
        <div className={`h-20 flex relative`}>
            <ArticleShare isSharing={isSharing} />
            <ArticleAuthor />
            <ShareButton onClick={handleShare} isSharing={isSharing} />
        </div>
    )
}

export default AuthorOrProfil