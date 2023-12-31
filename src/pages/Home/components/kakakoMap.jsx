import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Main from 'assets/image/marker.PNG';
import Parking from 'assets/image/parking.png';
import useMediaQuery from 'utils/hooks/useMediaQuery';

export default function KakaoMap() {
  const { isMobile } = useMediaQuery();
  return (
    <Map
      center={{ lat: 37.45452665665286, lng: 126.90146820175917 }}
      style={{ width: isMobile ? '100%' : '50%', height: 400 }}
      level={2}
    >
      <MapMarker
        position={{ lat: 37.45493418758089, lng: 126.90125575147492 }}
        clickable
        onClick={() => window.open('https://map.naver.com/p/entry/place/1669555615?c=15.00,0,0,0,dh')}
        image={{ src: Main, size: { width: 150, height: '100%' }, options: { offset: { x: 75, y: 55 } } }}
      />
      <MapMarker
        position={{ lat: 37.453887063036525, lng: 126.90161879243772 }}
        clickable
        onClick={() => window.open('https://map.naver.com/p/entry/place/427542720?c=18.79,0,0,0,dh')}
        image={{ src: Parking, size: { width: 50, height: '100%' }, options: { offset: { x: 25, y: 55 } } }}
      />
    </Map>
  );
}
