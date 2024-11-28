import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HotelSearch } from '@/components/search/HotelSearch';
import { FlightSearch } from '@/components/search/FlightSearch';
import { FeaturedOffers } from '@/components/sections/FeaturedOffers';
import { PopularHotels } from '@/components/sections/PopularHotels';
import { ExploreDestinations } from '@/components/sections/ExploreDestinations';
import { Plane, Building2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-screen flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Your Journey Begins Here
          </h1>
          <div className="max-w-4xl mx-auto w-full">
            <Tabs defaultValue="hotels" className="bg-white rounded-lg shadow-lg w-full">
              {/* Tabs List */}
              <TabsList className="flex w-full border-b">
                <TabsTrigger value="hotels" className="flex items-center justify-center flex-1 py-2">
                  <Building2 className="w-5 h-5 mr-2" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger value="flights" className="flex items-center justify-center flex-1 py-2">
                  <Plane className="w-5 h-5 mr-2" />
                  Flights
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <TabsContent value="hotels">
                <HotelSearch />
              </TabsContent>
              <TabsContent value="flights">
                <FlightSearch />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="bg-white w-screen">
        <FeaturedOffers />
      </section>
      <section className="bg-gray-50 w-screen">
        <PopularHotels />
      </section>
      <section className="bg-white w-screen">
        <ExploreDestinations />
      </section>
    </div>
  );
}

export default App;
