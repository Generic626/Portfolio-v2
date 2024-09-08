const Badge = (props) => {
  return (
    <div className="bg-primary rounded-full px-4 py-2 flex items-center">
      <img className="size-[15px]" src={props.img} />
    </div>
  );
};

export default Badge;
