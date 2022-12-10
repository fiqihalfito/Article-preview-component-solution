"use client"

import IconShare from "../public/images/icon-share"
import TooltipShare from "./tooltip-share"

function ShareButton(props) {

    const bgShareButton = props.isSharing ? "bg-custom-grayishBlue md:bg-custom-desaturatedDarkBlue" : "bg-custom-lightGrayishBlue"
    // const colorShareButton = "fill-white"

    return (
        <div className="flex justify-end items-center ml-auto mr-8 relative cursor-pointer" onClick={props.onClick}>

            <div className={`w-[30px] h-[30px] rounded-full flex justify-center items-center ${bgShareButton}`}>
                <TooltipShare isSharing={props.isSharing} />
                <IconShare isSharing={props.isSharing} />
            </div>
        </div>
    )
}

export default ShareButton