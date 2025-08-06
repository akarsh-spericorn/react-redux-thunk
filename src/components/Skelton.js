import SkeletonLineItem from './SkeltonLineItem';

const Skelton = ({ itemNumber, ...rest }) => {
  return (
    <>
      {Array(itemNumber)
        .fill()
        .map((_, index) => (
          <SkeletonLineItem key={index} {...rest} />
        ))}
    </>
  );
};

export default Skelton;
