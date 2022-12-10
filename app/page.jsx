"use client"

import ArticleContent from "../components/article-content"
import ArticleImage from "../components/article-image"
import AuthorOrProfil from "../components/articleAuthorOrShare"


export default function Home() {
  return (
    <div className="mx-8 bg-white font-manrope text-[13px] rounded-xl
    md:mx-0 md:flex md:max-w-[43rem]">
      <ArticleImage />
      <div>
        <ArticleContent />
        <AuthorOrProfil />
      </div>
    </div>
  )
}
