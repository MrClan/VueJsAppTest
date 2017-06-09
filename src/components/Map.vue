<<template>
  <div>
    <gmap-map
    :center="center"
    :zoom="7"
    style="width: 1900px; height: 1000px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: 27.7172, lng: 85.3240},
      markers: [{
        position: {lat: 27.7172, lng: 85.3240}
      }, {
        position: {lat: 27.7173, lng: 85.3250}
      }]
    }
  }
}
</script>

<style>

</style>
