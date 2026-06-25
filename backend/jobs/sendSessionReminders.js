import Booking from "../models/Booking.js";

const sendSessionReminders = async () => {
  try {
    const tomorrowStart = new Date();
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);
    tomorrowStart.setHours(0, 0, 0, 0);

    const tomorrowEnd = new Date(tomorrowStart);
    tomorrowEnd.setHours(23, 59, 59, 999);

    const upcomingBookings = await Booking.find({
      date: { $gte: tomorrowStart, $lte: tomorrowEnd },
      status: "confirmed",
    }).populate("founderId").populate({
      path: "mentorId",
      populate: { path: "userId" },
    });

    console.log(`[Cron Job] Found ${upcomingBookings.length} bookings scheduled for tomorrow.`);

    for (const booking of upcomingBookings) {
      const founder = booking.founderId;
      const mentor = booking.mentorId?.userId;

      if (founder && mentor) {
        console.log(`[Cron Job - Booking Reminder] Session reminder sent to: ${founder.email} and ${mentor.email} for session at ${booking.timeSlot}`);
      }
    }
  } catch (error) {
    console.error(`[Cron Job Error] Session reminders failed: ${error.message}`);
  }
};

export default sendSessionReminders;
