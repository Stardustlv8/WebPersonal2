import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Academico } from './components/Academico';
import { Contact } from './components/Contact';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/academico' component={ Academico } />
    <Route path='/contacto' component={ Contact } />
</Layout>;
