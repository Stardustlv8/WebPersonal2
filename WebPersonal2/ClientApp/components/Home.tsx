import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Carousel } from './Carousel';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="text-center"><em>BENEMERITA UNIVERSIDAD AUTONOMA DE PUEBLA</em></h1>
            <p>Facultad de ciencias de la computacion</p>

            <Carousel />
             
        </div>;
    }
}
