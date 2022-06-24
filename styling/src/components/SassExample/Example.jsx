import React from 'react'
import './Example.scss'

export default function Example() {
    return (
    <div>
        <p>Example</p>
        <p className="font">Example</p>
        <nav>
            <ul>
                <li>123</li>
                <li>
                    <a>456</a>
                </li>
            </ul>
        </nav>
        <ul>
            <li>123</li>
            <li>
                <a>456</a>
            </li>
        </ul>
        <p className='base'>Hello, world</p>
        <p className='inverse'>Hello, world</p>
        <p className='info'>Hello, world</p>
        <p className='alert'>Hello, world</p>
        <p className='success'>Hello, world</p>
        <p className='message'>Hello, world</p>
        <p className='success2'>Hello, world</p>
        <p className='error'>Hello, world</p>
        <p className='warning'>Hello, world</p>
        <div className='square-av'></div>
        <div className='circle-av'></div>
        <div className='sidebar'></div>
        <div className='gray'>gray</div>
        <div className='button'>button</div>
        <div className='pulse'>button</div>
    </div>
    )
}
