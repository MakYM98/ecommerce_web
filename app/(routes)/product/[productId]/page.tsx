import Container from "@/components/ui/container"
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/gallery/info";
import data from "@/data/products.json"

interface ProductPageProps {
    params: {
        productId: string;
    }
}


const ProductPage: React.FC<ProductPageProps> = ({
    params
}) => {

    const getProduct = () => {
        var product = data.products.filter((item)=>{
            return item.id === params.productId
        })

        return product[0]
    }

    const getSimilarProducts = () => {
        var currentProduct = getProduct()

        var productList = data.products.filter((item)=>{
            return item.category.id === currentProduct.category.id &&
                    item.id !== currentProduct.id
        })

        return productList
    }

    const product = getProduct()
    const similarProducts = getSimilarProducts()

    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-5 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related Items" items={similarProducts}/>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage