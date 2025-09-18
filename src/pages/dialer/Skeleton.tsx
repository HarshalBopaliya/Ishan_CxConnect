const Skeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export default Skeleton;
