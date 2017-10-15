// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

export class Carousel extends React.Component<{}, {}> {

    public render() {

        return <div id='mycarousel' className='carousel slide' data-rider='carousel' >
                <ol className='carousel-indicators'>
                    <li data-target='#mycarousel' data-slide-to='0' className='active'></li>
                    <li data-target='#mycarousel' data-slide-to='1'></li>
                    <li data-target='#mycarousel' data-slide-to='2'></li>
                </ol>
                <div className='carousel-inner'>
                    <div className='item active'>
                        <img src='/images/Carousel/1.jpg' alt='Pueblo' width='1000' height='700' />
                    </div>
                    <div className='item'>
                        <img src='/images/Carousel/2.jpg' alt='Estancia' width='1000' height='700' />
                    </div>
                    <div className='item'>
                        <img src='/images/Carousel/3.jpg' alt='Aspiracion' width='1000' height='700' />
                    </div>
                </div>

                <a className='left carousel-control' href='#mycarousel' data-slide='prev' height='600' width='400'>
                    <span className='glyphicon glyphicon-chevron-left'></span>
                    <span className='sr-only'>Previous</span>
                </a>

                <a className='right carousel-control' href='#mycarousel' data-slide='next'>
                    <span className='glyphicon glyphicon-chevron-right'></span>
                    <span className='sr-only'>Next</span>
                </a>
        </div>;
    }

   }
