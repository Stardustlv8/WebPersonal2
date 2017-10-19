// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Social } from './Social';
import { Footer } from './Footer';

export class Contact extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {

        return <div>
            <h1>Informacion de Contacto</h1>
            <p>Telefono Celular: 2227663141</p>
            <p>Telefono Local:   2224673950</p>

            <h1>Redes Sociales</h1>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                <li>Youtube</li>
            </ul>
        </div>; 
    }
    
}