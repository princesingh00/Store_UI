import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/scss/Dashboard.scss'
import Cart from '../components/Cart'
import Item from '../components/Item'
import Order from '../components/Order'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__header">
                <h1>Welcome to Online Shopping Store.</h1>

                <div className="dashboard__header__buttons">
                    <Button variant="contained" color="secondary">
                        Checkout
                    </Button>
                    <Cart />
                    <Order />
                </div>
            </div>

            <div className="dashboard__items">
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />
                <Item
                    id="6789"
                    imageUrl="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    name="prince"
                    price="55"
                />




            </div>
        </div>
    )
}

export default Dashboard
