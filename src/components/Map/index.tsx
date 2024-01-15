import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import { useMapContext } from 'components/MapContextProvider';

interface IProps {
  className?: string;
}

const Map = ({ className }: IProps) => {
  const mapElementRef = useRef();
  const map = useMapContext();

  useEffect(() => {
    map.setTarget(mapElementRef.current);
    window.onresize = () => map.updateSize();

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className={className} ref={mapElementRef}/>
  );
}

const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export default memo(StyledMap, () => true);
