const ProjectCard = (props) => {
  const handleOnClick = () => {
    if (props.projectUrl != "") {
      window.open(props.projectUrl, "_blank", "noopener noreferrer");
    }
  };

  // const projectCard = (
  //   <div className="w-full h-[250px] rounded-lg flex shadow-lg bg-primary hover:scale-105 ease-in duration-100">
  //     {props.reversed ? (
  //       <ReversedOrientationCard
  //         projectImg={props.projectImg}
  //         title={props.title}
  //         description={props.description}
  //         badges={props.children}
  //         handleOnClick={handleOnClick}
  //       />
  //     ) : (
  //       <NormalOrientationCard
  //         projectImg={props.projectImg}
  //         title={props.title}
  //         description={props.description}
  //         badges={props.children}
  //         handleOnClick={handleOnClick}
  //       />
  //     )}
  //   </div>
  // );

  const projectCard = (
    <NormalOrientationCardV2
      projectImg={props.projectImg}
      title={props.title}
      description={props.description}
      badges={props.children}
      handleOnClick={handleOnClick}
    />
  );

  return <>{projectCard}</>;
};

// Reversed Stacking
// const ReversedOrientationCard = (props) => {
//   return (
//     <>
//       {/* Project Content */}
//       <div className="w-1/2 h-full p-8 flex flex-col justify-between">
//         {/* Title + Description Content */}
//         <div className="size-full">
//           <span className="font-semibold text-lg ">{props.title}</span>
//           <p className="text-gray-200 font-thin mt-2 text-sm">
//             {props.description}
//           </p>
//         </div>
//         {/* Badges */}
//         <div className="flex gap-2">{props.badges}</div>
//       </div>
//       {/* Image*/}
//       <div className="w-1/2 h-full flex flex-col justify-end ">
//         <img
//           onClick={props.handleOnClick}
//           src={props.projectImg}
//           className="cursor-pointer rounded-lg rounded-tr-none rounded-bl-none  object-cover shadow-xl h-[90%] border-[0.5px] border-black"
//         />
//       </div>
//     </>
//   );
// };

// Normal Stacking
// const NormalOrientationCard = (props) => {
//   return (
//     <>
//       {/* Image*/}
//       <div className="w-1/2 h-full flex flex-col justify-end">
//         <img
//           onClick={props.handleOnClick}
//           src={props.projectImg}
//           className="cursor-pointer rounded-lg rounded-tl-none rounded-br-none object-cover shadow-xl h-[90%] border-[0.5px] border-black"
//         />
//       </div>

//       {/* Project Content */}
//       <div className="w-1/2 h-full p-8 flex flex-col justify-between">
//         {/* Title + Description Content */}
//         <div className="size-full">
//           <span className="font-semibold text-lg ">{props.title}</span>
//           <p className="text-gray-200 font-thin mt-2 text-sm">
//             {props.description}
//           </p>
//         </div>
//         {/* Badges */}
//         <div className="flex gap-2">{props.badges}</div>
//       </div>
//     </>
//   );
// };

// Normal Stacking V2
const NormalOrientationCardV2 = (props) => {
  return (
    <div className="flex justify-center">
      {/* Card */}
      <div className="flex flex-col items-center w-[80%] gap-4 ease-linear duration-150  hover:bg-backdrop-white-transparent border border-transparent hover:border-zinc-500 rounded-lg p-4">
        {/* Image*/}
        <div className="w-full h-full flex flex-col justify-end">
          <img
            onClick={props.handleOnClick}
            src={props.projectImg}
            className="cursor-pointer h-[200px] rounded-t-lg object-cover shadow-xl  border-[0.5px] border-black"
          />
        </div>

        {/* Project Content */}
        <div className="h-full flex flex-col justify-between">
          {/* Title + Description Content */}
          <div className="size-full">
            <span className="font-semibold text-lg ">{props.title}</span>
            <p className="text-zinc-300 font-thin mt-2 text-sm text-justify">
              {props.description}
            </p>
          </div>
          {/* Badges */}
          <div className="flex mt-4 gap-2">{props.badges}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
