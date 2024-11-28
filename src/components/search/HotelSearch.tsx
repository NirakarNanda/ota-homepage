import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { DatePickerWithRange } from '../hotel-card/DateRange';
import { Guests } from '@/components/hotel-card/Guests';

export function HotelSearch() {
  const [location, setLocation] = useState('');

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter a city, hotel, or landmark"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex justify-center gap-2">
          <DatePickerWithRange />
        </div>

        <div>
          <Label>Guests</Label>
          <Guests />
        </div>
      </div>

      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Search Hotels
      </Button>
    </div>
  );
}
