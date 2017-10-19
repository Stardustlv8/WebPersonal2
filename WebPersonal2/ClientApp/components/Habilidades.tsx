// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Habilidades extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="text-center"><em>Habilidades de Desarrollo</em></h1>
            <ul> Lenguajes de Programacion:
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
            </ul>
            <ul> Frameworks de Desarrollo
                <li>Spring Framework</li>
                <li>Django</li>
                <li>.Net Framework</li>
                <li>Bootstrap</li>
            </ul>
        </div>;
    }
}
