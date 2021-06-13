
interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Student Complain',
    url: '/student-complain',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'New Complain',
        url: '/student-complain/Complain',
        icon: 'icon-pencil'
      },
      {
        name: 'My Complaints',
        url: '/student-complain/Manage',
        icon: 'icon-speech'
      },
    ]
  },
  {
    name: 'Res-Admin',
    url: '/res-admin',
    icon: 'icon-call-end',
    children: [
      {
        name: 'Complains List',
        url: '/res-admin/list',
        icon: 'icon-pencil'
      },
    ]
  }
  // {
  //   name: 'Admin',
  //   url: '/',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Students Complaints',
  //       url: '/',
  //       icon: 'icon-pencil'
  //     },
  //   ]
  // },
  // {
  //   name: 'Reports',
  //   url: '/',
  //   icon: 'icon-puzzle',
  // },

];
