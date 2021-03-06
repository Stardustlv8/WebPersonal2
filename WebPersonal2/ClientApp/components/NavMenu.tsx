import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>Aviel Aldama</Link>
                    <img className= 'Image' src="https://previews.123rf.com/images/indigofish/indigofish1512/indigofish151200060/49484467-avatar-masculino-o-pictograma-para-las-redes-sociales-estilo-colorido-plana-moderna-Foto-de-archivo.jpg"
                        width="40%" height="20%" />
                </div>
                <div className='clearfix'></div> 
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-asterisk'></span> Counter
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/academico'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Estudios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/habilidades'} activeClassName='active'>
                                <span className='glyphicon glyphicon-plane'></span> Habilidades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/proyectos'} activeClassName='active'>
                                <span className='glyphicon glyphicon-leaf'></span> Proyectos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contacto'} activeClassName='active'>
                                <span className='glyphicon glyphicon-phone'></span> Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/acercade'} activeClassName='active'>
                                <span className='glyphicon glyphicon-info-sign'></span> Acerca de...
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }

}
