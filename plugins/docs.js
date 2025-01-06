/*
результат выполнения всех методов - промис
получить документы из коллекции:
  $Collection('products').getDocs() - товары
  $Collection('categories').getDocs() - категории
  $Collection('targets').getDocs() - тип товара/назначение
  $Collection('vendors').getDocs() - производители

получить следующий ID для нового документа:
  $Collection('products').nextId()

Создать новый документ:
  $Collection('products').setDoc('Object')

Изменить документ:
  $Collection('products').updateDoc('Object'))

Удалить документ:
  $Collection('products').deleteDoc('id')
*/

export default async (context, inject) => {
  // if (context.route.path === '/login') {
  context.$fire.firestoreReady();
  // }

  class Collection {
    constructor(docName) {
      this.docName = docName;
      this.docRef = context.$fire.firestore.collection(docName);
    }

    // чтение всех документов выбранной коллекции
    async getDocs() {
      try {
        const arr = [];
        const snapshot = await this.docRef.get();
        snapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        console.log(`Success! Read documents from collection: ${this.docName}`);
        return arr;
      } catch (e) {
        console.log(e);
        return false;
      }
    }

    // получение следующего id для коллекции
    async nextId() {
      const docs = await this.getDocs();
      console.log(docs);
      if (docs && docs.length !== 0) {
        return docs.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1;
      }
      console.log(false);
      return 0;
    }

    // создание нового документа
    async setDoc(doc) {
      try {
        const nextId = await this.nextId();
        await this.docRef.doc(nextId.toString()).set(
          {
            id: nextId,
            ...doc,
          },
        );
        console.log('Success! Add new document');
        context.$createSnapshot(this.docName);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }

    // изменение документа
    async updateDoc(doc) {
      try {
        await this.docRef.doc(doc.id.toString()).update(doc);
        console.log('Success! Update document');
        context.$createSnapshot(this.docName);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }

    // удаление документа
    async deleteDoc(id) {
      try {
        await this.docRef.doc(id.toString()).delete();
        console.log('Success! Delete document');
        context.$createSnapshot(this.docName);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }

  inject('Collection', (docName) => new Collection(docName));
};
