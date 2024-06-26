"use client"

import Image from"next/image"
import {Tab} from "@headlessui/react"
import GalleryTab from "./gallery-tab"

interface GalleryProps {
    images: any[]
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    console.log(images)
    return(
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {
                        images.map((image)=>(
                            <GalleryTab key={image.id} image={image.image}/>
                        ))
                    }
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">
                {
                    images.map((image)=>(
                        <Tab.Panel key={image.id}>
                            <div className="aspect-square relative h-full w-full
                            sm:rounded-lg overflow-hidden">
                                <Image
                                    fill
                                    src={image.image}
                                    className="object-cover object-center"
                                    alt=""
                                />
                            </div>
                        </Tab.Panel>
                    ))
                }
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery