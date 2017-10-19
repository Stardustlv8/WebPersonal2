// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Proyectos extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="text-center"><em>Proyectos</em></h1>
            <ul>Proyectos Laborales 2017
                <li>Sistema Administrativo: Servicio y Mantenimiento General Lopez</li>
            </ul>
            <ul>Proyectos Academicos
                <li>2012 Linux Terminal Server Proyect: Laboratorio Software Libre Buap</li>
                <li>2017 Colaboracion: Simulador de pruebas para algoritmos de planificacion Buap</li>
            </ul>
        </div>;
    }
}
