import { MENU_DATA } from '../../utils/routes';
import { Menu } from '../../common/interfaces';

export default function Middleware(props: TODO): TODO {
  const pathname = window.location.pathname;
  const accessToken = localStorage.getItem('accessToken');
  console.log({ pathname, accessToken });

  if (accessToken) {
    if (pathname === '/') {
      const firstMenu = MENU_DATA.find((e: Menu) => e.is_open);
      if (firstMenu) {
        window.location.href = firstMenu['path'];
      }
      return;
    }
  } else {
    if (pathname === '/' || pathname.includes('/admin')) {
      window.location.href = '/login';
      return;
    }
  }

  return props.children;
}
