import React, {
  FunctionComponent,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import "./App.css";
import { Row, Col } from "antd";
interface ISize {
  left: number;
  right: number;
  gutter: number;
  size: number;
}
const App: FunctionComponent = () => {
  const size = useRef<any>(null);
  const [windowDimensions, setWindowDimensions] = useState<ISize | null>(null);
  const checkSize = (width: number) => {
    switch (true) {
      case width >= 1600:
        setWindowDimensions({
          left: 16,
          right: 8,
          gutter: 24,
          size: 1568,
        });
        break;
      case width >= 1200:
        setWindowDimensions({
          left: 16,
          right: 8,
          gutter: 32,
          size: 1168,
        });
        break;
      case width >= 992:
        setWindowDimensions({
          left: 15,
          right: 9,
          gutter: 32,
          size: 960,
        });
        break;
      default:
        break;
    }
  };
  useLayoutEffect(() => {
    if (size.current !== null && size.current) {
      checkSize(size.current.offsetWidth);
    }
    return () => {
      size.current = null;
    };
  }, []);
  window.onresize = () => {
    if (size.current !== null && size.current) {
      checkSize(size.current.offsetWidth);
    }
    return () => (size.current = null);
  };
  console.log(windowDimensions);
  return (
    <div ref={size} className={`app__container-${windowDimensions?.size}`}>
      <Row className='app__row' gutter={windowDimensions?.gutter as number}>
        <Col span={windowDimensions?.left}>
            <div className="block p__1"></div>
            <div className="block p__2"></div>
            <div className="block p__3"></div>
        </Col>
        <Col  span={windowDimensions?.right}>
            <div className="block p__4"></div>
            <div className="block p__5"></div>
            <div className="block p__6"></div>
            <div className="block p__7"></div>
            <div className="block p__8"></div>
            <div className="block p__9"></div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
