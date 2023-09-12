import {  DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

const boards = [
  {
    id: "board1",
    name: "Project Board",
    columns: [
      {
        id: "resources",
        name: "Resources",
        cards: [
          {
            id: "card1",
            title: "Resource 1",
            description: "Description for Resource 1",
          },
          {
            id: "card2",
            title: "Resource 2",
            description: "Description for Resource 2",
          },
        ],
      },
      {
        id: "todo",
        name: "To Do",
        cards: [
          {
            id: "card3",
            title: "Task 1",
            description: "This is the first task to do.",
          },
          {
            id: "card4",
            title: "Task 2",
            description: "This is the second task to do.",
          },
        ],
      },
      {
        id: "doing",
        name: "Doing",
        cards: [
          {
            id: "card5",
            title: "Task 3",
            description: "This is a task in progress.",
          },
        ],
      },
      {
        id: "done",
        name: "Done",
        cards: [
          {
            id: "card6",
            title: "Task 4",
            description: "This task is completed.",
          },
        ],
      },
    ],
  },
];

export const getData = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  boards
    .map((board) => {
      dispatch({ type: DATA_SUCCESS, payload: board });
    })
   
};
