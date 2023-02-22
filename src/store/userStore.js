import { defineStore } from "pinia";

export const userStore = defineStore('user',{
    state:()=>({
        users:[
            {
                name: 'Frozen Yogurt',
                email: 'ankit@gmail.com',
                school: 'Ankur Higher Secondary School',
                collage: 'Mandsour University',
              },
        ]
    })
})