import React from 'react'
import { BackButton } from '../components/backButton'
import { FadeTransform } from 'react-animation-components';
import { TeamItem } from '../components/teamItem';
import { ScrumItemPresentation } from '../components/scrumItemPresentation';

export const TeamScreen = ({ history }) => {
    return (
        <FadeTransform in transformProps={{ enterTransform: 'translateX(0px)' }}>

            <BackButton
                history={history}
            />

            <ScrumItemPresentation
                title={'Equipo Scrum'}
                description={'Grupo de profesionales auto organizados y multidisciplinarios.'}
                icon={'fa-users'}
                extra={'Su misión es la entrega iterativa e incremental del producto, esto con el objetivo de obtener el máximo feedback posible y que al final de cada Sprint haya una versión potencialment funcional.'}
                extraicon={'fa-lightbulb-o'}
            />

            <div className="card-deck">

                <TeamItem
                    name={'Product Owner'}
                    description={'Es una única persona cuyo objetivo principal es maximizar el valor de lo que el equipo de desarrollo entrega.'}
                    functions={[
                        'Único responsable de gestionar el Product Backlog (puede delegar funciones sobre este, pero sigue siendo el responsable).',
                        'Expresar claramentes historias de usuario, criterios de aceptación, etc.'
                    ]}
                />

                <TeamItem
                    name={'Development Team'}
                    description={'Equipo auto organizado y multifuncional de no menos de 3 personas. No existen jerarquías ni subequipos aunque haya algunos miembros especializados.'}
                    functions={[
                        'Entregar un producto funcional al final de cada iteración (Sprint).',
                        'Organizarse para cumplir con el Sprint Goal.'
                    ]}
                />

                <TeamItem
                    name={'Scrum Master'}
                    description={'Una persona encargada de ayudar a las relaciones entre el equipo de desarrollo y externos.'}
                    functions={[
                        'Con el Producto Owner: Asegurar que el Producto Owner tenga en claro cómo ordenar de manera correcta las historias de usuario.',
                        'Con el equipo de desarrollo: Asegurar que el equipo entienda los objetivos, el alcance, el dominio del proyecto, eliminar impedimentos, facilitar eventos.',
                        'Con el resto de la organización: Ayudar a la adaptación de Scrum, motivar cambios, colaborar con otros Scrum Master.',
                    ]}
                />

            </div>


        </FadeTransform>
    );
}
