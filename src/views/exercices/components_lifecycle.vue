<template>
    <div className="mt-12">
        <div class="meteo">
            <h1>Une simple requête HTTP GET avec la météo</h1>
            <p>Aujourd'hui on est : {{ weatherData.fcst_day_0.day_long }} </p>
            <p>Température max : {{ weatherData.fcst_day_0.tmax }}</p>
            <p>Température min : {{ weatherData.fcst_day_0.tmin }}</p>
        </div> <div class="meteo">
        <h1>Une simple requête HTTP GET avec les pokemons</h1>
            

``
        </div>
        
    </div>

</template>

<script setup>
import {ref, onMounted} from 'vue';


const weatherData = ref(null);

onMounted(async () =>{
    console.log('Le compostant est monté')
    await apiMeteo();
})


    const apiMeteo = async () => {
            try {
                const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
                const data = await response.json();
                weatherData.value = data;
                console.log(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données météo :', error);
            }
        };
        apiMeteo();

    
</script>