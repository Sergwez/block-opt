//этот компонент для переноса или восстановления БД, в дальнейшем можно удалить
<template>
  <div>
    <v-btn @click="resetBD()">
      Восстановить БД
    </v-btn>
  </div>
</template>

<script>
import {
  products, categories, vendors, targets,
} from '~/static/backup';

export default {

  data() {
    return {
    };
  },
  methods: {
    async resetBD() {
      const context = this;
      const docs = {
        products,
        categories,
        vendors,
        targets,
      };
      const keysDocs = Object.keys(docs);

      keysDocs.forEach((doc) => {
        async function setDocuments(document) {
          /* eslint-disable-next-line */
          for (const elem of docs[document]) {
            /* eslint-disable-next-line */
            await context.$Collection(document).setDoc(elem);
          }
        }
        setDocuments(doc);
      });
    },
  },

};
</script>
