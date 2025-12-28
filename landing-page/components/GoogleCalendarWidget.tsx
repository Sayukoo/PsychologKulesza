
export default function GoogleCalendarWidget() {
  return (
    <div className="w-full h-full min-h-[600px] overflow-hidden rounded-lg">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1giqEn8r9GJbCeU8qHNnLb2djJcDieeG_apCipdUUoDuLT7vsigFUtaBfsCu5Gd07vgYRIY-Ip?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        title="Kalendarz rezerwacji wizyty"
        className="w-full h-full"
      />
    </div>
  );
}
