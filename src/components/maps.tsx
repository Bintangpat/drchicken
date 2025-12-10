import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Image from "next/image";
export default function Maps() {
  const location = {
    name: "Ayam Geprek DR.CHICKEN",
    address: "Wonodadi, Kec. Gading Rejo, Kabupaten Pringsewu, Lampung",
    phone: "+62 822-3822-2570",
    hours: "10:00 - 18:00",
    imagesUrl: "/banner1.png",
    coordinates: {
      lat: -5.372517887900668,
      lng: 105.04589204581936,
    },
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`,
      "_blank",
    );
  };

  return (
    <div className="container h-[80vh] py-24">
      <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-4">
        {/* Informasi Lokasi - Row span 3 */}
        <div className="row-span-3 flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg">
          <div>
            <h3 className="mb-2 text-3xl font-bold text-gray-900">
              Kunjungi Kami
            </h3>
            <p className="mb-8 text-gray-600">
              Temukan lokasi kami dan datang langsung
            </p>

            <h4 className="mb-6 text-xl font-bold text-gray-900">
              {location.name}
            </h4>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Alamat</p>
                  <p className="text-gray-600">{location.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Telepon</p>
                  <p className="text-gray-600">{location.phone}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">
                    Jam Operasional
                  </p>
                  <p className="text-gray-600">Setiap Hari: {location.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Get Directions Button */}
            <button
              onClick={handleGetDirections}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Navigation className="h-5 w-5" />
              Dapatkan Petunjuk Arah
            </button>

            {/* Tips Card */}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gray-200 object-cover">
          <Image
            fill
            src={location.imagesUrl}
            alt="Ayam Geprek DR.CHICKEN"
            className="object-cover"
          ></Image>
        </div>

        {/* Map Section */}
        <div className="col-start-2 row-span-2 row-start-2 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.3635963364868!2d105.04589204581936!3d-5.372517887900668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d30075936009%3A0xcc6f72bf3f9cb23d!2sAyam%20Geprek%20DR.CHICKEN!5e0!3m2!1sid!2sid!4v1761756336555!5m2!1sid!2sid"
            allowFullScreen
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
