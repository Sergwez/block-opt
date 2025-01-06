export default (context, inject) => {
  const info = {
    site: 'Block-Opt.ru',
    workMode: 'пн-вс: 9.00 - 20.00',
    phone: '+7 926 085 00 07',
    email: 'info@block.opt',
    ogrn: '1227700054746',
    companyName: 'ООО  «Строй Атлант», ',
  };
  inject('info', info);
};
