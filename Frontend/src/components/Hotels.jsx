import {
  Car,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Filter,
  Heart,
  MapPin,
  Star,
  Utensils,
  Waves,
  Wifi,
  Wind,
  X,
} from "lucide-react";
import { useState } from "react";

const Hotels = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  

  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "Mumbai, Maharashtra",
      rating: 4.5,
      price: 3500,
      originalPrice: 4200,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Deluxe",
      amenities: ["WiFi", "AC", "Pool", "Gym"],
      discount: 17,
      reviews: 1250,
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Goa, India",
      rating: 4.8,
      price: 5200,
      originalPrice: 6000,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Suite",
      amenities: ["WiFi", "AC", "Pool", "Restaurant"],
      discount: 13,
      reviews: 890,
    },
    {
      id: 3,
      name: "City Center Inn",
      location: "Delhi, India",
      rating: 4.2,
      price: 2800,
      originalPrice: 3200,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Double",
      amenities: ["WiFi", "AC", "Parking"],
      discount: 12,
      reviews: 650,
    },
    {
      id: 4,
      name: "Mountain Retreat",
      location: "Shimla, Himachal Pradesh",
      rating: 4.6,
      price: 4100,
      originalPrice: 4800,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Deluxe",
      amenities: ["WiFi", "Restaurant", "Gym"],
      discount: 15,
      reviews: 420,
    },
    {
      id: 5,
      name: "Heritage Palace",
      location: "Jaipur, Rajasthan",
      rating: 4.7,
      price: 6500,
      originalPrice: 7500,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Suite",
      amenities: ["WiFi", "AC", "Pool", "Restaurant", "Gym"],
      discount: 13,
      reviews: 980,
    },
    {
      id: 6,
      name: "Business Hotel",
      location: "Bangalore, Karnataka",
      rating: 4.3,
      price: 3200,
      originalPrice: 3800,
      image: "/placeholder.svg?height=200&width=300",
      roomType: "Double",
      amenities: ["WiFi", "AC", "Gym", "Parking"],
      discount: 16,
      reviews: 750,
    },
  ];

  const amenityIcons = {
    WiFi: <Wifi className="w-4 h-4" />,
    AC: <Wind className="w-4 h-4" />,
    Pool: <Waves className="w-4 h-4" />,
    Gym: <Dumbbell className="w-4 h-4" />,
    Parking: <Car className="w-4 h-4" />,
    Restaurant: <Utensils className="w-4 h-4" />,
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const toggleRoomType = (roomType) => {
    setSelectedRoomTypes((prev) =>
      prev.includes(roomType)
        ? prev.filter((r) => r !== roomType)
        : [...prev, roomType]
    );
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Sidebar Filters */}
          <aside
            className={`lg:w-80 lg:sticky lg:top-24 lg:self-start ${
              isMobileFiltersOpen
                ? "fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4 overflow-y-auto"
                : "hidden lg:block"
            }`}
          >
            {/* Mobile Filter Header */}
            {isMobileFiltersOpen && (
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Filters
              </h2>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ₹{priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ₹{priceRange[1]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        Number.parseInt(e.target.value),
                      ])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Star Rating
                </h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                      />
                      <div className="flex items-center space-x-1">
                        {[...Array(rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          & above
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Room Type */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Room Type
                </h3>
                <div className="space-y-2">
                  {["Single", "Double", "Deluxe", "Suite"].map((roomType) => (
                    <label
                      key={roomType}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedRoomTypes.includes(roomType)}
                        onChange={() => toggleRoomType(roomType)}
                        className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {roomType}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Amenities
                </h3>
                <div className="space-y-2">
                  {[
                    "WiFi",
                    "Pool",
                    "AC",
                    "Gym",
                    "Parking",
                    "Restaurant",
                    "Pet-friendly",
                  ].map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {amenity}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button (Mobile) */}
              {isMobileFiltersOpen && (
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors lg:hidden"
                >
                  Apply Filters
                </button>
              )}
            </div>
          </aside>

          {/* Hotel Listings */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {hotels.length} hotels found
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Best deals for your stay
              </p>
            </div>

            {/* Hotel Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              {hotels.map((hotel) => (
                <article
                  key={hotel.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Hotel Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      {hotel.discount && (
                        <div className="absolute top-52 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                          { hotel.price >= 5200 ? 20 : (hotel.price >= 4000 ? 17 : 13)}% OFF
                        </div>
                      )}
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Hotel Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {hotel.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {hotel.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {hotel.rating}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              ({hotel.reviews})
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Room Type */}
                      <div className="mb-3">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm font-medium">
                          {hotel.roomType}
                        </span>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center space-x-3 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity) => (
                          <div
                            key={amenity}
                            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400"
                          >
                            {amenityIcons[amenity]}
                            <span className="text-xs">{amenity}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              ₹{hotel.price.toLocaleString()}
                            </span>
                            {hotel.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                ₹{hotel.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            per night
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <nav
              className="flex items-center justify-center space-x-2"
              aria-label="Pagination"
            >
              <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    page === 1
                      ? "bg-red-500 text-white"
                      : "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hotels;
