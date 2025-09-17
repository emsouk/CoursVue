 <!-- Parents  -->

<template> 
    <h1 className="pt-12 fw-bold" style="text-align: center">Ici ! La page des copains 👯 </h1>

    <NewFriend @add-friend="addNewFriend"></NewFriend>
    <Devoir
    :superFormateur="superFormateur"
    @babar="mangeTaCarottecarotte($e)"
   
 /> 
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
    @suppr="deleteFriend($event)"
    @makePremium="makePremium($event)"
    ></props>


</template>

<script setup>
import NewFriend from './NewFriend.vue';
import Devoir from './Devoir.vue';
import Props from './props.vue';
import {ref} from 'vue';


const superFormateur = ref("Jeff")
console.log(superFormateur);
const carotte = ref("");
console.log("ceci est une carotte", carotte.value);

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

function makePremium(id){
    console.log(id);
    const togglepremium = lesAmis.value.find((element) => element.id === id);
    togglepremium.premium = !togglepremium.premium;
}

function mangeTaCarotte(any){
console.log("brouette")
}

// const addNewFriend = (name, tel, mail) => {
//     console.log('On arrive dans la fonction addNewFriend');
//     console.log('name', name);
//     console.log('tel', tel);
//     console.log('mail', mail);
// 	const newFriend = {
//         id: Math.random().toString(),
//         name,
//         tel,
//         mail,
//         premium: false
//     };

// 	lesAmis.value.push(newFriend);
// }
</script>