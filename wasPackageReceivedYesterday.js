function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  const now = new Date();
  console.log(now);
  const year = now.getUTCFullYear();
  console.log(year);
  const month = now.getUTCMonth();
  console.log(month);
  const day = now.getUTCDate();
  console.log(day);

  const sendTimeUTC = new Date(Date.UTC(year, month, day, start - tz_from, 0, 0));
  console.log(sendTimeUTC);
  const arrivalTimeUTC = new Date(sendTimeUTC.getTime() + duration * 3600 * 1000);
  const arrivalTimeLocal = new Date(arrivalTimeUTC.getTime() + tz_to * 3600 * 1000);
  const sendTimeLocal = new Date(sendTimeUTC.getTime() + tz_from * 3600 * 1000);

  // Hitung perbedaan hari sebagai integer
  const diffDays = Math.floor(arrivalTimeLocal.getTime() / (1000 * 3600 * 24)) - Math.floor(sendTimeLocal.getTime() / (1000 * 3600 * 24));
  
  return diffDays < 0;
}

console.log(was_package_received_yesterday(12, -3, 5, 8));

// simpel

function was_package_received_yesterday2(tz_from, tz_to, start, duration) {
  let timeDifference = tz_from - tz_to;
  let startTimeTzTo = start - timeDifference;
  let packageDeliveryTime = startTimeTzTo + duration;
  return packageDeliveryTime < 0
}