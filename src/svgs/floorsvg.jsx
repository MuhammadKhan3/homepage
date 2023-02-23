import React from 'react'
import { useDispatch } from 'react-redux';
import { updateFloor } from '../redux/homepage/homeslice';

const FloorSvg = ({}) => {
  const dispatch=useDispatch();

  const F1Handler=()=>{
    dispatch(updateFloor({}))

    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"First Floor",
        square:56500,
        shop:"L1",
        shopFeet:652.56 ,
        totalPrice:40347780
      }))
      clearTimeout(time)
    }, 500);
  }

  const F2Handler=()=>{
    dispatch(updateFloor({}))


    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Second Floor",
        square:66500,
        shop:"L2",
        shopFeet:639.31 ,
        totalPrice: 42514115
      }))
      clearTimeout(time)
    }, 500);
  }

  const F3Handler=()=>{
    dispatch(updateFloor({}))


    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Third Floor",
        square:66500,
        shop:"L3",
        shopFeet:639.31 ,
        totalPrice: 42514115
      }))
      clearTimeout(time)
    }, 500);
  }

  const F4Handler=()=>{
    dispatch(updateFloor({}))
    
    const time=setTimeout(() => {
      dispatch(updateFloor({
        floor:"Fourth Floor",
        square:56500,
        shop:"L4",
        shopFeet:612.81  ,
        totalPrice: 40751865
      }))
      clearTimeout(time)
    }, 500);
  }

  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.13 345.32" className='mx-auto w-full p-2  h-[70vh] sm:h-fit mb:h-fit'>
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
      <polygon className="cls-1" points="4.3 3.13 376.61 4.3 380.13 342.59 0 342.59 4.3 3.13" />
      <rect className="cls-2" x="5.67" y="2.1" width="70.79" height="252.1" />
      <rect className="cls-2" x="151.54" y="2.1" width="70.79" height="252.1" />
      <polygon className="cls-3" points="228.39 16.82 228.39 11.34 218.22 11.34 218.22 16.82 218.22 24.64 228.39 24.64 228.39 16.82" />
      <polyline className="cls-3" points="301.13 11.34 294.48 11.34 290.96 11.34 290.96 16.82 290.96 24.64 301.13 24.64 301.13 16.82" />
      <polygon className="cls-3" points="82.91 16.82 82.91 11.34 72.74 11.34 72.74 16.82 72.74 24.64 82.91 24.64 82.91 16.82" />
      <polyline className="cls-3" points="155.26 11.34 147.83 11.34 145.48 11.34 145.48 16.82 145.48 24.64 155.26 24.64 155.26 16.82" />
      <path className="cls-3" d="M322.25,2.15H2.35V.4h319.9ZM2.74,1.76H321.86v-1H2.74Z" />
      <path className="cls-3" d="M375.44,83.3H299.18V79.4h76.26Zm-75.09-1.17h73.91V80.58H300.35Z" />
      <rect className="cls-3" x="145.48" y="245.21" width="10.17" height="13.69" />
      <rect className="cls-3" x="218.22" y="245.21" width="10.17" height="13.69" />
      <rect className="cls-3" x="290.96" y="245.21" width="10.17" height="13.69" />
      <rect className="cls-3" x="290.96" y="128.27" width="10.17" height="13.69" />
      <rect className="cls-3" x="72.74" y="245.21" width="10.17" height="13.69" />
      <rect className="cls-3" x="298.39" y="78.02" width="2.74" height="177.94" />
      <rect className="cls-3" x="76.26" y="0.59" width="2.74" height="244.43" />
      <rect className="cls-3" x="149" y="44.78" width="2.74" height="205.12" />
      <rect className="cls-3" x="222.13" y="0.78" width="2.74" height="245.21" />
      <rect className="cls-3" x="31.29" y="255.38" width="41.65" height="1.17" />
      <rect className="cls-3" x="9.78" y="253.03" width="41.65" height="1.17" />
      <rect className="cls-3" x="104.42" y="255.38" width="41.65" height="1.17" />
      <rect className="cls-3" x="82.91" y="253.03" width="41.65" height="1.17" />
      <rect className="cls-3" x="176.77" y="255.38" width="41.65" height="1.17" />
      <rect className="cls-3" x="155.26" y="253.03" width="41.65" height="1.17" />
      <rect className="cls-3" x="249.9" y="255.38" width="41.65" height="1.17" />
      <rect className="cls-3" x="300.35" y="254.98" width="68.83" height="0.39" />
      <rect className="cls-3" x="299.96" y="256.55" width="68.83" height="0.39" />
      <rect className="cls-3" x="228.39" y="253.03" width="41.65" height="1.17" />
      <polygon className="cls-3" points="36.34 5.62 36.34 7.82 36.34 26.98 39.11 26.98 39.11 2.74 36.34 2.74 36.34 5.62" />
      <polygon className="cls-3" points="36.34 40.28 36.34 43.46 5.1 43.46 5.1 7.82 5.08 7.82 5.08 46.34 5.1 46.34 39.11 46.34 39.11 40.28 36.34 40.28" />
      <path className="cls-3" d="M37,25.81A15.29,15.29,0,0,0,21.7,40.87v.58H37.54V40.3H22.9A14.11,14.11,0,0,1,36.37,27" />
      <path className="cls-3" d="M354.81,58.85a16.82,16.82,0,1,1,17-17H373A18,18,0,1,0,354.81,60Z" />
      <path className="cls-3" d="M355.11,58.07h-.21a15.84,15.84,0,1,1,15.94-16v.19l-16.12.39ZM355,26.79a15.45,15.45,0,0,0-.29,30.89l-.4-15.44,16.13-.39A15.5,15.5,0,0,0,355,26.79Z" />
      <path className="cls-3" d="M354.12,42.63a.2.2,0,0,1-.19-.16.2.2,0,0,1,.12-.22L369.3,36l.15.37-14.27,5.85,15.36-.36v.39l-16.42.39Z" />
      <path className="cls-3" d="M354.77,42.22a.3.3,0,0,1-.11,0,.21.21,0,0,1-.07-.24l6.09-14.38.36.16-5.7,13.45L365.7,30.82l.27.28L354.91,42.16A.2.2,0,0,1,354.77,42.22Z" />
      <path className="cls-3" d="M354.91,42.43a.2.2,0,0,1-.18-.12l-5.87-14.47.36-.15,5.49,13.54V26.59h.39V42.24a.19.19,0,0,1-.16.19Z" />
      <path className="cls-3" d="M354.88,42.37l-.07,0-14.38-6.08.15-.36L354,41.6,343.69,31.25,344,31,355,42a.18.18,0,0,1,0,.24A.2.2,0,0,1,354.88,42.37Z" />
      <path className="cls-3" d="M340.7,48.09l-.14-.36,13.54-5.49H339.46v-.39H355.1a.18.18,0,0,1,.19.15.19.19,0,0,1-.12.22Z" />
      <path className="cls-3" d="M348.74,56.52l-.36-.15,5.7-13.46L343.72,53.26l-.27-.27,11.06-11.07a.21.21,0,0,1,.25,0,.21.21,0,0,1,.07.24Z" />
      <rect className="cls-3" x="301.13" y="105.59" width="73.72" height="0.39" />
      <rect className="cls-3" x="301.13" y="111.46" width="73.72" height="0.39" />
      <rect className="cls-3" x="301.13" y="117.32" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="123.19" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="129.06" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="134.92" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="140.4" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="146.26" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="152.13" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="158" width="30.11" height="0.39" />
      <rect className="cls-3" x="301.13" y="163.86" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="117.32" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="123.19" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="129.06" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="134.92" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="140.4" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="146.26" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="152.13" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="158" width="30.11" height="0.39" />
      <rect className="cls-3" x="344.93" y="163.86" width="30.11" height="0.39" />
      <path className="cls-3" d="M331.05,165.62a1.51,1.51,0,0,1-1.56-1.56V109.5h17v54.75a.4.4,0,0,1-.39.4.39.39,0,0,1-.39-.4v-54H330.27v53.78a.78.78,0,1,0,.78-.78.4.4,0,0,1,0-.79,1.57,1.57,0,0,1,0,3.13Z" />
      <rect className="cls-3" x="5.28" y="340.64" width="369.38" height="1.17" />
      <rect className="cls-3" x="5.28" y="343.37" width="369.38" height="1.17" />
      <rect className="cls-3" x="335.94" y="0.79" width="39.11" height="1.17" />
      <rect className="cls-3" x="335.94" y="3.52" width="39.11" height="1.17" />
      <rect className="cls-3" width="5.48" height="11.34" />
      <path className="cls-3" d="M314.72,44.48a15.27,15.27,0,0,1,15-15.24h.59V45.08L329.29,45V43.41l-.09-13A13.93,13.93,0,0,0,316,43.8" />
      <rect className="cls-3" width="15.06" height="2.74" />
      <rect className="cls-3" x="24.83" width="14.27" height="2.74" />
      <path className="cls-3" d="M171.29,0V2.74h12.1V25.83a15.27,15.27,0,0,0-14.64,15v.58h14.65v2H152.13V2.74h9.39V0H138.44V2.74H149V43.46H117.94v-2h14.64v-.58a15.27,15.27,0,0,0-14.62-15l.16-20,0-3.13h10.53V0H115V27h2.92A14.12,14.12,0,0,1,131.38,40.3H117.94v0h-2.77v6.06h71V40.28h-2.76v0H169.94A14.12,14.12,0,0,1,183.42,27h2.73V0Z" />
      <path className="cls-3" d="M301.52,43.46V2.74h9.39V0H287.84V2.74h10.55V43.46H267.33v-2H282v-.58a15.27,15.27,0,0,0-14.62-15l.16-20,0-3.13h10.53V0H264.37V27h2.93A14.11,14.11,0,0,1,280.77,40.3H267.33v0h-2.76v6.06H316V43.41l-14.45.05Z" />
      <polyline className="cls-3" points="336.33 0 335.55 0 330.86 0 320.69 0 320.69 2.74 330.86 2.74 330.86 43.46 329.29 43.46 329.29 46.34 330.86 46.34 330.86 62.18 336.33 62.18 336.33 46.34 336.33 46.15" />
      <polygon className="cls-3" points="0 314.04 0 328.12 0 345.32 5.47 345.32 5.47 328.12 9.78 328.12 9.78 314.43 5.47 314.43 5.47 314.04 5.47 258.9 9.78 258.9 9.78 245.21 5.47 245.21 5.47 141.96 9.78 141.96 9.78 128.28 5.47 128.28 5.47 24.64 10.17 24.64 10.17 16.82 10.17 11.34 0 11.34 0 314.04" />
      <polygon className="cls-3" points="374.66 0 374.66 11.34 369.96 11.34 369.96 24.64 374.66 24.64 374.66 77.43 369.96 77.43 369.96 91.12 374.66 91.12 374.66 197.89 332.03 197.89 332.03 258.9 343.76 258.9 343.76 253.42 337.5 253.42 337.5 203.36 374.66 203.36 374.66 253.42 368.4 253.42 368.4 258.9 374.66 258.9 374.66 310.13 374.66 314.43 369.96 314.43 369.96 322.64 369.96 328.12 374.66 328.12 374.66 345.32 380.13 345.32 380.13 328.12 380.13 310.13 380.13 13.69 380.13 11.34 380.13 0 374.66 0" />
      <circle className="cls-4 cursor-pointer" cx="40.28" cy="116.15" r="14.08" onClick={F1Handler} />
       <text className="cls-5 cursor-pointer" transform="translate(37.29 118.93)" onClick={F1Handler} >F1</text>
      <circle className="cls-4  cursor-pointer" cx="113.8" cy="116.15" r="14.08" onClick={F2Handler}/>
      <text className="cls-5 cursor-pointer" transform="translate(109.87 118.93)" onClick={F2Handler}>F2</text>
      <circle className="cls-4   cursor-pointer" cx="186.15" cy="116.15" r="14.08" onClick={F3Handler}  /><text className="cls-5 cursor-pointer" transform="translate(182.17 118.93)" >F3</text>
      <circle className="cls-4  cursor-pointer" cx="264.37" cy="116.15" r="14.08"  onClick={F4Handler}/><text  className="cls-5 cursor-pointer" transform="translate(260.24 118.93)">F4</text>
      <g id="Padlock">
        <path className="cls-4" d="M44.5,141.1v-2.57a3.44,3.44,0,1,0-6.87,0v2.57a1.29,1.29,0,0,0-1.29,1.29v5.16a1.29,1.29,0,0,0,1.29,1.29H44.5a1.29,1.29,0,0,0,1.29-1.29v-5.16A1.29,1.29,0,0,0,44.5,141.1Zm-6-2.57a2.58,2.58,0,1,1,5.15,0v2.57H38.49Zm6.44,9a.43.43,0,0,1-.43.43H37.63a.43.43,0,0,1-.43-.43v-5.16a.43.43,0,0,1,.43-.43H44.5a.43.43,0,0,1,.43.43Zm-3.44-2.89v-1a.43.43,0,0,0-.43-.43.43.43,0,0,0-.43.43v1a.86.86,0,1,0,1.29.74A.85.85,0,0,0,41.49,144.66Z" />
      </g>
      <g id="Padlock-2" data-name="Padlock">
        <path className="cls-4" d="M189.62,141.1v-2.57a3.44,3.44,0,0,0-6.88,0v2.57a1.29,1.29,0,0,0-1.29,1.29v5.16a1.29,1.29,0,0,0,1.29,1.29h6.88a1.28,1.28,0,0,0,1.28-1.29v-5.16A1.28,1.28,0,0,0,189.62,141.1Zm-6-2.57a2.58,2.58,0,1,1,5.16,0v2.57H183.6Zm6.45,9a.44.44,0,0,1-.43.43h-6.88a.44.44,0,0,1-.43-.43v-5.16a.43.43,0,0,1,.43-.43h6.88a.43.43,0,0,1,.43.43Zm-3.44-2.89v-1a.43.43,0,0,0-.86,0v1a.85.85,0,0,0-.43.74.86.86,0,0,0,1.72,0A.85.85,0,0,0,186.61,144.66Z" />
      </g>
    </g>
  </g>
</svg>)
}

export default FloorSvg;