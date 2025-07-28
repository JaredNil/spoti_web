import { LayoutGridIcon, StarIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib/css';
import { ROUTES } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/kit/button';

interface BoardsSidebarProps {
  className?: string;
}

export function BoardsSidebar({ className }: BoardsSidebarProps) {
  return (
    <div className={cn('w-64 border-r p-4 space-y-4', className)}>
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-500 px-2">Навигация</div>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to={ROUTES.HOME}>
            <LayoutGridIcon className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to={ROUTES.BOARDS}>
            <LayoutGridIcon className="mr-2 h-4 w-4" />
            Все доски
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to={ROUTES.BOARDS_FAV}>
            <StarIcon className="mr-2 h-4 w-4" />
            Избранное
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to={ROUTES.BOARDS_FAV}>
            <ClockIcon className="mr-2 h-4 w-4" />
            Недавние
          </Link>
        </Button>
      </div>
    </div>
  );
}
