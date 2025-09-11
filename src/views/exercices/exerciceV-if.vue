 <template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  type="text" v-model="film" placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3" />

            <button @click="ajouterFilm" class="btn btn-primary mb-4">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <div >
                <h3 class="text-xl font-semibold mb-2">Votre film ajouté : </h3>
            </div>
             
            <div v-if="tableauFilms.length > 0">
                <ul>
                    <li style= "border: 1px solid black; margin: 8px; text-align: center;" v-for="(item, index) in tableauFilms" :key="index">
                    {{ index + 1 }}. {{ item }} 
                    </li>
                </ul>
            </div>    
            <div v-else>
                <p>Pas encore de films dans votre liste ? Veuillez en ajouter un.</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const film = ref('');
const tableauFilms = ref([]);


const ajouterFilm = () => {
    if (film.value.trim() !== '') {
        tableauFilms.value.push(film.value.trim());
        film.value = '';
    }
};
</script>
