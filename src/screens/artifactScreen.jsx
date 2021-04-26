import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { ArtifactItem } from '../components/artifactItem';
import { BackButton } from '../components/backButton';
import { ScrumItemPresentation } from '../components/scrumItemPresentation';

export const ArtifactScreen = ({ history }) => {
    return (
        <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>
            <BackButton
                history={history}
            />

            <ScrumItemPresentation
                title={'Artefactos Scrum'}
                description={'Representan trabajo o valor que proporciona transparencia necesaria para la inspección y adaptación.'}
                icon={'fa-file-text'}
            />

            <div className="card-deck">
                <ArtifactItem
                    name={'1. Product Backlog'}
                    points={[
                        'Lista de requisitos funcionales y no funcionales a implementarse.',
                        'Es dinámico, puede cambiar por la naturaleza de Scrum basada en el empirismo.',
                        'Los items deben incluir descripción, orden, estimación y valor.',
                        'Debe especificar qué pruebas se requiere para demostrar completitud de cada historia para ser considerada como terminada.',
                    ]}
                    extra={'El refinamiento del Product Backlog implica añadir detalles, estimaciones y orden a las historias de usuario. El equipo Scrum decide cuándo hacer el refinamiento, pero el Product Owner puede modificar los items del Product Backlog en cualquier momento.'}
                />

                <ArtifactItem
                    name={'2. Sprint Backlog'}
                    points={[
                        'Subconjunto del Product Backlog para ser implementado en el Sprint actual para lograr el objetivo del mismo.',
                        'Siempre debe existir una tarea de alta prioridad.',
                        'Los elementos pueden ser eliminados del Sprint Backlog en cualquier momento o actualizado el mismo.',
                    ]}
                    extra={'Solo el equipo de desarrollo es el dueño de la lista de pendientes (Sprint Backlog).'}
                />

                <ArtifactItem
                    name={'3. El incremento'}
                    points={[
                        'Es la suma de todos los elementos de la Lista de Producto completados durante un Sprint y el valor de los incrementos de todos los Sprints anteriores.',
                        'Al final del Sprint el incremento debe ser utilizable, es decir debe cumplir con la definición de DONE.',
                        'Es totalmente inspeccionable.',
                    ]}
                    extra={'A pesar de estar terminado, el Product Owner puede decidir si liberarlo o no.'}
                />
            </div>
        </FadeTransform>
    );
}
