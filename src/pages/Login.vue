<template>
  <div
    class="min-h-screen flex flex-col gap-4 mx-6 my-8 md:w-2/4 md:m-auto lg:w-2/6 xl:w-1/6"
  >
    <div class="text-center">
      <img
        class="mx-auto w-48"
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        alt="logo"
      />
      <h4 class="text-xl font-semibold mt-1 pb-1">We are The Lotus Team</h4>
    </div>
    <form>
      <div class="mb-4">
        <input
          type="email"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
      <div class="text-center pt-1 pb-1">
        <button
          class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-[#013c44] hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Log in
        </button>
      </div>
      <p class="text-sm text-center">Don`t have an account? Register here.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style></style>
