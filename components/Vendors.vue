<template>
  <div class="vendors">
    <div class="vendors__container">
      <v-slide-group
        v-model="model"
        class="vendors__group"
        active-class="success"
        show-arrows
      >
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/1_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/1_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/1_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/1_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/2_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/2_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/2_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/2_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/3_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/3_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/3_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/3_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/4_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/4_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/4_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/4_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/5_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/5_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/5_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/5_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>

        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/7_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/7_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/7_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/7_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/8_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/8_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/8_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/8_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/9_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/9_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/9_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/9_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/10_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/10_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/10_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/10_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/11_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/11_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/11_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/11_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/12_manufacturers.jpg`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/12_manufacturers.jpg?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/12_manufacturers.jpg" type="image/jpeg" />
            <img class="first-screen__right-img" src="~/assets/img/partners/12_manufacturers.jpg"/>
          </picture> -->
          </v-card>
        </v-slide-item>

        <v-slide-item>
          <v-card class=" my-4 vendors__slide">
            <v-img
              class="vendors__picture"
              :src="require(`~/assets/img/partners/14_manufacturers.png`)"
            />
          <!-- <picture class="vendors__picture">
            <source srcset="~/assets/img/partners/14_manufacturers.png?webp" type="image/webp" />
            <source srcset="~/assets/img/partners/14_manufacturers.png" type="image/png" />
            <img class="first-screen__right-img" src="~/assets/img/partners/14_manufacturers.png"/>
          </picture> -->
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vendors',
  data() {
    return {
      model: null,
    };
  },
};
</script>
<style lang="scss" >
.vendors{
  &__container{

    // background: chocolate;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__group{
    min-width: 100%;
    .v-slide-group__content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

    }
  }

  &__slide{
    width:25%;
    max-width: 200px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }
  &__picture{
    width: 100%;
    height: auto;

    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>
