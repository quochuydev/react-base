import { MENU_DATA } from '../../utils/routes';

export default function Middleware(props: any) {
  const pathname = window.location.pathname;
  let accessToken = localStorage.getItem('accessToken');
  // console.log({ pathname, accessToken });

  if (accessToken) {
    if (pathname === '/') {
      let firstMenu = MENU_DATA.find((e: any) => e.is_open);
      if (firstMenu) {
        window.location.href = firstMenu['path'];
      }
      return;
    }
  } else {
    if (pathname !== '/login') {
      window.location.href = '/login';
      return;
    }
  }

  return props.children;
}
