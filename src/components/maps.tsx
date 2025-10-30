export default function maps() {
  return (
    <div className="container h-[80vh] py-24">
      <div className="flex h-full w-full justify-center-safe overflow-hidden rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.3635963364868!2d105.04589204581936!3d-5.372517887900668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d30075936009%3A0xcc6f72bf3f9cb23d!2sAyam%20Geprek%20DR.CHICKEN!5e0!3m2!1sid!2sid!4v1761756336555!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen
          className="h-auto w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
