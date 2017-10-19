// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

export class Footer extends React.Component<{}, {}> {

    public render() {

        return <div >
                <p>Pie de pagina</p>
                <div className='row' > 
                    All Rights Reserved  Web Code Geeks 2015.
                </div> 
        </div>;

    }

}
