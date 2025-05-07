import { SVGAttributes } from 'react';

import Logo from '@/assets/images/logo.png';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return <img src={Logo} alt="Logo" className="bg-sidebar h-auto w-32" />;
}
