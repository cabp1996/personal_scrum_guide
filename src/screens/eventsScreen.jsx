import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { BackButton } from '../components/backButton';
import { EventItem } from '../components/eventItem';
import { ScrumItemPresentation } from '../components/scrumItemPresentation';

export const EventsScreen = ({ history }) => {
    return (
        <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>

            <BackButton
                history={history}
            />

            <ScrumItemPresentation
                title={'Eventos Scrum'}
                description={'Son bloques de tiempo (time-box), lo que implica que tienen un límite. Pueden durar menos del tiempo establecido.'}
                icon={'fa-clock-o'}
                extra={'Si falta alguno en el proceso, se carece de transparencia.'}
                extraicon={'fa-exclamation'}
            />

            <div className="jumbotron jumbotron-secondary">
                <h2 className="display-5">Sprint</h2>
                <p className="lead">Es el corazón de Scrum, que representa una iteración cuya duración máxima es de un mes. Se entrega un producto utilizable y potencialmente desplegable.</p>
                <p> <i class="fa fa-play-circle" aria-hidden="true"></i> Cada Sprint empieza inmediatamente después a la finalización del anterior. </p>
                <p> <i class="fa fa-check" aria-hidden="true"></i> Todo Sprint tiene un Sprint Goal, el cual es una meta establecida a cumplir en cada iteración. </p>
                <p> <i class="fa fa-exclamation" aria-hidden="true"></i> Un Sprint solo puede cancelarse si el Sprint Goal queda obsoleto y solo el Product Owner puede darlo por terminado. </p>
            </div>



            <div className="row row-cols-1 row-cols-md-2 g-4">
                <EventItem
                    name={'1er Evento: Sprint Planning'}
                    description={'Un evento que permite responder al final del mismo: ¿Qué se va entregar como incremento? ¿Cómo se va llegar a ese objetivo?'}
                    duration={'Máximo de 8 horas para Sprints de 1 mes de duración (la mitad para un sprint de 2 semanas).'}
                    participants={'Todo el equipo Scrum'}
                    inputs={'Lista del producto, último incremento, capacidad proyectada del equipo de desarrollo para el Sprint, rendimiento pasado del mismo.'}
                    outputs={'-'}
                />
                <EventItem
                    name={'2do Evento: Daily Scrum'}
                    description={'Un evento destinado para el equipo de desarrollo, ya que ellos establecen el formato del mismo. Permite responder: ¿Qué se hizo ayer? ¿Qué se hará hoy? ¿Hay algún impedimento?. Es una inspección del avance contra el objetivo.'}
                    duration={'Máximo de 15 minutos, a diario, en la misma hora y mismo lugar.'}
                    participants={'El equipo de desarrollo. Si participan externos el Scrum Master debe asegurarse que no los interrumpan.'}
                    inputs={'-'}
                    outputs={'-'}
                />
                <EventItem
                    name={'3er Evento: Sprint Review'}
                    description={'Permite inspeccionar lo que se hizo durante el Sprint, y responder y comunicar: ¿Qué problemas aparecieron y cómo se resolvieron? ¿Estado del Backlog? ¿Se necesita ajusta el Product Backlog para los siguientes Sprints?.'}
                    duration={'Máximo de 4 horas para Sprints de 1 mes.'}
                    participants={'Todo el equipo Scrum y partes interesadas clave, invitadas por el Product Owner.'}
                    inputs={'-'}
                    outputs={'-'}
                />

                <EventItem
                    name={'4to Evento: Sprint Retrospective'}
                    description={'Permite determinar el plan de mejora para el siguiente Sprint.  El Scrum Master está a cargo de este evento.'}
                    duration={'3 horas máximo para Sprints de un mes'}
                    participants={'El Equipo de Scrum'}
                    inputs={'-'}
                    outputs={'Plan para la mejora ya sea cambiando o ajustando algún proceso (Action Item) o ajustando la definición de DONE.'}
                />
            </div>

        </FadeTransform>
    );
}
