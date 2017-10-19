// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Acercade extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="text-center"><em>Acerca de...</em></h1>
            <p>Facultad de ciencias de la computacion</p>
            <p>Aplicaciones Web</p>
            <p>Profesora: Maria Luz Adolfina Sanchez Galvez</p>

        </div>;
    }
}
