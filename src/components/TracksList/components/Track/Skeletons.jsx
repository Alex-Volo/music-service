import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeletons = () => (
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <Skeleton height="50px" />
    <div style={{ margin: '0 10px' }}>
      <Skeleton height="25px" />
    </div>
    <div style={{ margin: '0 10px 0 0' }}>
      <Skeleton height="25px" />
    </div>
    <div style={{ margin: '0 10px 0 0' }}>
      <Skeleton height="25px"/>
    </div>
    <Skeleton height="25px" width="15px"/>
      <Skeleton height="25px" width="25px"/>
  </SkeletonTheme>
);
