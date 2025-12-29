
export default function GoogleCalendarWidget() {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1giqEn8r9GJbCeU8qHNnLb2djJcDieeG_apCipdUUoDuLT7vsigFUtaBfsCu5Gd07vgYRIY-Ip?gv=true"
        title="Kalendarz rezerwacji wizyty"
        className="w-full min-h-[1400px] sm:min-h-[1200px] md:min-h-[1100px] lg:min-h-[1200px] border-0"
        loading="lazy"
      />
    </div>
  );
}
