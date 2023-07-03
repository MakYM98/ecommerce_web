import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import data from "@/data/products.json"

const HomePage = () => {
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={{title:"Welcome to the store!"}}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={data.products.slice(0,4)}/>

            </div>
        </Container>
    )
}

export default HomePage