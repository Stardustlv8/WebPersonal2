// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Academico extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
    }

    public render() {
        let contents = Academico.renderForecastsTable();

        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            { contents }
        </div>; 
    }

    private static renderForecastsTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Grado</th>
                    <th>Año en que se curso</th>
                    <th>Domicilio</th>
                    <th>Titulo Obtenido</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Preescolar</td>
                    <td>Agosto 1996 a Julio 1998</td>
                    <td>Josefa Ortiz de Dominguez Sn</td>
                    <td>Certificado</td>
                </tr>

                <tr>
                    <td>Primaria</td>
                    <td>Agosto 1998 a Julio 2004</td>
                    <td>Josefa Ortiz de Dominguez Sn</td>
                    <td>Certificado</td>
                </tr>

                <tr>
                    <td>Telesecundaria</td>
                    <td>Agosto 2004 a Julio 2007</td>
                    <td>Independencia Sn</td>
                    <td>Certificado</td>
                </tr>

                <tr>
                    <td>Bachillerato</td>
                    <td>Agosto 2007 a Julio 2010</td>
                    <td>Independencia Sn</td>
                    <td>Certificado</td>
                </tr>

                <tr>
                    <td>Universidad</td>
                    <td>Agosto 2010 - Cursando</td>
                    <td>Colonia Sn Manuel Puebla</td>
                    <td>Pendiente</td>
                </tr>
            </tbody>
        </table>;
    }
}
