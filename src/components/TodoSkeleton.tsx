// const TodoSkeleton = () => {
//   return (
//     <div className="flex items-center justify-between">
//       <div>
//         <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <div className=" w-20 h-9 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
//         <div className=" w-20 h-9 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
//       </div>
//     </div>
//   );
// };

// export default TodoSkeleton;
const TodoSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-full p-3 space-y-2 animate-pulse  "
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="flex items-center space-x-2">
          <div className="h-9 bg-gray-300 rounded-md dark:bg-gray-700 w-20"></div>
          <div className="h-9 bg-gray-300 rounded-md dark:bg-gray-700 w-20"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TodoSkeleton;
