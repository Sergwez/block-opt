export default function ({ store, redirect, route }) {
  if (!store.getters['auth/isLoggedIn'] && route.path === '/admin') {
    return redirect('/login');
  }
  return false;
}
