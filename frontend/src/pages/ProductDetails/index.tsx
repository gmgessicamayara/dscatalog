import { ReactComponent as ArrowIcon}  from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

const ProductDetails = () => {
    return(
       <div className="product-details-container">
        <div className="product-details-card">
            <div className="go-back-container">
                <ArrowIcon/>
                <h2>VOLTAR</h2>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="img-container">
                        <img src ="" alt="Nome do produto"/>
                    </div>
                    <div className="name-price-container">
                        <h1>Nome do produto</h1>
                        <ProductPrice price={236.90}/>  
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="description-container">
                        <h2>Descrição do produto</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, fuga natus tempora nisi a consectetur non suscipit labore dolor magni fugit saepe nam sapiente temporibus ullam similique itaque minus hic.</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default ProductDetails;