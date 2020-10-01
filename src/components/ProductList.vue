<template>
  <!-- que muestre solo si hay productos en el raid por eso la condiconal v-if !-->
  <div v-if="products.length">

    <paginate name="products" :list="products" :per="perPage">
      <p v-for="product in paginated('products')">{{product.name}}</p>
    </paginate>

  </div>

</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'

export default {
  name: 'productList',
  mounted() {
    this.fetchProducts()
  },
  data(){
    return{
      paginate:['products'],
      perPage:3
    }
  },
  computed:{
    //nombre modulo y lo que esta dentro del array es la clave
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }

}
</script>

<style scoped>

</style>