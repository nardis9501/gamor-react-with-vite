export const saveBoardToStorage = ({ Board, Counter }) => {
  localStorage.setItem("persistenceBoardInLocalStorage", JSON.stringify(Board));
  localStorage.setItem("counter", Counter);
};
// export const inicialStateFromStorage = ({Counter}) => {

//     const persistenceBoard = localStorage.getItem(
//         "persistenceBoardInLocalStorage"
//       );
//       if (persistenceBoard) {
//         return JSON.parse(persistenceBoard);
//       }
//       return Array(0).fill(null);
// };
