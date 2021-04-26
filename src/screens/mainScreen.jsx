import React from 'react';
import { ScrumItem } from '../components/scrumItem';

const imageTeam = 'assets/img/team.png';
const imageEvent = 'assets/img/clock.png';
const imageArtificat = 'assets/img/document.png';

export const MainScreen = ({ history }) => {
    return (
        <>
            <div className="jumbotron jumbotron-primary">
                <h2 className="display-5">Scrum</h2>
                <p className="lead">Marco de trabajo liviano cuyo propósito es desarrollar, mantener y entregar productos complejos.</p>
                <p> <strong>Valores: </strong>Compromiso, Coraje, Foco, Apertura, Respeto </p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <strong> <i class="fa fa-list" aria-hidden="true"></i> Usos
                            </strong>
                            <hr />
                        </div>
                        <ol>
                            <li>Identificar mercados viables.</li>
                            <li>Desarrollar productos.</li>
                            <li>Liberar productos y mejorarlos tantas veces como se pueda en un día.</li>
                            <li>Desarrollar y mantener ambientes en la nube.</li>
                            <li>Mantener y renovar productos.</li>
                        </ol>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <strong> <i class="fa fa-list" aria-hidden="true"></i> Principios
                            </strong>
                            <hr />
                        </div>
                        <ol>
                            <li> <strong>Transparencia: </strong>Todos los miembros del equipo tienen un entendimiento en común. </li>
                            <li> <strong>Inspección: </strong>Constante inspección a los artefactos. </li>
                            <li> <strong>Adaptación: </strong>Si como producto de la inspección se descrubre que existen desvíos en los valores aceptados se debe hacer correciones sobre el proceso para obtener siempre un producto aceptable. </li>
                        </ol>
                    </div>
                </div>

            </div>
            <hr />

            <div className="card-deck">
                <ScrumItem
                    title={'Equipo'}
                    route={'/team'}
                    history={history}
                    image={imageTeam}
                    description={'Grupo de profesionales sin jerarquías ni sub-equipos. Buscan un objetivo en común.'}
                />
                <ScrumItem
                    title={'Eventos'}
                    image={imageEvent}
                    route={'/events'}
                    history={history}
                    description={'Oportunidad para inspeccionar y adaptar los artefactos de Scrum.'}
                />
                <ScrumItem
                    title={'Artefactos'}
                    image={imageArtificat}
                    route={'/artifacts'}
                    history={history}
                    description={'Representan valor o trabajo y permiten garantizar la transparencia.'}
                />
            </div>

        </>
    );
}
