import axios from 'axios';

export default async (context, inject) => {
  function createSnapshot(doc) {
    const docRef = context.$fire.firestore.collection(doc);
    docRef.onSnapshot(() => {
      context.$Collection(doc).getDocs().then((snapshot) => {
        axios({
          method: 'post',
          url: '/api/create-snapshot',
          data: {
            snapshot,
            name: doc,
          },
          headers: { 'Content-Type': 'application/json' },
        })
          .then(() => {
            console.log('Снимок перезаписан!');
          })
          .catch((res) => {
            console.log(res);
          });
      });
    });

    return 'true createSnapshot';
  }

  inject('createSnapshot', (doc) => createSnapshot(doc));
};
