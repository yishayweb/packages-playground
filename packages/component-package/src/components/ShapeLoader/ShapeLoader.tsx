import { StyledShapeLoader } from './ShapeLoader.styles';

export interface ShapeLoaderProps {
  style?: React.CSSProperties;
  className?: string;
}

const ShapeLoader: React.FC<ShapeLoaderProps> = ({
  style = {},
  className = '',
}) => {
  return (
    <StyledShapeLoader className={className} style={style}></StyledShapeLoader>
  );
};

export default ShapeLoader;
