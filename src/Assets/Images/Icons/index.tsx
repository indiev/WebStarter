import Svg from 'Components/Svg/Svg';

export const logo = () => (
  <Svg height={12} width={58}>
    <path
      d="M36.029 7.349L33.184.315h-1.803l-2.83 7.036L25.74.315h-2.102L28.2 11.683h.67l3.404-8.378 3.369 8.378h.68L40.898.315H38.81L36.029 7.35zM44.332.315h-2.05v11.32h2.05V.315zM55.62.315V8.3L48.69.315h-1.62v11.32h1.959V3.727l6.865 7.908h1.698V.315H55.62zM17.623 0a6.009 6.009 0 00-6.003 6c0 3.309 2.692 6 6 6 3.309 0 6-2.691 6-6s-2.689-6-5.997-6zm3.913 6a3.918 3.918 0 01-3.913 3.913A3.918 3.918 0 0113.71 6a3.918 3.918 0 013.913-3.913A3.918 3.918 0 0121.536 6zM8.683 8.63a3.776 3.776 0 01-2.666 1.175 3.74 3.74 0 01-2.712-1.056 3.783 3.783 0 01-1.171-2.664A3.772 3.772 0 013.187 3.37 3.779 3.779 0 015.86 2.197c.988-.045 1.946.328 2.709 1.056l.18.173 1.475-1.543-.18-.173C8.933.647 7.44.062 5.833.062h-.03a5.907 5.907 0 00-4.159 1.831A5.891 5.891 0 00.002 6.13a5.906 5.906 0 001.828 4.161 5.908 5.908 0 004.104 1.648l.133-.002a5.907 5.907 0 004.159-1.831l.173-.18L8.856 8.45l-.173.18z"
      fill="#2771FF"
    />
  </Svg>
);

export const close = () => (
  <Svg>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const home = () => (
  <Svg height={16} width={14.4}>
    <path
      d="M7.2 0L0 5.6v8.8A1.6 1.6 0 001.6 16h3.2V8h4.8v8h3.2a1.6 1.6 0 001.6-1.6V5.6L7.2 0z"
      fill="#84C5FF"
    />
    <path d="M9.6 7.96H4.8v8h4.8v-8z" fill="#1890FF" />
  </Svg>
);

export const check = () => (
  <Svg height={10} width={14}>
    <path
      d="M12.333 1L5 8.333 1.667 5"
      stroke="#1890FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export const search = () => (
  <Svg height={16} width={16}>
    <path
      d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
      stroke="#1890FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export const shield = () => (
  <Svg height={16} width={13}>
    <path d="M0 2.4V8c0 4.8 6.4 8 6.4 8V0L0 2.4z" fill="#57AEFF" />
    <path d="M6.4 0v16s6.4-3.2 6.4-8V2.4L6.4 0z" fill="#84C5FF" />
  </Svg>
);

export const graph = () => (
  <Svg height={16} width={13}>
    <path
      clipRule="evenodd"
      d="M6.367 4.898c.812 0 1.47.658 1.47 1.47v8.163a1.47 1.47 0 01-2.939 0V6.367c0-.811.658-1.47 1.47-1.47z"
      fill="#91CAFF"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M11.265 0c.812 0 1.47.658 1.47 1.47v13.06a1.47 1.47 0 11-2.94 0V1.47c0-.812.659-1.47 1.47-1.47z"
      fill="#B6DCFF"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M1.47 9.796c.81 0 1.469.658 1.469 1.47v3.264a1.47 1.47 0 11-2.939 0v-3.265c0-.811.658-1.47 1.47-1.47z"
      fill="#1890FF"
      fillRule="evenodd"
    />
  </Svg>
);
