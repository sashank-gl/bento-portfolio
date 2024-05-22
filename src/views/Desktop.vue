<template>
  <div class="flex h-screen w-full flex-col items-center justify-center p-6">
    <!-- Grid Layout -->

    <div class="grid h-full w-full grid-cols-10 grid-rows-5 gap-4 text-white">
      <!-- Project 1 -->

      <div
        class="relative col-span-4 group overflow-hidden row-span-2 bg-primary"
        :class="gridItemClasses"
      >
        <h2
          class="font-semibold text-white text-5xl z-10 group-hover:-translate-y-20 transition-all duration-500"
        >
          DigiFinds
        </h2>
        <img
          src="@/assets/ecom.jpg"
          class="group-hover:opacity-0 opacity-15 absolute size-full object-cover transition-opacity duration-500"
        />
        <div
          class="group-hover:opacity-100 absolute top-10 h-full flex justify-center items-center gap-6 flex-col text-center px-20 text-xl transition-opacity duration-500 opacity-0"
        >
          <p>
            DigiFinds curates unique treasures for discovery-loving shoppers.
            Find hidden gems in a secure, user-friendly marketplace.
          </p>
          <div class="flex gap-4">
            <a href="">
              <button
                class="rounded flex justify-center items-center gap-2 bg-white text-primary py-2 px-4 active:scale-95 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 fill-primary"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p class="text-sm">Visit Website</p>
              </button>
            </a>
            <a href="">
              <button
                class="rounded flex justify-center items-center gap-2 bg-white text-primary py-2 px-4 active:scale-95 transition-transform duration-300"
              >
                <svg
                  stroke="currentColor"
                  class="w-6 h-6 fill-primary"
                  viewBox="0 0 256 249"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g>
                    <path
                      d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
                    />
                    <path
                      d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
                    />
                  </g>
                </svg>

                <p class="text-sm">View Code</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Name -->

      <div
        class="col-span-6 row-span-1 flex-col bg-primary"
        :class="gridItemClasses"
      >
        <h2 class="text-7xl font-semibold text-white">Charlie Green</h2>
      </div>

      <!-- Bio -->

      <div
        class="col-span-4 row-span-3 text-primary px-16 italic text-2xl text-center"
        :class="gridItemClasses"
      >
        <p>
          "Fresh out of Milan, I bring a passion for web development fueled by
          Vue.js, Tailwind CSS, and JavaScript. Eager to learn, collaborate, and
          contribute to a team that values innovation and creating beautiful
          user experiences."
        </p>
      </div>

      <!-- User Picture -->

      <div
        class="col-span-2 row-span-3 group overflow-hidden relative bg-primary"
        :class="gridItemClasses"
      >
        <img
          src="@/assets/charlie.jpg"
          white="Charlie Green"
          class="object-cover size-full group-hover:scale-105 transition-transform duration-500"
        />
        <div
          class="absolute size-full bg-primary/30 hover:bg-primary/0 transition-colors duration-500"
        />
      </div>

      <!-- Project 2 -->

      <div
        class="relative group overflow-hidden flex-col justify-center items-center col-span-4 bg-primary row-span-2"
        :class="gridItemClasses"
      >
        <h2
          class="font-semibold text-white text-5xl z-10 group-hover:-translate-y-20 transition-all duration-500"
        >
          The Midnight Baker
        </h2>
        <img
          src="@/assets/restaurant.jpg"
          class="group-hover:opacity-0 opacity-15 absolute size-full object-cover"
        />

        <div
          class="group-hover:opacity-100 absolute top-10 h-full flex justify-center items-center gap-6 flex-col text-center px-20 text-xl transition-opacity duration-500 opacity-0"
        >
          <p>
            Warm, handcrafted pastries for night owls & dreamers. Unique
            flavors, finest ingredients. Satisfy your deepest cravings, anytime
          </p>
          <div class="flex gap-4">
            <a href="">
              <button
                class="rounded flex justify-center items-center gap-2 bg-white text-primary py-2 px-4 active:scale-95 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 fill-primary"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p class="text-sm">Visit Website</p>
              </button></a
            >
            <a href="">
              <button
                class="rounded flex justify-center items-center gap-2 bg-white text-primary py-2 px-4 active:scale-95 transition-transform duration-300"
              >
                <svg
                  stroke="currentColor"
                  class="w-6 h-6 fill-primary"
                  viewBox="0 0 256 249"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g>
                    <path
                      d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
                    />
                    <path
                      d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
                    />
                  </g>
                </svg>

                <p class="text-sm">View Code</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Skills -->

      <div
        class="col-span-7 row-span-1 gap-3 flex-col bg-primary text-white"
        :class="gridItemClasses"
      >
        <div class="flex gap-20 items-center justify-center w-full">
          <svg
            fill="none"
            height="75"
            width="66"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 141.532"
          >
            <path
              d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z"
              fill="#e34f26"
            />
            <path
              d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
              fill="#ef652a"
            />
            <path
              d="m99.49 41.362 1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
              fill="#fff"
            />
          </svg>
          <svg
            fill="none"
            height="75"
            width="66"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 141.53"
          >
            <path
              d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
              fill="#1b73ba"
            />
            <path
              d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
              fill="#1c88c7"
            />
            <path
              d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
              fill="#fff"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 1052 1052"
          >
            <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
            <path
              d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101m-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9"
              fill="#323330"
            />
          </svg>

          <svg
            width="75"
            height="66"
            viewBox="0 0 256 221"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z"
              fill="#41B883"
            />
            <path
              d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0z"
              fill="#41B883"
            />
            <path
              d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0z"
              fill="#35495E"
            />
          </svg>

          <svg
            viewBox="0.15 0.13 799.7 479.69"
            width="82.5"
            height="49.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9q-59.97 79.95-139.95 59.97c-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13M200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83"
              fill="#06b6d4"
            />
          </svg>
        </div>
      </div>

      <!-- Contact -->

      <div
        class="col-span-3 row-span-1 gap-3 flex-col bg-primary text-white"
        :class="gridItemClasses"
      >
        <div class="flex gap-16">
          <a href="mailto:charlie.green@email.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="size-16 fill-white hover:size-20 transition-all duration-500"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </a>

          <a href="https://www.linkedin.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="size-16 fill-white hover:size-20 transition-all duration-500"
            >
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </a>
          <a href="https://twitter.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="size-16 fill-white hover:size-20 transition-all duration-500"
            >
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const gridItemClasses = `rounded-3xl flex justify-center items-center`;
</script>
