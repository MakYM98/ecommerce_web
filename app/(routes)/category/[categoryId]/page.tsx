"use client"

import data from "@/data/products.json"
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import { useEffect } from "react";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0

interface CategoryPageProps{
    params:{
        categoryId:string;
    },
    searchParams:{
        colorId:string;
        sizeId:string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    params,
    searchParams
}) => {


    const getProducts = () => {
        var products = data.products

        products = products.filter(function (el) {
            return el.category.id == params.categoryId
        })

        if(searchParams.colorId){
            products = products.filter(function (el) {
                return el.color.id == searchParams.colorId
            })
        }

        if(searchParams.sizeId){
            products = products.filter(function (el) {
                return el.size.id == searchParams.sizeId
            })
        }
        
        return products
    }

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
        <div className="bg-white">
            <Container>
                <Billboard
                    data={data.categories[params.categoryId].billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={getSizes()} colors={getColors()}/>
                        <div className="hidden lg:block">
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
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {getProducts().length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {
                                    getProducts().map((item)=>(
                                        <ProductCard
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage