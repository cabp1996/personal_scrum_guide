import React from 'react';

export const EventItem = ({ name, duration, participants, description, inputs, outputs }) => {
    return (
        <div className="col">
            <div className="card card-secondary mb-5" style={{height: '100%'}}>

                <div className="card-header">{name}</div>
                <div className="card-body">
                    <p>{description}</p>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><strong><i class="fa fa-clock-o" aria-hidden="true"></i> Duración: </strong></td>
                                <td>{duration}</td>
                            </tr>
                            <tr>
                                <td><strong><i class="fa fa-users" aria-hidden="true"></i> Participantes: </strong></td>
                                <td>{participants}</td>
                            </tr>
                            <tr>
                                <td><strong><i class="fa fa-keyboard-o" aria-hidden="true"></i> Entradas: </strong></td>
                                <td>{inputs}</td>
                            </tr>

                            <tr>
                                <td><strong><i class="fa fa-outdent" aria-hidden="true"></i> Salidas: </strong></td>
                                <td>{outputs}</td>
                            </tr>

                        </tbody>
                    </table>

                    {/* <div className="text-center">
                   <strong> <i class="fa fa-check" aria-hidden="true"></i> Funciones
           </strong>
               </div> */}
                    {/* <ul>
                   {functions.map((func) => {
                       return (
                           <li
                               key={func.substring(0, 5)}
                           >{func}</li>
                       );
                   })}
               </ul> */}
                </div>
            </div>
        </div>
    );
}
