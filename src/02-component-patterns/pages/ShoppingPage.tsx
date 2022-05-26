import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            products.map( product => (
                <ProductCard  key={ product.id }
                              product={ product }
                              className="bg-dark text-white"
                              value={ shoppingCart[product.id]?.count || 0 }
                              onChange={ ( evento ) => onProductCountChange( evento ) }
                              >
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
            ))
          }
        </div>
        <div className="shopping-cart">
            {
              Object.entries( shoppingCart ).map( ([ key, product ]) => (
                  <ProductCard  key = { product.id }
                                product={ product } 
                                className="bg-dark text-white"
                                style={{ width: '100px'}}
                                value={ product.count }
                                onChange={ ( evento ) => onProductCountChange( evento ) } >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba( 0, 0, 0, 0.2 )' }}/>
                    <ProductButtons 
                        className="custom-buttons"
                        style={{
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      />
                </ProductCard>
              ))
            }
        </div>

        <div>
          <code>
            { JSON.stringify(shoppingCart, null, 5 ) }
          </code>
        </div>
    </div>
  )
}
