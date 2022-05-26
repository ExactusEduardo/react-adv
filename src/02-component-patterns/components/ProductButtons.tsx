import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}
export const ProductButtons = ( { className, style }: Props ) => {

    // TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext( ProductContext );
    // TODO: isMaxReached = useCallback, dependencias [ count, maxCounter ]
    // TRUE si el count === maxCount
    // FALSE si no lo es
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )

    return (
        <div className={ `${ styles.buttonsContainer } ${ className }`}
             style={ style } >
            <button className={ styles.buttonMinus } onClick={ () => increaseBy( -1 ) } >-</button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button 
                    className={ `${ styles.buttonAdd } ${ ( isMaxReached() ? styles.disabled : '') }` } 
                    onClick={ () => increaseBy( 1 ) } >+</button>
        </div>
    );
}