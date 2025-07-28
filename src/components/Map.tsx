export default function Map() {
    return (
      <div className="w-full h-64 md:h-full min-h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.653138809101!2d90.2039988758814!3d23.181827479062327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553e449f1fcd95%3A0x804f3b7d1e8c78dd!2sDC%20Bridge!5e0!3m2!1sen!2sbd!4v1678886543210"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location of ICT HSC Guide on Google Maps"
        ></iframe>
      </div>
    );
  }
  