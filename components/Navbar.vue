<template>
  <nav
    class="fixed top-0 w-full py-3 mx-auto font-sans border-b border-gray-600 bg-gu-navy/95 backdrop-blur-sm text-gu-white">
    <div class="flex items-center justify-between w-full px-4 py-2 mx-auto max-w-7xl md:px-6">
      <div class="flex items-center gap-3 font-bold">
        <img src="../assets/img/logo.jpeg" class="rounded-full h-11">
        <span class="hidden lg:block">GlowUp Career Consultant</span>
      </div>

      <div class="flex gap-2">
        <a href="#"
          class="flex items-center gap-2 px-4 py-2 font-bold rounded-sm bg-gu-yellow hover:bg-yellow-700 w-fit md:hidden">
          <img src="../assets/img/whatsapp.svg" class="h-4">
          <span>Konsultasi</span>
        </a>

        <input class="hidden peer" type="checkbox" name="menubar" id="menubar">
        <label for="menubar"
          class="relative block p-1 transition-all rounded-md cursor-pointer bg-primary peer-checked:menubar hover:bg-slate-900 active:bg-slate-900 md:hidden">
          <img src="../assets//img/menu-button.svg" class="h-8">
        </label>
        <ul
          class="fixed inset-0 pt-24 transition-all duration-75 ease-in-out -translate-y-full bg-primary peer-checked:translate-y-0 h-fit md:translate-y-0 -z-10 md:static md:pt-0 md:bg-transparent md:z-10 md:h-auto md:w-fit">
          <li
            class="flex flex-col px-6 py-0 space-y-4 shadow-md md:bg-transparent md:shadow-none md:px-0 md:py-0 md:items-center md:flex-row md:space-y-0 md:gap-5 xl:gap-10">
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Beranda</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Layanan</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Tentang Kami</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Testimoni</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Kontak</a>
            <a href="#" class="items-center hidden gap-2 px-4 py-2 font-bold rounded-sm bg-gu-yellow w-fit md:flex">
              <img src="../assets/img/whatsapp.svg" class="h-4">
              <span>Konsultasi</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>