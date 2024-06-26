import Image from "next/image"
import {Tab} from "@headlessui/react"

import { cn } from "@/lib/utils"

interface GalleryTabProps {
    image: any
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return(
        <Tab className="relative flex aspect-square cursor-point 
        items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square
                    inset-0 overflow-hidden rounded-md">
                        <Image 
                            fill
                            src={image}
                            alt=""
                            className="object-cover object-center"
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black":"ring-transparent"
                    )}/>
                </div>
            )}
        </Tab>
    )
}

export default GalleryTab