import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavGroup, type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    BookOpen,
    BriefcaseMedical,
    Calculator,
    Contact,
    Factory,
    FileText,
    LayoutGrid,
    Package,
    Package2,
    PackageCheck,
    PackageMinus,
    PackageSearch,
    Percent,
    Stethoscope,
    Truck,
    Users,
} from 'lucide-react';
import AppLogo from './app-logo';
import { NavGroupMain } from './nav-group-main';

// TODO: create a sidebar similar to the order of the siti khadijah pharmacy sidebar
const mainNavGroups: NavGroup[] = [
    {
        title: 'Main',
        items: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: LayoutGrid,
            },
            {
                title: 'Cashier',
                href: '/',
                icon: Calculator,
            },
            {
                title: 'Profit Report',
                href: '/',
                icon: FileText,
            },
        ],
    },
    {
        title: 'Inventory',
        items: [
            {
                title: 'Stock Opname',
                href: '/',
                icon: PackageSearch,
            },
            {
                title: 'Goods Receipt',
                href: '/',
                icon: PackageCheck,
            },
            {
                title: 'Return',
                href: '/',
                icon: PackageMinus,
            },
        ],
    },
    {
        title: 'Master',
        items: [
            {
                title: 'Percentage Formulas',
                href: '/formulas',
                icon: Percent,
            },
            {
                title: 'Medical Services',
                href: '/',
                icon: BriefcaseMedical,
            },
            {
                title: 'Units',
                href: '/',
                icon: Package2,
            },
            {
                title: 'Factories',
                href: '/',
                icon: Factory,
            },
            {
                title: 'Products',
                href: '/',
                icon: Package,
            },
            {
                title: 'Suppliers',
                href: '/',
                icon: Truck,
            },
            {
                title: 'Doctors',
                href: '/',
                icon: Stethoscope,
            },
            {
                title: 'Clients',
                href: '/',
                icon: Contact,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'User',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Users,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavGroupMain groups={mainNavGroups} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
