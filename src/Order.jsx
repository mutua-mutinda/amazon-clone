import React from 'react'
import './Order.css'
import { useStateValue } from './StateProvider'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    const[{user}, dispatch] = useStateValue()
    return (
        <div className="order">
            <h2>welcome, {user?.email}</h2>
            <h4>This is your order of date:</h4>
            <p>{moment.unix(order?.data.created).format("MMMM Do YYYY, H:mm")}</p>
            <p className="order__id">
                <small><strong>order id:</strong> {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
            <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                hideButton
            />
            ))}
             <CurrencyFormat 
                renderText={(value) => (
                   <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100 }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
