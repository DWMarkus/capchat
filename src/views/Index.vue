<template>
    <div>
        <NavBarConnexion />
    </div>
</template>
<script>
import NavBarConnexion from '@/components/NavBarConnexion.vue'

export default {
    components: {
        NavBarConnexion
    },
    data() {
        return {
            st1: false,
            st2: false,
        }
    },
    created() {
        if (localStorage.getItem('token')) {
            this.$router.push('/MonCompte')
        }
    },
    mounted() {
        setTimeout(() => {
            this.st1 = true;
        }, 1500);
        setTimeout(() => {
            this.st2 = true;
        }, 2500);
    }
}
</script>

<style scoped>
/* .containers {
    display: inline-block;
    min-width: 100vw;
    vertical-align: middle;
} */
</style>