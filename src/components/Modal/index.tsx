import { ProductType } from "@/types/ProductType";
import { convertToMoney } from "@/utils/formatters";
import styles from "./Modal.module.scss";

interface IProps {
  open: boolean;
  product: ProductType;
  handleClose: () => void;
}

function Modal({ open, handleClose, product }: IProps) {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <img
              src="/close-icon.svg"
              alt="close"
              className={styles.close}
              onClick={() => handleClose()}
            />
            <div className={styles["modal-body"]}>
              <img
                src={product.image}
                alt="product"
                className={styles["product-image"]}
              />
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <div className={styles["container-buy"]}>
                <button className="btn--green">Comprar</button>
                <div className={styles["container-prices"]}>
                  <div className="prices">
                    <span>{convertToMoney(product.oldPrice)}</span>
                    <h2>{convertToMoney(product.currentPrice)}</h2>
                  </div>

                  <div className="installments">
                    <h4>6x {convertToMoney(product.currentPrice / 6)}</h4>
                    <span>Sem juros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
