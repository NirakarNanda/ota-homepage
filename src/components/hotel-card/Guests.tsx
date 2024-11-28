import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Minus, Plus, Users } from 'lucide-react';

export function Guests() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => () => setter((prev) => prev + 1);
  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => () => setter((prev) => Math.max(prev - 1, 0));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children > 1 ? 'ren' : ''}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Adults</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={decrement(setAdults)}>
                <Minus className="h-4 w-4" />
              </Button>
              <span>{adults}</span>
              <Button variant="outline" size="sm" onClick={increment(setAdults)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Children</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={decrement(setChildren)}>
                <Minus className="h-4 w-4" />
              </Button>
              <span>{children}</span>
              <Button variant="outline" size="sm" onClick={increment(setChildren)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
