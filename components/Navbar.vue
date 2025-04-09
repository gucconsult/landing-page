<template>
  <nav class="bg-gu-navy relative top-0 font-sans text-gu-white py-3">
    <div class="max-w-[1440px] w-full container mx-auto flex justify-between items-center p-2 md:px-6">
      <div class="flex items-center font-bold gap-3">
        <img src="../assets/img/logo.jpeg" class="h-11 rounded-full">
        <span class="hidden lg:block">GlowUp Career Consultant</span>
      </div>

      <div class="flex gap-2">
        <a href="#" class="flex items-center gap-2 bg-gu-yellow hover:bg-yellow-700 w-fit px-4 py-2 rounded-sm font-bold md:hidden">
          <img src="../assets/img/whatsapp.svg" class="h-4">
          <span>Konsultasi</span>
        </a>
  
        <input class="peer hidden" type="checkbox" name="menubar" id="menubar">
        <label for="menubar"
          class="bg-slate-800 peer-checked:menubar cursor-pointer block relative p-1 rounded-md transition-all hover:bg-slate-900 active:bg-slate-900 md:hidden">
          <img src="../assets//img/menu-button.svg" class="h-8">
        </label>
        <ul
          class="bg-slate-900 -translate-y-full peer-checked:translate-y-0 inset-0 h-fit fixed pt-24 md:translate-y-0 -z-10 transition-all duration-75 ease-in-out md:static md:pt-0 md:bg-transparent md:z-10 md:h-auto md:w-fit">
          <li
            class="shadow-md py-0 flex flex-col px-6 space-y-4 md:bg-transparent md:shadow-none md:px-0 md:py-0 md:items-center md:flex-row md:space-y-0 md:gap-5 xl:gap-10">
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Beranda</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Layanan</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Tentang Kami</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Testimoni</a>
            <a href="" class="hover:text-gu-yellow active:text-gu-yellow">Kontak</a>
            <a href="#" class="hidden items-center gap-2 bg-gu-yellow w-fit px-4 py-2 rounded-sm font-bold md:flex">
              <img src="../assets/img/whatsapp.svg" class="h-4">
              <span>Konsultasi</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>