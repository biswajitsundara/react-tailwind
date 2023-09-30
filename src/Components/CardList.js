import { products } from "../data/mock";

const CardList = () => {
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.key}>
          <div className="m-4 p-4 w-[250px] h-[200px] border border-solid rounded-lg shadow-lg hover:bg-teal-300 cursor-pointer">
            <h1 className="text-xl font-bold p-2">{product.name}</h1>
            <h3 className="p-2">{product.brand}</h3>
            <h3 className="p-2">{product.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
