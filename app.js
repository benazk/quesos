const { createApp } = Vue;

createApp({
  template: `
    <div id="contenido">
      <h1>Lista de Quesos</h1>
      Puedes hacer click en las imágenes para escuchar un sonido
      <div class="itemsporpag">
        <strong>Ítems Por Página (Max 6)</strong>
        <button @click="itemsPerPage--; currentPage = 1" :disabled="itemsPerPage <= 3">-</button>
        <input v-model="itemsPerPage" type="number" max="6" min="3" readonly>
        <button @click="itemsPerPage++; currentPage = 1" :disabled="itemsPerPage >= 6">+</button>
      </div>
      <div class="queso">
        <div v-for="queso in paginatedCheeses" :key="queso.id" >
          <img :src="queso.imagen" @click="queso.audio.play()" :alt="queso.queso" width="100" height="100" />
          <div>
            <strong>Queso {{ queso.queso }}</strong> 
          </div>
          <div>
            {{ queso.precioKilo.toLocaleString() }}€/kilo
          </div>
          
        </div>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  `,
  data() {
    return {
      cheeses: [
        { id: 1, queso: "Gorgonzola", precioKilo: 13.63, imagen: "img/gorgonzola.webp", audio: new Audio('audio/gorgonzola.mp3') },
        { id: 2, queso: "Cheddar", precioKilo: 13.95, imagen: "img/cheddar.webp", audio: new Audio('audio/cheddar.mp3') },
        { id: 3, queso: "Edam", precioKilo: 17.99, imagen: "img/edam.webp", audio: new Audio('audio/edam.mp3') },
        { id: 4, queso: "Azul", precioKilo: 14.00, imagen: "img/azul.webp", audio: new Audio('audio/azul.mp3') },
        { id: 5, queso: "Idiazabal", precioKilo: 26, imagen: "img/idiazabal.webp", audio: new Audio('audio/idiazabal.mp3') },
        { id: 6, queso: "Parmesano", precioKilo: 27.81, imagen: "img/parmesano.webp", audio: new Audio('audio/parmesano.mp3') },
        { id: 7, queso: "Hávarti", precioKilo: 15.29, imagen: "img/havarti.webp", audio: new Audio('audio/havarti.mp3') },
        { id: 8, queso: "Fresco", precioKilo: 17.52, imagen: "img/fresco.webp", audio: new Audio('audio/fresco.mp3') },
        { id: 9, queso: "De Burgos", precioKilo: 8.90, imagen: "img/burgos.webp", audio: new Audio('audio/burgos.mp3') },
        { id: 10, queso: "Brié", precioKilo: 14.90, imagen: "img/brie.webp", audio: new Audio('audio/brie.mp3') },
        { id: 11, queso: "Mozarella", precioKilo: 15.3, imagen: "img/mozarella.webp", audio: new Audio('audio/mozarella.mp3') },
        { id: 12, queso: "Burrata", precioKilo: 22.5, imagen: "img/burrata.webp", audio: new Audio('audio/burrata.mp3') },
        { id: 13, queso: "Cámembert", precioKilo: 10.5, imagen: "img/camembert.webp", audio: new Audio('audio/camembert.mp3') },
        { id: 14, queso: "Roquefort", precioKilo: 22.43, imagen: "img/roquefort.webp", audio: new Audio('audio/roquefort.mp3') },
        { id: 15, queso: "Babybel", precioKilo: 25.33, imagen: "img/babybel.webp", audio: new Audio('audio/babybel.mp3') },
        { id: 16, queso: "Crema", precioKilo: 5.7, imagen: "img/crema.webp", audio: new Audio('audio/crema.mp3') },
      ],
      currentPage: 1,
      itemsPerPage: 3,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cheeses.length / this.itemsPerPage);
    },
    paginatedCheeses() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.cheeses.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
