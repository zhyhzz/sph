<template>
    <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要引入 -->
    <!-- <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/> -->
    <!-- <Floor/> -->
    <button @click="add">                 +1</button>
    <span>数据{{count}}</span>
    <button @click="minus">-1</button>
    </div>
</template>
<script>
    //引入其余的组件
    import ListContainer from '@/pages/Home/ListContainer';
    import Brand from "@/pages/Home/Brand";
    import Floor from "@/pages/Home/Floor";
    import Like from "@/pages/Home/Like";
    import Rank from "@/pages/Home/Rank";
    import Recommend from "@/pages/Home/Recommend";

    import {mapState} from "vuex";
    export default {
        name: "Home",
        components: {
            ListContainer, Brand, Floor, Like, Rank, Recommend
        },
        computed: {
            //mapState相当于this.$store.state
            ...mapState(['count'])
        },
        methods: {
            add() {
                //派发action
                this.$store.dispatch('add');
                // count++;
            },
            minus() {
                this.$store.dispatch('min');
            }
        }
    }
</script>
<style></style>