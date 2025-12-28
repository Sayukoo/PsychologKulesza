
export default function GoogleCalendarWidget() {
  return (
    <div className="w-full rounded-lg">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1giqEn8r9GJbCeU8qHNnLb2djJcDieeG_apCipdUUoDuLT7vsigFUtaBfsCu5Gd07vgYRIY-Ip?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="1600"
        frameBorder="0"
        scrolling="no"
        title="Kalendarz rezerwacji wizyty"
        className="w-full h-[1600px]"
      />
    </div>
  );
}
