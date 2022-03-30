// Для восстановления или быстрого переноса БД firestore
const products = [{
  category: 0, size: [100, 300, 600], mainPage: false, url: '/uploads/1646827703280.png', categoryId: 0, density: ['D 500'], price: '3000', id: 11, target: 1, vendor: 1,
}, {
  id: 12, category: 0, density: ['D 500'], target: 0, size: [200, 300, 600], vendor: 1, price: '3000', mainPage: false, url: '/uploads/1646823587738.png', categoryId: 0,
}, {
  density: ['D 500'], size: [400, 200, 600], price: '3000', category: 0, vendor: 1, url: '/uploads/1646822684887.png', categoryId: 0, target: 0, mainPage: true, id: 13,
}, {
  mainPage: false, target: 1, density: ['D 500'], size: [100, 250, 600], vendor: 2, category: 0, id: 14, url: '/uploads/1646822786974.png', categoryId: 0, price: '3000',
}, {
  vendor: 2, categoryId: 0, id: 15, target: 1, mainPage: false, category: 0, size: [150, 250, 600], price: '3000', density: ['D 500'], url: '/uploads/1646822821256.png',
}, {
  category: 0, url: '/uploads/1646822861347.png', categoryId: 0, vendor: 2, id: 16, target: 1, density: ['D 500'], size: [200, 250, 600], price: '3000', mainPage: false,
}, {
  categoryId: 0, id: 17, density: ['D 500'], url: '/uploads/1646822882786.png', mainPage: false, vendor: 2, size: [250, 250, 600], price: '3000', target: 1, category: 0,
}, {
  mainPage: false, target: 1, category: 0, density: ['D 500'], size: [300, 250, 600], id: 18, vendor: 2, url: '/uploads/1646822962130.png', price: '3000', categoryId: 0,
}, {
  url: '/uploads/1646822989038.png', vendor: 2, size: [400, 250, 600], target: 1, category: 0, price: '3000', categoryId: 0, id: 20, density: ['D 500'], mainPage: false,
}, {
  density: ['D 500', 'D 600'], mainPage: false, price: '3000', vendor: 3, category: 0, categoryId: 0, id: 21, url: '/uploads/1646823026212.png', size: [100, 250, 600], target: 1,
}, {
  price: '3000', density: ['D 500', 'D 600'], categoryId: 0, size: [150, 250, 600], url: '/uploads/1646823071035.png', category: 0, vendor: 3, mainPage: false, id: 22, target: 1,
}, {
  categoryId: 0, mainPage: false, size: [200, 250, 600], url: '/uploads/1646823102309.png', density: ['D 500', 'D 600'], id: 23, vendor: 3, target: 0, price: '3000', category: 0,
}, {
  category: 0, price: '3000', target: 0, vendor: 3, id: 24, mainPage: false, size: [300, 250, 600], url: '/uploads/1646823137645.png', density: ['D 500', 'D 600'], categoryId: 0,
}, {
  category: 0, url: '/uploads/1646823171411.png', categoryId: 0, density: ['D 500', 'D 600'], price: '3000', target: 0, size: [400, 250, 600], id: 25, mainPage: false, vendor: 3,
}, {
  price: '3000', category: 0, url: '/uploads/1646823198437.png', vendor: 1, mainPage: false, categoryId: 0, target: 1, density: ['D 500', 'D 600'], id: 26, size: [100, 300, 600],
}, {
  price: '3000', category: 0, size: [200, 400, 600], vendor: 1, url: '/uploads/1646823247254.png', target: 0, density: ['D 500', 'D 600'], mainPage: false, id: 28, categoryId: 0,
}, {
  mainPage: false, size: [200, 300, 600], category: 0, id: 29, price: '3000', target: 0, density: ['D 500', 'D 600'], vendor: 1, url: '/uploads/1648281132005.png', categoryId: 0,
}, {
  url: '/uploads/1646823315363.png', mainPage: false, id: 31, density: ['D 400', 'D 500', 'D 600'], size: [625, 100, 250], category: 0, target: 1, price: '3000', categoryId: 0, vendor: 5,
}, {
  size: [625, 150, 250], density: ['D 400', 'D 500', 'D 600'], mainPage: false, categoryId: 0, price: '3000', url: '/uploads/1646823343427.png', vendor: 5, id: 33, target: 1, category: 0,
}, {
  density: ['D 400', 'D 500', 'D 600'], categoryId: 5, id: 34, size: [625, 200, 250], target: 0, price: '3000', category: 0, url: '/uploads/1646823560958.png', mainPage: false, vendor: 5,
}, {
  id: 35, categoryId: 0, price: '3000', density: ['D 400', 'D 500', 'D 600'], target: 0, category: 0, url: '/uploads/1646823391765.png', size: [625, 200, 300], mainPage: false, vendor: 5,
}, {
  url: '/uploads/1646823405604.png', id: 37, categoryId: 0, mainPage: false, price: '3000', vendor: 5, category: 0, target: 0, size: [625, 250, 300], density: ['D 400', 'D 500', 'D 600'],
}, {
  target: 0, price: '3000', mainPage: false, url: '/uploads/1646823421033.png', category: 0, categoryId: 0, size: [625, 250, 400], density: ['D 400', 'D 500', 'D 600'], vendor: 5, id: 39,
}, {
  vendor: 0, id: 48, url: '/uploads/1648280541906.png', size: [400, 288, 600], price: '3000', category: 0, density: ['D 400', 'D 500'], mainPage: false, target: 0,
}, {
  price: '3100', vendor: 4, id: 49, url: '/uploads/1648462929801.png', density: ['D 500', 'D 600'], target: 1, category: 0, size: [75, 300, 600],
}, {
  category: 0, mainPage: false, vendor: 4, density: ['D 500', 'D 600'], price: '3100', target: 1, size: [100, 300, 600], url: '/uploads/1648462913369.png', id: 50,
}, {
  size: [150, 300, 600], url: '/uploads/1648462868390.png', mainPage: false, vendor: 4, target: 1, density: ['D 500', 'D 600'], price: '3100', category: 0, id: 51,
}, {
  category: 0, vendor: 4, mainPage: false, id: 52, density: ['D 500', 'D 600'], target: 0, price: '3100', size: [200, 300, 600], url: '/uploads/1648462820846.png',
}, {
  target: 0, density: ['D 500', 'D 600'], vendor: 4, id: 53, category: 0, size: [300, 300, 600], price: '3100', url: '/uploads/1648462783482.png',
}, {
  id: 54, url: '/uploads/1648462668540.png', category: 0, price: '3100', target: 0, vendor: 4, density: ['D 500', 'D 600'], size: [400, 300, 600],
}, {
  size: [100, 288, 600], id: 7, category: 0, url: '/uploads/1646823544417.png', categoryId: 0, target: 1, vendor: 0, mainPage: true, density: ['D 500'], price: '3000',
}, {
  size: [200, 288, 600], density: ['D 500'], categoryId: 0, vendor: 0, category: 0, url: '/uploads/1646823500771.png', price: '3000', id: 8, target: 0, mainPage: true,
}, {
  price: '3000', density: ['D 500'], url: '/uploads/1646823526429.png', mainPage: true, id: 9, size: [300, 288, 600], categoryId: 0, target: 0, category: 0, vendor: 0,
}];
const categories = [{ id: 0, name: 'Блок газосиликатный' }, { name: 'Кирпич рабочий', id: 1 }];
const targets = [{ name: 'Стеновой', id: 0 }, { name: 'Перегородочный', id: 1 }, { id: 2, name: 'U-образный' }];
const vendors = [{ name: 'Липецкий силикатный завод', id: 0 }, { name: 'ВКСМ (г. Воронеж)', id: 1 }, { id: 2, name: 'Хебель (Липецк)' }, { id: 3, name: 'ЛГС Лиски' }, { name: 'Евроблок Клинцы', id: 4 }, { name: 'ВКБлок Ростов', id: 5 }];

export {
  products, categories, targets, vendors,
};
