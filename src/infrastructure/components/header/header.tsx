import { Menu } from '../menu/menu';

export function Header() {
    return (
        <header className="flex flex-row px-2 py-3 bg-gray-300 header">
            <Menu></Menu>
        </header>
    );
}
