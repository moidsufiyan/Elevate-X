import Booking from "../models/Booking.js";

export const checkSlotAvailability = async (mentorId, date, timeSlot) => {
  const queryDate = new Date(date);
  const startOfDay = new Date(queryDate);
  startOfDay.setUTCHours(0, 0, 0, 0);
  
  const endOfDay = new Date(queryDate);
  endOfDay.setUTCHours(23, 59, 59, 999);

  const existingBooking = await Booking.findOne({
    mentorId,
    date: { $gte: startOfDay, $lte: endOfDay },
    timeSlot,
    status: { $in: ["pending", "confirmed"] },
  });

  return !existingBooking;
};

export const generateMeetingLink = (bookingId) => {
  return `https://meet.jit.si/elevate-x-${bookingId}`;
};
