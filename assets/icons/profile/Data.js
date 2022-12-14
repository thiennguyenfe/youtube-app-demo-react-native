import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const DataIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_134_55)">
      <Path
        d="M3.5 11V5.32494L12 1.54716L20.5 5.32494V11C20.5 16.2973 16.8574 21.2335 12 22.4845C7.14261 21.2335 3.5 16.2973 3.5 11Z"
        stroke="black"
      />
      <Path
        d="M12.198 8.38702C12.9227 8.38702 13.51 8.97429 13.51 9.699C13.51 10.4237 12.9227 11.011 12.198 11.011C11.4733 11.011 10.886 10.4237 10.886 9.699C10.886 8.97429 11.4733 8.38702 12.198 8.38702ZM12.198 14.0098C14.0535 14.0098 16.009 14.9219 16.009 15.3217V16.009H8.38702V15.3217C8.38702 14.9219 10.3425 14.0098 12.198 14.0098ZM12.198 7.2C10.8173 7.2 9.699 8.3183 9.699 9.699C9.699 11.0797 10.8173 12.198 12.198 12.198C13.5787 12.198 14.697 11.0797 14.697 9.699C14.697 8.3183 13.5787 7.2 12.198 7.2ZM12.198 12.8227C10.5299 12.8227 7.2 13.6599 7.2 15.3217V17.196H17.196V15.3217C17.196 13.6599 13.8661 12.8227 12.198 12.8227Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_134_55">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DataIcon;
