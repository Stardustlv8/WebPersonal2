import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Academico } from './components/Academico';
import { Contact } from './components/Contact';
import { Habilidades } from './components/Habilidades';
import { Acercade } from './components/Acercade';
import { Proyectos } from './components/Proyectos';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/academico' component={ Academico } />
    <Route path='/habilidades' component={ Habilidades } />
    <Route path='/proyectos' component={ Proyectos } />
    <Route path='/contacto' component={Contact} />
    <Route path='/acercade' component={ Acercade } />
</Layout>;
