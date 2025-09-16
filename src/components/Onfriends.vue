<template>
    <h1>Ici La page des Copains ! </h1>
    <!-- <OneFriend 
    id="toto"
    unAmiName="totoName"
    unAmiPhone="totoPhone"
    unAmiMail="totoMail"
    :premium="true"
    ></OneFriend> -->

    <!-- On arrive a l'utiliser une fois on va le répéter plusieurs fois (cf autant de fois qu'on a des elements dans le tableau) -->
    <props 
    v-for="ami in lesAmis"
    :id="ami.id"
    :unAmiName="ami.name"
    :unAmiPhone="ami.phone"
    :unAmiMail="ami.email"
    :premium="ami.premium"
    @suppr = deleteFriend($event)
    ></props>



</template>

<script setup>
import Props from './props.vue';
import {ref} from 'vue';


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lamouette',
        name: 'COCO LA MOUETTE',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'loulou',
        name: "LOULOU",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);

function deleteFriend(id){
    console.log(id);
    lesAmis.value.splice(id, 1);
}
</script>