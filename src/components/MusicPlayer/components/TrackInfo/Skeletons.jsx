import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeletons = () => (
  <>
    <Skeleton
      width={50}
      height={20}
      baseColor="#202020"
      highlightColor="#444"
    />
    <Skeleton
      width={50}
      height={20}
      baseColor="#202020"
      highlightColor="#444"
    />
  </>
);
