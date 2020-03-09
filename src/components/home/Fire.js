import React, { useState, useEffect } from "react";

const Fire = () => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let lastOpacity = randomIntFromInterval(750, 935) / 1000;
  let lastScale = randomIntFromInterval(730, 999) / 1000;

  const [style, setStyle] = useState({
    opacity: lastOpacity,
    transform: `scale(${lastScale})`
  });

  useEffect(() => {
    let time = randomIntFromInterval(160, 200);
    let addToNumOpacity = true;
    let addToNumScale = true;

    const interval = setInterval(() => {
      if (addToNumScale) {
        lastScale += randomIntFromInterval(40, 115) / 1000;
        if (lastScale >= 1) {
          addToNumScale = false;
          lastScale = 1;
        }
      } else if (!addToNumScale) {
        lastScale -= randomIntFromInterval(40, 115) / 1000;
        if (lastScale < 0.82) {
          addToNumScale = true;
          lastScale = 0.82;
        }
      }

      if (addToNumOpacity) {
        lastOpacity += randomIntFromInterval(65, 170) / 1000;
        if (lastOpacity >= 0.9) {
          addToNumOpacity = false;
          lastOpacity = 0.9;
        }
      } else if (!addToNumOpacity) {
        lastOpacity -= randomIntFromInterval(65, 170) / 1000;
        if (lastOpacity < 0.7) {
          addToNumOpacity = true;
          lastOpacity = 0.7;
        }
      }
      time = randomIntFromInterval(160, 200);
      setStyle({
        opacity: lastOpacity,
        transform: `scale(${lastScale})`
      });
    }, time);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <svg class="fire" width="160" height="140" alt="Fire Animation">
        <defs>
          <path id="a" d="M.5247 135.946h157.275V.7257H.5247V135.946z"></path>
          <path id="c" d="M.8954 122.946h132.534V.0957H.8954z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g style={style} id="fire-light">
            <g transform="translate(1 3.74)">
              <path
                class="light-large"
                fill="#1B2138"
                d="M157.7997 79.3627c0-43.43-35.207-78.637-78.637-78.637-43.431 0-78.638 35.207-78.638 78.637s35.207 78.637 78.638 78.637c43.43 0 78.637-35.207 78.637-78.637"
              ></path>
            </g>
            <g transform="translate(13 16.74)">
              <path
                class="light-medium"
                fill="#232A45"
                d="M133.4294 66.3627c0-36.598-29.669-66.267-66.267-66.267S.8954 29.7647.8954 66.3627s29.669 66.267 66.267 66.267 66.267-29.669 66.267-66.267"
              ></path>
            </g>
            <path
              class="light-small"
              fill="#2A324F"
              d="M128.9528 83.1027c0-26.946-21.844-48.79-48.79-48.79-26.947 0-48.791 21.844-48.791 48.79 0 26.946 21.844 48.79 48.791 48.79 26.946 0 48.79-21.844 48.79-48.79"
            ></path>
          </g>
          <path
            class="fire-floating"
            fill="#66739D"
            d="M105.0058 64.0834c-1.286 0-2.338 1.052-2.338 2.338v4.074c0 1.286 1.052 2.338 2.338 2.338s2.338-1.052 2.338-2.338v-4.074c0-1.286-1.052-2.338-2.338-2.338m-39.497 3.5c-1.916 0-3.484-1.568-3.484-3.484v-2.782c0-1.916 1.568-3.484 3.484-3.484s3.484 1.568 3.484 3.484v2.782c0 1.916-1.568 3.484-3.484 3.484"
            style={{
              opacity: "0.761672;",
              transform: "translateZ(0px) translateY(-7.60418px);"
            }}
          ></path>
          <path
            class="logs"
            fill="#3E4455"
            d="M64.5504 119.686h45v20h-45c-5.523 0-10-4.477-10-10s4.477-10 10-10"
          ></path>
          <path
            class="logs"
            fill="#5E6271"
            d="M99.5504 129.686c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
          ></path>
          <path
            class="logs"
            stroke="#676B78"
            stroke-width="3"
            d="M104.5504 129.686c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5-5-2.239-5-5z"
          ></path>
          <path
            class="fire-outer"
            fill="#66739D"
            d="M80.1627 124.686c15.012 0 27.181-12.169 27.181-27.181V79.722c0-1.288-1.044-2.332-2.332-2.332h-.012c-1.288 0-2.332 1.044-2.332 2.332v5.581c0 1.21-.982 2.192-2.192 2.192-1.211 0-2.192-.982-2.192-2.192V64.297c0-3.467-2.811-6.278-6.278-6.278h-.012c-3.467 0-6.278 2.811-6.278 6.278v11.621c0 1.531-1.24 2.771-2.771 2.771h-.011c-1.53 0-2.771-1.24-2.771-2.771v-.953c0-3.225-2.614-5.839-5.84-5.839h-.011c-3.225 0-5.84 2.614-5.84 5.839v8.62c0 2.582-2.093 4.676-4.676 4.676s-4.676-2.094-4.676-4.676v-4.284c0-1.695-1.374-3.069-3.069-3.069-1.695 0-3.069 1.374-3.069 3.069v18.204c0 15.012 12.169 27.181 27.181 27.181"
          ></path>
          <path
            class="fire-inner"
            fill="#9BA9CC"
            d="M60.9812 97.5048c0 10.822 9.008 19.579 19.92 19.167 10.38-.392 18.442-9.25 18.442-19.637v-1.642c0-2.38-1.929-4.309-4.309-4.309-2.304 0-4.2 1.812-4.304 4.113l-.036.654c-.015 1.513-1.247 2.733-2.76 2.733h-.007c-1.525 0-2.76-1.236-2.76-2.76v-3.161c0-3.496-2.834-6.329-6.329-6.329-3.496 0-6.329 2.833-6.329 6.329v5.751c0 1.198-.972 2.17-2.17 2.17h-.002c-1.199 0-2.17-.972-2.17-2.17v-1.49c0-1.983-1.608-3.59-3.59-3.59h-.006c-1.983 0-3.59 1.607-3.59 3.59v.581zm31.4026-10.7964c-1.375 0-2.5-1.125-2.5-2.5v-4.25c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5v4.25c0 1.375-1.125 2.5-2.5 2.5"
          ></path>
          {/* <path
            class="specks"
            fill="#9BA9CC"
            d="M80.1628 49.1919c-1.297 0-2.359-1.061-2.359-2.359 0-1.297 1.062-2.358 2.359-2.358s2.359 1.061 2.359 2.358c0 1.298-1.062 2.359-2.359 2.359m-19.1816-4.5853c-.992 0-1.804-.812-1.804-1.804 0-.993.812-1.805 1.804-1.805s1.804.812 1.804 1.805c0 .992-.812 1.804-1.804 1.804M36.3838 78.4584c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m78.1666 24.0512c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            style={
              ({ opacity: 0.165014 },
              { transform: "translateZ(0px) translateY(-25.8566px);" })
            }
          ></path>
          <path
            class="specks"
            fill="#66739D"
            d="M77.3838 25.0834c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            style={
              ({ opacity: 0.502768 },
              { transform: "translateZ(0px) translateY(-19.428px);" })
            }
          ></path>
          <path
            class="specks"
            fill="#9BA9CC"
            d="M73.3838 32.2249c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            style={
              ({ opacity: 0.766917 },
              { transform: "translateZ(0px) translateY(-7.20437px)" })
            }
          ></path>
          <path
            class="specks"
            fill="#66739D"
            d="M116.0333 50.1919c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m3.5171 42.9108c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            style={
              ({ opacity: 0 },
              { transform: "translateZ(0px) translateY(31px);" })
            }
          ></path> */}
          <path
            class="logs"
            fill="#5E6271"
            d="M46.3838 119.686h36v20h-36c-5.523 0-10-4.477-10-10s4.477-10 10-10"
          ></path>
          <path
            class="logs"
            fill="#676B78"
            d="M72.3838 129.686c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
          ></path>
          <path
            class="logs"
            stroke="#5E6271"
            stroke-width="3"
            d="M77.3838 129.686c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5-5-2.239-5-5z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Fire;
