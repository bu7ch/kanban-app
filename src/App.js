import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Lire le livre",
    description: "je devrais lire l'ensemble du livre",
    status: "in-progress",
    tasks:[]
  },
  {
    id: 2,
    title: "Ecrire du code",
    description: "Code avec les exemples tout au long de la lecture",
    status: "todo",
    tasks:[
      {
        id: 1,
        name: "ContactList Exemple",
        done: true
      },
      {
        id: 2,
        name: "Kanban Exemple",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
];
React.render(<KanbanBoard cards={cardsList} />, document.getElementById('id'));
