export default function ProjectMap({ location }: { location: string }) {
  return (
    <div className="mt-6 rounded-[24px] overflow-hidden border border-white/10">
      <iframe
        title="map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
        className="w-full h-[300px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
