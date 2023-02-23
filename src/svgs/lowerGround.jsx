import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFloor } from '../redux/homepage/homeslice';

const LowerGround = () => {
  const dispatch=useDispatch();

  const L1Handler=()=>{
    dispatch(updateFloor({}))

    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Lower Ground",
        square:66500,
        shop:"L1",
        shopFeet:652.56 ,
        totalPrice:43395240
      }))
      clearTimeout(time)
    }, 500);
  }

  const L2Handler=()=>{
    dispatch(updateFloor({}))


    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Lower Ground",
        square:66500,
        shop:"L2",
        shopFeet:639.31 ,
        totalPrice: 42514115
      }))
      clearTimeout(time)
    }, 500);
  }

  const L3Handler=()=>{
    dispatch(updateFloor({}))


    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Lower Ground",
        square:66500,
        shop:"L3",
        shopFeet:639.31 ,
        totalPrice: 42514115
      }))
      clearTimeout(time)
    }, 500);
  }

  const L4Handler=()=>{
    dispatch(updateFloor({}))
    
    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Lower Ground",
        square:66500,
        shop:"L4",
        shopFeet:612.81  ,
        totalPrice: 40751865
      }))
      clearTimeout(time)
    }, 500);
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.13 316.78" className='mx-auto w-full p-2 h-[70vh] sm:h-fit mb:h-fit'>
  <defs>
    <style>
    {`
    .cls-1 {
        fill: #f4f2f1;
      }

      .cls-2 {
        fill: #c4b2b4;
      }

      .cls-3 {
        fill: #896c68;
      }

      .cls-4 {
        fill: #58242b;
      }

      .cls-5 {
        font-size: 7.33px;
        fill: #b9938e;
        font-family: Poppins-Regular, Poppins;
      }
      `}
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <polygon class="cls-1" points="4.3 3.51 376.61 3.51 380.13 316.78 0 316.78 4.3 3.51" />
      <polygon class="cls-2" points="332.03 186.55 332.03 243.06 223.28 243.06 223.28 3.71 380.13 3.71 374.66 186.55 332.03 186.55" />
      <polygon class="cls-3" points="183.39 4.83 183.39 7.04 183.39 26.2 186.16 26.2 186.16 1.96 183.39 1.96 183.39 4.83" />
      <polygon class="cls-3" points="183.39 39.5 183.39 42.68 152.15 42.68 152.15 7.04 149.18 7.04 149.18 42.68 117.94 42.68 117.94 39.5 115.17 39.5 115.17 45.56 149.18 45.56 152.15 45.56 186.16 45.56 186.16 39.5 183.39 39.5" />
      <polygon class="cls-3" points="117.94 26.2 117.94 4.83 118.14 4.83 118.14 1.96 115.17 1.96 115.17 26.2 117.94 26.2" />
      <polygon class="cls-3" points="36.34 4.83 36.34 7.04 36.34 26.2 39.11 26.2 39.11 1.96 36.34 1.96 36.34 4.83" />
      <polygon class="cls-3" points="36.34 39.5 36.34 42.68 5.1 42.68 5.1 7.04 5.08 7.04 5.08 45.56 5.1 45.56 39.11 45.56 39.11 39.5 36.34 39.5" />
      <polygon class="cls-3" points="315.99 42.68 301.15 42.68 301.15 7.04 298.18 7.04 298.18 42.68 266.94 42.68 266.94 39.5 264.18 39.5 264.18 45.56 298.18 45.56 301.15 45.56 315.99 45.56 315.99 42.68" />
      <polygon class="cls-3" points="332.39 1.96 332.39 6.79 332.39 10.48 332.39 39.5 332.39 42.63 332.39 42.68 329.29 42.68 329.29 45.56 335.16 45.56 335.16 42.63 335.16 39.5 335.16 1.96 332.39 1.96" />
      <polygon class="cls-3" points="266.94 26.2 266.94 4.83 267.14 4.83 267.14 1.96 264.18 1.96 264.18 26.2 266.94 26.2" />
      <path class="cls-3" d="M377.78,4.68H3.13V.79H377.78ZM4.3,3.51H376.61V2H4.3Z" />
      <rect class="cls-3" x="145.48" y="233.87" width="10.17" height="13.69" />
      <rect class="cls-3" x="218.22" y="233.87" width="10.17" height="13.69" />
      <rect class="cls-3" x="290.96" y="233.87" width="10.17" height="13.69" />
      <rect class="cls-3" x="72.74" y="233.87" width="10.17" height="13.69" />
      <polygon class="cls-3" points="228.39 5.47 228.39 0 218.22 0 218.22 5.47 218.22 13.3 228.39 13.3 228.39 5.47" />
      <rect class="cls-3" x="256.16" width="20.73" height="5.48" />
      <rect class="cls-3" x="173.64" width="17.21" height="5.48" />
      <polygon class="cls-3" points="290.96 13.3 301.13 13.3 301.13 5.47 310.91 5.47 310.91 0 288.62 0 288.62 5.47 290.96 5.47 290.96 13.3" />
      <rect class="cls-3" x="322.64" width="13.3" height="5.48" />
      <polygon class="cls-3" points="82.91 5.47 82.91 0 72.74 0 72.74 5.47 72.74 13.3 82.91 13.3 82.91 5.47" />
      <polygon class="cls-3" points="145.48 13.3 155.26 13.3 155.26 5.47 161.91 5.47 161.91 0 139.22 0 139.22 5.47 145.48 5.47 145.48 13.3" />
      <rect class="cls-3" x="27.38" width="17.6" height="5.48" />
      <rect class="cls-3" x="110.68" width="16.82" height="5.48" />
      <polygon class="cls-3" points="369.96 0 369.96 5.47 369.96 13.3 374.66 13.3 374.66 66.09 369.96 66.09 369.96 79.78 374.66 79.78 374.66 186.55 332.03 186.55 332.03 247.55 343.76 247.55 343.76 242.08 337.5 242.08 337.5 192.02 374.66 192.02 374.66 242.08 368.4 242.08 368.4 247.55 374.66 247.55 374.66 303.09 369.96 303.09 369.96 311.3 228.39 311.3 228.39 303.09 218.22 303.09 218.22 311.3 155.65 311.3 155.65 303.09 145.48 303.09 145.48 311.3 9.97 311.3 9.97 303.09 5.47 303.09 5.47 247.55 9.78 247.55 9.78 233.87 5.47 233.87 5.47 130.62 9.78 130.62 9.78 116.93 5.47 116.93 5.47 13.3 10.17 13.3 10.17 5.47 15.25 5.47 15.25 0 0 0 0 316.78 369.96 316.78 380.13 316.78 380.13 303.09 380.13 247.55 380.13 186.55 380.13 0 369.96 0" />
      <rect class="cls-3" x="76.26" y="13.1" width="2.74" height="220.57" />
      <rect class="cls-3" x="149" y="17.99" width="2.74" height="220.57" />
      <rect class="cls-3" x="222.13" y="9.58" width="2.74" height="225.07" />
      <rect class="cls-3" x="31.29" y="244.03" width="41.65" height="1.17" />
      <rect class="cls-3" x="9.78" y="241.69" width="41.65" height="1.17" />
      <rect class="cls-3" x="104.42" y="244.03" width="41.65" height="1.17" />
      <rect class="cls-3" x="82.91" y="241.69" width="41.65" height="1.17" />
      <rect class="cls-3" x="176.77" y="244.03" width="41.65" height="1.17" />
      <rect class="cls-3" x="155.26" y="241.69" width="41.65" height="1.17" />
      <rect class="cls-3" x="249.9" y="244.03" width="41.65" height="1.17" />
      <rect class="cls-3" x="300.35" y="243.64" width="68.83" height="0.39" />
      <rect class="cls-3" x="299.96" y="245.21" width="68.83" height="0.39" />
      <rect class="cls-3" x="228.39" y="241.69" width="41.65" height="1.17" />
      <path class="cls-3" d="M37,25A15.29,15.29,0,0,0,21.7,40.09v.58H37.54V39.51H22.9a14.1,14.1,0,0,1,13.47-13.3" />
      <path class="cls-3" d="M184,25a15.29,15.29,0,0,0-15.25,15.06v.58h15.85V39.51H169.94a14.11,14.11,0,0,1,13.48-13.3" />
      <path class="cls-3" d="M117.32,25a15.29,15.29,0,0,1,15.25,15.06v.58H116.73V39.51h14.65a14.11,14.11,0,0,0-13.48-13.3" />
      <path class="cls-3" d="M266.33,25a15.28,15.28,0,0,1,15.24,15.06v.58H265.73V39.51h14.65a14.11,14.11,0,0,0-13.48-13.3" />
      <path class="cls-3" d="M314.72,43.7a15.27,15.27,0,0,1,15-15.24h.59V44.29l-1.07-.1V42.63l-.09-13a14.1,14.1,0,0,0-13.3,13.47" />
      <rect class="cls-3" x="35" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="46.54" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="40.67" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="52.4" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="58.27" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="64.14" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="70" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="75.87" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="81.74" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="87.6" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="93.47" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="263" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="274.54" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="268.67" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="280.41" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="286.27" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="292.14" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="298" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="303.87" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="309.74" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="315.6" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="321.47" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="326.94" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="332.81" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="338.68" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="344.54" y="285.36" width="0.39" height="26.2" />
      <rect class="cls-3" x="350.41" y="285.36" width="0.39" height="26.2" />
      <path class="cls-3" d="M93.86,287H5.48a.4.4,0,1,1,0-.79H93.86a.78.78,0,1,0-.78-.78.39.39,0,0,1-.39.39.38.38,0,0,1-.39-.39A1.56,1.56,0,1,1,93.86,287Z" />
      <path class="cls-3" d="M374.66,287H263.2a1.57,1.57,0,1,1,0-3.13,1.51,1.51,0,0,1,1.56,1.56.39.39,0,0,1-.78,0,.78.78,0,1,0-.78.78H374.66a.4.4,0,0,1,0,.79Z" />
      <circle class="cls-4 cursor-pointer" cx="40.28" cy="119.67" r="14.08" onClick={L1Handler} /><text class="cls-5 cursor-pointer" transform="translate(37.55 122.45)">L1</text>
      <circle class="cls-4 cursor-pointer" cx="113.8" cy="119.67" r="14.08" onClick={L2Handler}/><text class="cls-5 cursor-pointer" transform="translate(110.14 122.45)">L2</text>
      <circle class="cls-4 cursor-pointer" cx="186.15" cy="119.67" r="14.08" onClick={L3Handler} /><text class="cls-5 cursor-pointer" transform="translate(182.44 122.45)">L3</text>
      <circle class="cls-4 cursor-pointer" cx="298" cy="119.67" r="14.08"  onClick={L4Handler}/><text class="cls-5 cursor-pointer " transform="translate(294.14 122.45)">L4</text>
      <g id="Padlock">
        <path class="cls-4" d="M301.47,144.89v-2.57a3.44,3.44,0,0,0-6.88,0v2.57a1.29,1.29,0,0,0-1.29,1.29v5.16a1.29,1.29,0,0,0,1.29,1.29h6.88a1.28,1.28,0,0,0,1.28-1.29v-5.16A1.28,1.28,0,0,0,301.47,144.89Zm-6-2.57a2.58,2.58,0,0,1,5.16,0v2.57h-5.16Zm6.45,9a.44.44,0,0,1-.43.43h-6.88a.44.44,0,0,1-.43-.43v-5.16a.43.43,0,0,1,.43-.43h6.88a.43.43,0,0,1,.43.43Zm-3.44-2.89v-1a.43.43,0,1,0-.86,0v1a.85.85,0,0,0-.43.74.86.86,0,1,0,1.29-.74Z" />
      </g>
    </g>
  </g>
</svg>
  )
}

export default LowerGround