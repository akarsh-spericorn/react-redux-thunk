const SkeletonLineItem = ({ height = 'h-4', width = 'w-full' }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${height} ${width}`} />
);

export default SkeletonLineItem;
