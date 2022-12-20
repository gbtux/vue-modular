<template>
  <header class="sticky top-0 z-50">
    <nav class="w-full flex flex-wrap items-center justify-between py-3 bg-indigo-900 shadow-lg navbar navbar-expand-lg navbar-light">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="flex flex-grow items-center">
          <a class="pr-2 text-2xl font-bold text-white" href="#">Equeep</a>
          <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto ml-9 text-xl">
            <li class="nav-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" class="w-5 h-5 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" placeholder="search for tasks ..."
                     class=" bg-transparent border-0 outline-none focus:ring-0 text-lg"/>
            </li>
          </ul>
        </div>
        <div class="flex items-center relative">
          <h3 class="mr-3 text-white">M. John Doe</h3>
          <img src="https://randomuser.me/api/portraits/men/75.jpg"
               width="36" height="36"
               class="rounded-full object-cover"/>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>
