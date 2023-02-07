import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import Product from "@/components/Product";
import styles from "@/styles/Home.module.scss";
import { ProductType } from "@/types/ProductType";
import { useState } from "react";

interface IProps {
  shoes: ProductType[];
}

export default function Home({ shoes }: IProps) {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductType>({
    id: 0,
    name: "",
    image: "",
    description: "",
    oldPrice: 0,
    currentPrice: 0,
  });

  function handleSelectProduct(product: ProductType): void {
    setCurrentProduct(product);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Layout>
      <>
        <div className={styles["container-shoes"]}>
          {shoes.map((shoe) => (
            <Product
              handleSelectProduct={handleSelectProduct}
              key={shoe.id}
              product={shoe}
            />
          ))}
        </div>
        <Modal open={open} handleClose={handleClose} product={currentProduct} />
      </>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api-contacts.pedagogico.cubos.academy/shoes"
  );

  const data = await response.json();

  return {
    props: {
      shoes: [...data],
    },
  };
};
