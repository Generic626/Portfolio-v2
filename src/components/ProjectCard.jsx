const ProjectCard = (props) => {
  const handleOnClick = () => {
    window.open(props.projectUrl, "_blank", "noopener noreferrer");
  };

  return (
    <div className="w-full h-[250px] rounded-lg flex shadow-lg bg-primary">
      {props.reversed ? (
        <ReversedOrientationCard
          projectImg={props.projectImg}
          title={props.title}
          description={props.description}
          badges={props.children}
          handleOnClick={handleOnClick}
        />
      ) : (
        <NormalOrientationCard
          projectImg={props.projectImg}
          title={props.title}
          description={props.description}
          badges={props.children}
          handleOnClick={handleOnClick}
        />
      )}
    </div>
  );
};

// Normal Stacking
const NormalOrientationCard = (props) => {
  return (
    <>
      {/* Project Content */}
      <div className="w-1/2 h-full p-8 flex flex-col justify-between">
        {/* Title + Description Content */}
        <div className="size-full">
          <span className="font-semibold text-lg ">{props.title}</span>
          <p className="text-gray-200 font-thin mt-2 text-sm">
            {props.description}
          </p>
        </div>
        {/* Badges */}
        <div className="flex gap-2">{props.badges}</div>
      </div>
      {/* Image*/}
      <div className="w-1/2 h-full flex flex-col justify-end ">
        <img
          onClick={props.handleOnClick}
          src={props.projectImg}
          className="cursor-pointer rounded-lg rounded-tr-none rounded-bl-none  object-cover shadow-xl h-[90%] border-[0.5px] border-black"
        />
      </div>
    </>
  );
};

// Reversed Stacking
const ReversedOrientationCard = (props) => {
  return (
    <>
      {/* Image*/}
      <div className="w-1/2 h-full flex flex-col justify-end">
        <img
          onClick={props.handleOnClick}
          src={props.projectImg}
          className="cursor-pointer rounded-lg rounded-tl-none rounded-br-none object-cover shadow-xl h-[90%] border-[0.5px] border-black"
        />
      </div>

      {/* Project Content */}
      <div className="w-1/2 h-full p-8 flex flex-col justify-between">
        {/* Title + Description Content */}
        <div className="size-full">
          <span className="font-semibold text-lg ">{props.title}</span>
          <p className="text-gray-200 font-thin mt-2 text-sm">
            {props.description}
          </p>
        </div>
        {/* Badges */}
        <div className="flex gap-2">{props.badges}</div>
      </div>
    </>
  );
};

export default ProjectCard;
