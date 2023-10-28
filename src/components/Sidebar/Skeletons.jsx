import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeletons = () => (
  <SkeletonTheme baseColor="#202020" highlightColor="#444" duration="3">
    <Skeleton width={250} height={150} />
    <Skeleton width={250} height={150} />
    <Skeleton width={250} height={150} />
  </SkeletonTheme>
);
