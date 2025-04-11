<template>
  <header
    class="fixed z-10 top-0 w-full py-2 mx-auto font-sans border-b border-gray-600 bg-primary/95 backdrop-blur-sm text-white">
    <nav class="flex items-center justify-between w-full px-4 py-2 mx-auto max-w-7xl">
      <a href="#" class="flex items-center gap-3 font-bold">
        <img src="../assets/images/logo.webp" alt="GlowUp Career Consultant" class="rounded-full h-11">
        <span class="hidden lg:block">GlowUp Career Consultant</span>
      </a>

      <div class="flex gap-2">
        <a href="#"
          class="flex items-center gap-2 px-4 py-2 font-bold rounded-sm bg-secondary hover:bg-amber-600 w-fit md:hidden">
          <img src="../assets/images/wa.svg" alt="Contact" class="h-4">
          <span>Konsultasi</span>
        </a>

        <input class="hidden peer" type="checkbox" name="menubar" id="menubar">
        <label for="menubar"
          class="relative block p-1 transition-all rounded-md cursor-pointer bg-slate-800/50 peer-checked:menubar hover:bg-slate-800 active:bg-slate-900 md:hidden">
          <img src="../assets//images/menu-button.svg" alt="Menu" class="h-8">
        </label>
        <ul
          class="fixed inset-0 pt-2 mt-19 transition-all hidden duration-75 ease-in-out bg-slate-800 peer-checked:block h-fit md:translate-y-0 md:block md:relative md:mt-0 md:pt-0 md:bg-transparent md:h-auto md:w-fit">
          <li
            class="flex flex-col px-6 py-2 space-y-4 md:bg-transparent md:px-0 md:py-0 md:items-center md:flex-row md:space-y-0 md:gap-5 lg:gap-8">
            <a href="" class="hover:text-secondary active:text-secondary">Beranda</a>
            <a href="" class="hover:text-secondary active:text-secondary">Layanan</a>
            <a href="" class="hover:text-secondary active:text-secondary">Tentang Kami</a>
            <a href="" class="hover:text-secondary active:text-secondary">Testimoni</a>
            <a href="" class="hover:text-secondary active:text-secondary">Kontak</a>
            <a href="#" class="items-center hidden gap-2 px-4 py-2 font-bold rounded-sm bg-secondary hover:bg-amber-600  w-fit md:flex">
              <img src="../assets/images/wa.svg" alt="Contact" class="h-4">
              <span>Konsultasi</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>