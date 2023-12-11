import Container from "components/Container";

const features = [
  {
    name: "Create your Energy Community",
    description:
      "Start your journey building an Energy Community. Onboard members and together govern your decisions.",
    icon: EnergyCommunityIcon,
  },
  {
    name: "Autonomous Governance",
    description:
      "Participate in decision-making processes that can lead to significant gains to your community. Decide who gets in, how much money to raise.",
    icon: GovernanceIcon,
  },
  {
    name: "Financing",
    description:
      "Take part in crowdlending campaigns, where every participant can contribute towards renewable energy projects. ",
    icon: FinancingIcon,
  },
  {
    name: "Energy Sharing",
    description:
      "We provide energy sharing services to communities or 3rd party providers",
    icon: EnergySharingIcon,
  },
  {
    name: "Sustainability Tracking",
    description:
      "Monitor your contributions to green energy production and CO2 emissions reduction. Understand the real impact of your investments on the environment.",
    icon: DeviceLockIcon,
  },
  {
    name: "Community Growth",
    description:
      "Witness your initial investment catalyzing sustainable energy development and setting a new standard for investors.",
    icon: DeviceChartIcon,
  },
];

function EnergyCommunityIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <svg
        data-name="Layer 1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path d="M396.53,193.83V141.65A30.59,30.59,0,0,0,366,111.09h-4.84a32.59,32.59,0,1,0-47.59,0h-7.24a30.43,30.43,0,0,0-22.13,9.59,32.28,32.28,0,0,0-56.34,0,30.46,30.46,0,0,0-22.15-9.6h-7.23a32.59,32.59,0,1,0-47.59,0H146a30.6,30.6,0,0,0-30.56,30.56v52.18A31.74,31.74,0,0,0,134,222.58a30.57,30.57,0,0,0-18.49,28v52.19A31.87,31.87,0,0,0,142,334.19v68.4a5.25,5.25,0,0,0,10.49,0V329.42a.43.43,0,0,0,0-.05V250.52a5.25,5.25,0,0,0-10.49,0V323.4A21.3,21.3,0,0,1,126,302.81V250.62A20.1,20.1,0,0,1,146,230.55h59.66a19.93,19.93,0,0,1,17.68,10.92v26.68s0,.06,0,.09a30.28,30.28,0,0,0-16.07,7.29v-25a5.25,5.25,0,0,0-10.49,0V402.59a5.25,5.25,0,0,0,10.49,0V374A31.72,31.72,0,0,0,223.39,382v68.4a5.24,5.24,0,0,0,10.48,0V377.13s0-.06,0-.1V298.29a5.24,5.24,0,1,0-10.48,0v72.86a21.29,21.29,0,0,1-16.06-20.58V298.39a20.09,20.09,0,0,1,20.07-20.07h57.27a20.08,20.08,0,0,1,20.05,19.87v31.18s0,.07,0,.11v4.33s0,.06,0,.1v16.86a21.28,21.28,0,0,1-16.07,20.39V298.29a5.24,5.24,0,1,0-10.48,0v78.84a.43.43,0,0,0,0,.05v73.17a5.24,5.24,0,0,0,10.48,0V382a31.7,31.7,0,0,0,16.06-7.9v28.54a5.25,5.25,0,0,0,10.49,0V350.8c0-.08,0-.15,0-.23V298.39c0-.07,0-.14,0-.2V250.52a5.25,5.25,0,0,0-10.49,0v25a30.28,30.28,0,0,0-16.08-7.29s0-.05,0-.08V241.49a19.92,19.92,0,0,1,17.68-10.94H366a20.09,20.09,0,0,1,20.07,20.07v52.19A21.3,21.3,0,0,1,370,323.4V250.52a5.25,5.25,0,0,0-10.49,0v78.85a.43.43,0,0,0,0,.05v73.17a5.25,5.25,0,0,0,10.49,0v-68.4a31.87,31.87,0,0,0,26.56-31.38V250.62a30.58,30.58,0,0,0-18.48-28A31.76,31.76,0,0,0,396.53,193.83ZM315.25,89a22.09,22.09,0,1,1,22.1,22.1A22.12,22.12,0,0,1,315.25,89ZM256,114.66a22.1,22.1,0,1,1-22.1,22.1A22.12,22.12,0,0,1,256,114.66ZM152.57,89a22.1,22.1,0,1,1,22.09,22.1A22.12,22.12,0,0,1,152.57,89ZM126,193.83V141.65A20.1,20.1,0,0,1,146,121.58h59.66a20,20,0,0,1,18.1,11.61,32,32,0,0,0-.36,3.57,32.36,32.36,0,0,0,8.78,22.09h-4.83a30.27,30.27,0,0,0-20.07,7.71v-25a5.25,5.25,0,0,0-10.49,0v32.68a32.2,32.2,0,0,0-44.29,0V141.54a5.25,5.25,0,0,0-10.49,0v72.88A21.3,21.3,0,0,1,126,193.83ZM152.57,198a22.1,22.1,0,1,1,22.09,22.1A22.12,22.12,0,0,1,152.57,198Zm125.54,47.76A22.1,22.1,0,1,1,256,223.64,22.12,22.12,0,0,1,278.11,245.73Zm10.52-20V189.31a5.24,5.24,0,1,0-10.48,0V222a32.2,32.2,0,0,0-44.3,0V189.31a5.24,5.24,0,1,0-10.48,0v36.44a30.46,30.46,0,0,0-16.06-5.56V189.41a20.09,20.09,0,0,1,20.07-20.07h57.27a20.08,20.08,0,0,1,20.05,19.87v31A30.49,30.49,0,0,0,288.63,225.75ZM315.25,198a22.09,22.09,0,1,1,22.1,22.1A22.13,22.13,0,0,1,315.25,198Zm70.8-4.14A21.3,21.3,0,0,1,370,214.42V141.54a5.25,5.25,0,0,0-10.49,0V174.2a32.2,32.2,0,0,0-44.28,0V141.54a5.25,5.25,0,0,0-10.49,0v25a30.32,30.32,0,0,0-20.05-7.69h-4.84a32.36,32.36,0,0,0,8.78-22.09,32.81,32.81,0,0,0-.36-3.59,20,20,0,0,1,18.08-11.59H366a20.09,20.09,0,0,1,20.07,20.07Z" />
        <path d="M256,371.89a5.23,5.23,0,0,0-5.24,5.24v73.22a5.24,5.24,0,0,0,10.48,0V377.13A5.23,5.23,0,0,0,256,371.89Z" />
        <path d="M337.35,328.67a5.24,5.24,0,0,0-5.25,5.24v68.68a5.25,5.25,0,0,0,10.49,0V333.91A5.24,5.24,0,0,0,337.35,328.67Z" />
        <path d="M174.66,328.67a5.24,5.24,0,0,0-5.24,5.24v68.68a5.25,5.25,0,0,0,10.49,0V333.91A5.24,5.24,0,0,0,174.66,328.67Z" />
      </svg>

      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

function GovernanceIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <svg
        height="29"
        id="svg2"
        version="1.1"
        viewBox="0 0 32 32.000001"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs4" />
        <g id="layer1" transform="translate(0,-1020.3622)">
          <path
            d="m 23.49998,1038.1122 -10e-6,9"
            id="path11734"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 25.99998,1038.1122 -10e-6,9"
            id="path11736"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 22.49997,1048.8622 0,-0.75 c 0,-0.5523 0.44772,-1 1,-1 l 2.5,0 c 0.55228,0 1,0.4477 1,1 l 0,0.75"
            id="path11738"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 22.49997,1036.3622 10e-6,0.75 c 10e-6,0.5523 0.44771,1 1,1 l 2.5,0 c 0.55228,0 1.00001,-0.4477 1,-1 l -10e-6,-0.75"
            id="path11740"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 14.24998,1038.1122 -1e-5,9"
            id="path11744"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 16.74998,1038.1122 -10e-6,9"
            id="path11746"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 13.24997,1048.8622 0,-0.75 c 0,-0.5523 0.44772,-1 1,-1 l 2.5,0 c 0.55228,0 1,0.4477 1,1 l 0,0.75"
            id="path11748"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 13.24997,1036.3622 1e-5,0.75 c 10e-6,0.5523 0.44771,1 1,1 l 2.5,0 c 0.55228,0 1.00001,-0.4477 1,-1 l -10e-6,-0.75"
            id="path11750"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 30.49284,1051.8622 -29.98572,0"
            id="path11754"
            fill="none"
            fillOpacity={1}
            opacity={1}
            stroke="#000000"
            strokeWidth={1}
            // style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          />
          <path
            d="m 15.49999,1027.8622 0,-6.5 5.5,0 0,3 -4.25003,0"
            id="path11756"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:1"
          />
          <path
            d="m 1.99999,1049.8622 27,0"
            id="path11758"
            fill="none"
            fillOpacity={1}
            stroke="#000000"
            strokeWidth={1}
            opacity={1}
            // style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          />
          <path
            d="m 4.99999,1038.1122 -1e-5,9"
            id="path11760"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 7.49999,1038.1122 -1e-5,9"
            id="path11762"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 3.99998,1048.8622 0,-0.75 c 0,-0.5523 0.44772,-1 1,-1 l 2.5,0 c 0.55228,0 1,0.4477 1,1 l 0,0.75"
            id="path11764"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 3.99998,1036.3622 1e-5,0.75 c 1e-5,0.5523 0.44771,1 1,1 l 2.5,0 c 0.55228,0 1.00001,-0.4477 1,-1 l -10e-6,-0.75"
            id="path11766"
            fill="none"
            fillOpacity={1}
            stroke="#000000"
            strokeWidth={1}
            // style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          />
          <path
            d="m 15.49999,1027.3622 14,6.5 0,1.5 -28,0 0,-1.5 z"
            id="path11770"
            fill="none"
            fillOpacity={1}
            stroke="#000000"
            strokeWidth={1}
            // style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.99999994;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          />
          <path
            d="m 16.99998,1031.8621 a 1.4999835,1.4999835 0 0 1 -1.49998,1.5 1.4999835,1.4999835 0 0 1 -1.49998,-1.5 1.4999835,1.4999835 0 0 1 1.49998,-1.4999 1.4999835,1.4999835 0 0 1 1.49998,1.4999 z"
            id="circle11772"
            fill="none"
            fillOpacity={1}
            stroke="#000000"
            strokeWidth={1}
            // style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          />
        </g>
      </svg>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

function FinancingIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <svg
        height="100%"
        version="1.1"
        viewBox="0 0 100 100"
        width="100%"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g transform="matrix(1,0,0,1,-850,-850)">
          <g id="Layer1">
            <path d="M854.5,947L900,947C900.182,947 900.363,946.967 900.533,946.902L936.033,933.402C936.423,933.254 936.734,932.949 936.891,932.562C937.047,932.175 937.035,931.74 936.858,931.362L933.512,924.242C933.2,923.578 932.453,923.237 931.746,923.437L899.888,932.458L890.656,931.261C890.656,931.261 900.282,929.419 900.282,929.419C900.989,929.283 901.5,928.665 901.5,927.945L901.5,922.471C901.5,921.643 900.828,920.971 900,920.971L880.519,920.971C880.249,920.971 879.984,921.044 879.752,921.182L866,929.362L866,925.5C866,924.672 865.328,924 864.5,924L854.5,924C853.672,924 853,924.672 853,925.5L853,945.5C853,946.328 853.672,947 854.5,947ZM899.807,935.473C900.008,935.499 900.213,935.484 900.409,935.429L931.339,926.67C931.339,926.67 933.454,931.173 933.454,931.173C933.454,931.173 899.724,944 899.724,944C899.724,944 866,944 866,944C866,944 866,932.853 866,932.853C866,932.853 880.931,923.971 880.931,923.971C880.931,923.971 898.5,923.971 898.5,923.971C898.5,923.971 898.5,926.705 898.5,926.705C898.5,926.705 880.908,930.072 880.908,930.072C880.185,930.21 879.669,930.854 879.691,931.59C879.713,932.326 880.267,932.938 880.997,933.033L899.807,935.473ZM863,927L863,944C863,944 856,944 856,944C856,944 856,927 856,927L863,927ZM937,884.5C937,883.672 936.328,883 935.5,883L864.5,883C863.672,883 863,883.672 863,884.5L863,915.5C863,916.328 863.672,917 864.5,917L935.5,917C936.328,917 937,916.328 937,915.5L937,884.5ZM934,886L934,914C934,914 866,914 866,914C866,914 866,886 866,886L934,886ZM931.5,895C931.5,894.172 930.828,893.5 930,893.5C928.068,893.5 926.5,891.932 926.5,890C926.5,889.172 925.828,888.5 925,888.5L875,888.5C874.172,888.5 873.5,889.172 873.5,890C873.5,891.932 871.932,893.5 870,893.5C869.172,893.5 868.5,894.172 868.5,895L868.5,905C868.5,905.828 869.172,906.5 870,906.5C871.932,906.5 873.5,908.068 873.5,910C873.5,910.828 874.172,911.5 875,911.5L925,911.5C925.828,911.5 926.5,910.828 926.5,910C926.5,908.068 928.068,906.5 930,906.5C930.828,906.5 931.5,905.828 931.5,905L931.5,895ZM928.5,896.326L928.5,903.674C926.116,904.238 924.238,906.116 923.674,908.5C923.674,908.5 876.326,908.5 876.326,908.5C875.762,906.116 873.884,904.238 871.5,903.674C871.5,903.674 871.5,896.326 871.5,896.326C873.884,895.762 875.762,893.884 876.326,891.5C876.326,891.5 923.674,891.5 923.674,891.5C924.238,893.884 926.116,895.762 928.5,896.326ZM900,893.5C896.413,893.5 893.5,896.413 893.5,900C893.5,903.587 896.413,906.5 900,906.5C903.587,906.5 906.5,903.587 906.5,900C906.5,896.413 903.587,893.5 900,893.5ZM900,896.5C901.932,896.5 903.5,898.068 903.5,900C903.5,901.932 901.932,903.5 900,903.5C898.068,903.5 896.5,901.932 896.5,900C896.5,898.068 898.068,896.5 900,896.5ZM877.5,901.5L887.5,901.5C888.328,901.5 889,900.828 889,900C889,899.172 888.328,898.5 887.5,898.5L877.5,898.5C876.672,898.5 876,899.172 876,900C876,900.828 876.672,901.5 877.5,901.5ZM912.5,901.5L922.5,901.5C923.328,901.5 924,900.828 924,900C924,899.172 923.328,898.5 922.5,898.5L912.5,898.5C911.672,898.5 911,899.172 911,900C911,900.828 911.672,901.5 912.5,901.5ZM945.5,853L900,853C899.818,853 899.637,853.033 899.467,853.098L863.967,866.598C863.577,866.746 863.266,867.051 863.109,867.438C862.953,867.825 862.965,868.26 863.142,868.638L866.488,875.758C866.8,876.422 867.547,876.763 868.254,876.563L900.112,867.542L909.344,868.739C909.344,868.739 899.718,870.581 899.718,870.581C899.011,870.717 898.5,871.335 898.5,872.055L898.5,877.529C898.5,878.357 899.172,879.029 900,879.029L919.481,879.029C919.751,879.029 920.016,878.956 920.248,878.818L934,870.638L934,874.5C934,875.328 934.672,876 935.5,876L945.5,876C946.328,876 947,875.328 947,874.5L947,854.5C947,853.672 946.328,853 945.5,853ZM934,867.147C934,867.147 919.069,876.029 919.069,876.029C919.069,876.029 901.5,876.029 901.5,876.029C901.5,876.029 901.5,873.295 901.5,873.295C901.5,873.295 919.092,869.928 919.092,869.928C919.815,869.79 920.331,869.146 920.309,868.41C920.287,867.674 919.733,867.062 919.003,866.967L900.193,864.527C899.992,864.501 899.787,864.516 899.591,864.571L868.661,873.33C868.661,873.33 866.546,868.827 866.546,868.827C866.546,868.827 900.276,856 900.276,856C900.276,856 934,856 934,856L934,867.147ZM937,856L944,856C944,856 944,873 944,873L937,873L937,856Z" />
          </g>
        </g>
      </svg>
    </svg>
  );
}

function EnergySharingIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <svg
        fill="#000000"
        height="30px"
        width="30px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 505 505"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path
                d="M93.114,279.32c0-3.491,0-6.982,0-11.636c0-73.309,48.873-137.309,119.854-157.091c5.818-1.164,9.309-8.145,8.146-13.964
				c-1.164-5.818-8.146-9.309-13.964-8.146c-81.455,22.109-137.309,95.418-137.309,179.2c0,4.655,0,8.146,0,12.8
				c1.164,19.782-8.145,39.564-25.6,51.2c-5.818-19.782-9.309-41.891-9.309-64c0-109.382,79.127-201.309,186.182-217.6v8.145
				c0,4.655,2.327,9.309,6.982,10.473c1.164,1.164,3.491,1.164,4.655,1.164c3.491,0,5.818-1.164,8.145-3.491l23.273-23.273
				c4.655-4.655,4.655-11.636,0-16.291L240.896,3.538c-3.491-3.491-8.145-4.655-12.8-2.327c-4.655,1.164-6.982,5.818-6.982,10.473
				v13.964C101.26,43.102,11.66,145.502,11.66,267.684c0,29.091,4.655,58.182,15.127,86.109c1.164,3.491,3.491,5.818,6.982,6.982
				c1.164,0,2.327,0,4.655,0c1.164,0,3.491,0,4.655-1.164C75.66,345.647,95.442,313.065,93.114,279.32z"
              />
              <path
                d="M439.878,409.647l-4.655-3.491c-27.927-18.618-64-18.618-93.091,0c-25.6,16.291-55.855,24.436-86.109,24.436
				c-40.727,0-80.291-15.127-110.545-43.055c-4.655-4.655-11.636-4.655-16.291,1.164c-4.655,4.655-4.655,11.636,1.164,16.291
				c33.745,31.418,79.127,48.873,125.673,48.873c34.909,0,68.655-9.309,97.745-27.927c19.782-11.636,41.891-13.964,60.509-4.655
				c-40.727,43.055-97.745,67.491-158.255,67.491c-65.164,0-125.673-27.927-167.564-76.8l9.309-5.818
				c3.491-2.327,5.818-6.982,4.655-11.636c-1.164-4.655-4.655-8.146-9.309-9.309l-32.582-5.818
				c-5.818-1.164-12.8,3.491-13.964,9.309l-5.818,32.582c-1.164,4.655,1.164,9.309,4.655,11.636
				c2.327,1.164,4.655,2.327,5.818,2.327c2.327,0,4.655-1.164,6.982-2.327l10.473-6.982
				c47.709,54.691,114.036,86.109,187.345,86.109c70.982,0,139.636-31.418,186.182-84.945c2.327-2.327,3.491-5.818,2.327-9.309
				C444.533,414.302,442.205,411.974,439.878,409.647z"
              />
              <path
                d="M493.405,361.938l-10.473-4.655c11.636-29.091,17.455-58.182,17.455-89.6c0-115.2-82.618-216.436-195.491-239.709
				c-3.491-1.164-6.982,0-9.309,2.327c-3.491,2.327-4.655,5.818-4.655,9.309v11.636c0,30.255,16.291,59.345,44.218,74.473
				c51.2,27.927,83.782,82.618,83.782,141.964c0,15.127-2.327,29.091-5.818,43.055c-1.164,5.818,2.327,12.8,8.145,13.964
				c5.818,1.164,12.8-2.327,13.964-8.146c4.655-16.291,6.982-32.582,6.982-50.036c0-67.491-37.236-130.327-96.582-162.909
				c-18.618-10.473-30.255-29.091-31.418-50.036c95.418,25.6,162.909,112.873,162.909,212.945c0,27.927-4.655,54.691-15.127,80.291
				l-10.473-4.655c-4.655-2.327-9.309-1.164-12.8,2.327s-4.655,8.145-3.491,12.8l11.636,31.418
				c1.164,4.655,5.818,8.145,10.473,8.145c1.164,0,2.327,0,3.491-1.164l31.418-11.636c4.655-1.164,6.982-5.818,8.145-10.473
				C500.387,368.92,498.06,364.265,493.405,361.938z"
              />
              <path
                d="M175.733,296.774c2.327,3.491,5.818,5.818,10.473,5.818h58.182c6.982,0,11.636-4.655,11.636-11.636
				s-4.655-11.636-11.636-11.636h-37.236l54.691-89.6l-5.818,53.527c0,3.491,1.164,6.982,2.327,9.309s5.818,3.491,9.309,3.491
				h37.236l-54.691,89.6l1.164-6.982c1.164-5.818-3.491-11.636-10.473-12.8c-5.818-1.164-11.636,3.491-12.8,10.473l-6.982,58.182
				c-1.164,5.818,2.327,10.473,8.145,12.8c1.164,0,2.327,1.164,3.491,1.164c3.491,0,8.145-2.327,10.473-5.818l93.091-151.273
				c2.327-3.491,2.327-8.146,0-11.636c-2.327-4.655-5.818-6.982-10.473-6.982H280.46l10.473-91.927
				c1.164-5.818-2.327-10.473-8.146-12.8c-4.655-2.327-10.473,0-13.964,4.655l-93.091,151.273
				C174.569,288.629,174.569,293.284,175.733,296.774z"
              />
            </g>
          </g>
        </g>
      </svg>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="128"
        height="128"
        xmlSpace="preserve"
        version="1.1"
        viewBox="0 0 128 128"
      >
        <image
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,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"
        />
      </svg>
    </svg>
  );
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <svg
        id="Regular"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
      >
        <title />
        <polygon
          className="cls-1"
          points="12.22 12.51 6.87 7.62 1.49 12.51 4.43 12.51 4.43 23.25 9.32 23.25 9.32 12.51 12.22 12.51"
        />
        <polygon
          className="cls-1"
          points="22.51 18.36 17.16 13.47 11.78 18.36 14.71 18.36 14.71 23.25 19.6 23.25 19.6 18.36 22.51 18.36"
        />
        <polyline
          className="cls-1"
          points="11.78 12.51 11.78 23.25 14.21 23.25"
        />
        <polyline
          className="cls-1"
          points="16.17 14.37 16.17 5.64 19.63 5.64 13.82 0.75 8.34 5.64 11.78 5.64 11.78 12.1"
        />
      </svg>{" "}
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

export function Features() {
  return (
    <section
      id="discover"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Now is the time to build your Energy Community!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            The inspiration for EnegyLink emerged from the growing need to
            address climate change and the desire to empower local communities
            in managing their energy resources.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-300 p-8 hover:border-gray-600"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg  font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
