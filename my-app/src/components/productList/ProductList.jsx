import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import img1 from "../../img/1.PNG"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"
import img5 from "../../img/5.jpg"
import img6 from "../../img/6.jpg"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Breathe & enjoy. It's Sarah</h1>
        <p className="pl-desc">
          This is a portfolio that showcases my personal life x).
          Beautiful outdoor, stunning styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
          <Product key={1} img={img1} link={"https://https://github.com/itssarah.com"} />
          <Product key={2} img={img2} link={"https://https://github.com/itssarah.com"} />
          <Product key={3} img={img3} link={"https://https://github.com/itssarah.com"} />
          <Product key={4} img={img4} link={"https://https://github.com/itssarah.com"} />
          <Product key={5} img={img5} link={"https://https://github.com/itssarah.com"} />
          <Product key={6} img={img6} link={"https://https://github.com/itssarah.com"} />
        
      </div>
    </div>
  );
};

export default ProductList;
