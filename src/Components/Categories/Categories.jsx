import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";
const Categories = () => {
    return (
        <div>
            <Container>
                <div className="flex flex-row items-center justify-between overflow-x-auto">
                    {
                        categories.map(item =>
                        <CategoryBox 
                        key={item.label}
                        label= {item.label}
                        icon= {item.icon}
                        >

                        </CategoryBox>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;