const CurveDivider = () => {
  return (
    <div className="relative w-full h-[120px] bg-black overflow-hidden">
      <div
        className="
          absolute
          top-0
          left-[-25%]
          w-[150%]
          h-full
          flex
          items-center
          border
          border-transparent
          border-t-[0.25rem]
          border-t-transparent
          rounded-t-[50%_100%]
          bg-[radial-gradient(50%_500%_at_50%_-420%,rgba(64,97,231,0.4)_80%,rgba(0,0,0,0.1)_100%),black]
          bg-clip-padding
        "
      />
    </div>
  );
};

export default CurveDivider;
