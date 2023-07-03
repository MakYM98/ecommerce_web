"use client"

import data from "@/data/products.json"
import Button from "@/components/ui/button"
import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"
import IconButton from "@/components/ui/icon-button"
import Filter from "./filter"

interface MobileFiltersProps {
    sizes: any[]
    colors: any[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    // const getProducts = () => {
    //     var products = data.products

    //     if(searchParams.colorId){
    //         products = products.filter(function (el) {
    //             return el.color.id == searchParams.colorId
    //         })
    //     }

    //     if(searchParams.sizeId){
    //         products = products.filter(function (el) {
    //             return el.size.id == searchParams.sizeId
    //         })
    //     }
    //     console.log(products)
    //     return products
    // }

    const getSizes = () => {
        var sizeList = data.products.map((obj) => (
            obj.size
        ))
        
        const sizes = Object.values(
            sizeList.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
        );

        return sizes
    }

    const getColors = () => {
        var colorList = data.products.map((obj) => (
            obj.color
        ))
        
        const colors = Object.values(
            colorList.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
        );

        return colors
    }

    return(
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20}/>
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>
                        <div className="p-4">
                        <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={getSizes()}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={getColors()}
                            />
                        </div>
                    </Dialog.Panel>

                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters