import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import './Home.css';

//
const Banner = lazy(() => import("../components/carousel/Banner"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
//const Carousel = lazy(() => import("../components/carousel/Carousel"));
// const Support = lazy(() => import("../components/Support"));
// const CardLogin = lazy(() => import("../components/card/CardLogin"));
// const CardImage = lazy(() => import("../components/card/CardImage"));
// const CardDealsOfTheDay = lazy(() => import("../components/card/CardDealsOfTheDay"));

//classe Home view virando um componente
class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {

    //Constante pra guardar os icones de produtos vindos do data da outra pasta exportado
    //const imgsProducts = data.products;
    const iconProducts = data.iconProducts;

    // Constante pra formar um array com uma linha de 4 icones de produtos paralelos
    //const rows1 = [...Array(Math.ceil(imgsProducts.length / 4))];
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];

    // map the rows as div.row
    //Const guardando o mapeamento da const rows 
    const productRows = rows.map((row, idx) =>
      //o que faz em cada um do map, pega icon de produto
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );

    // const productRows1 = rows.map((row, idx) =>
    //   imgsProducts.slice(idx * 4, idx * 4 + 4)
    // );

    //Const Carousel Cards de Icones de produtos
    // const carouselContent = productRows.map((row, idx) => (
      
    //   // Uma div de um botão gerado pra cada mapeamento
    //   <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        
    //     {/* Linha pra definir borda de cada botao */}
    //     <div className="row g-3">


    //       {row.map((product, idx) => {
    //         const ProductImage = this.components[product.img];
    //         return (
    //           <div key={idx} className="col-md-3">
    //             <CardIcon
    //               title={product.title}
    //               text={product.text}
    //               tips={product.tips}
    //               to={product.to}
    //             >
    //               <ProductImage className={product.cssClass} />
    //             </CardIcon>
    //           </div>
    //         );
    //       })}


    //     </div>


    //   </div>

    // ));

    //Antes disso são configurações 
    return (

      
      <React.Fragment>

        <div
          className="tudo"
          alt="...">     

          {/* Carousel Grande Principal */} 
          <div className="d-flex justify-content-center" >
            <Banner className="mb-3 carouselHomeBanner" id="carouselHomeBanner" data={data.banner} />
          </div>


          {/* Div com o Titulo das bolinhas */}
          <div className="tituloIconesRedondos p-3 text-center mb-3 ">
            <h4 className="m-0"> Conheça diferentes produtos </h4>
          </div>

          {/* Container das 4 bolinhas paralelas */}
          <div className="container">
            <div className="row justify-content-center text-center ">

              <div className="col-5">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/male.webp"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h6 categoryIconText">Higiene Bucal</div>
                </Link>
              </div>

              <div className="col-5">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/female.webp"
                    className="img-fluid rounded-circle"
                    alt="..."
                    
                  />
                  <div className="text-center h6 categoryIconText">Doces e Geleias</div>
                </Link>
              </div>

              <div className="col-5">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/smartwatch.webp"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h6 categoryIconText"  >Licores e Kombuchas</div>
                </Link>
              </div>

              <div className="col-5">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/footwear.webp"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h6 categoryIconText">Cereais e Matinais</div>
                </Link>
              </div>

            </div>
          </div>

        </div> 

      </React.Fragment>
    );
  }
}

export default HomeView;
