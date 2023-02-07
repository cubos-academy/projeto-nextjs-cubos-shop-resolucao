import { ProductType } from "@/types/ProductType";
import { convertToMoney } from "@/utils/formatters";
import styles from "./Product.module.scss";

interface IProps {
  product: ProductType;
  handleSelectProduct: (product: ProductType) => void;
}

function Product({ handleSelectProduct, product }: IProps) {
  return (
    <div
      className={styles.container}
      onClick={() => handleSelectProduct(product)}
    >
      <img src={product.image} alt="product" />
      <span>{product.name}</span>

      <div className="prices">
        <span>{convertToMoney(product.oldPrice)}</span>
        <h2>{convertToMoney(product.currentPrice)}</h2>
      </div>

      <div className="installments">
        <h4>6x {convertToMoney(product.currentPrice / 6)}</h4>
        <span>Sem juros</span>
      </div>
    </div>
  );
}

export default Product;
