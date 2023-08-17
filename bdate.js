const englishDays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const banglaDays = [
      "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"
    ];

    const englishMonths = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const banglaMonths = [
      "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
      "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];

    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    function convertToBanglaDate(englishDate) {
      const dayName = banglaDays[englishDate.getDay()];
      const day = englishDate.getDate();
      const month = banglaMonths[englishDate.getMonth()];
      const year = englishDate.getFullYear().toString().split('').map(digit => banglaNumbers[englishNumbers.indexOf(digit)]).join('');

      const banglaDay = day.toString().split('').map(digit => banglaNumbers[englishNumbers.indexOf(digit)]).join('');

      return `${dayName}, ${banglaDay} ${month}, ${year}`;
    }

    function convertToBanglaTime(englishDate) {
      const hours = englishDate.getHours();
      const minutes = englishDate.getMinutes();
      const seconds = englishDate.getSeconds();

      const banglaHours = hours.toString().split('').map(digit => banglaNumbers[englishNumbers.indexOf(digit)]).join('');
      const banglaMinutes = minutes.toString().split('').map(digit => banglaNumbers[englishNumbers.indexOf(digit)]).join('');
      const banglaSeconds = seconds.toString().split('').map(digit => banglaNumbers[englishNumbers.indexOf(digit)]).join('');

      return `${banglaHours}:${banglaMinutes}:${banglaSeconds}`;
    }

    function updateClock() {
      const englishDate = new Date();
      const banglaFormattedDate = convertToBanglaDate(englishDate);
      const banglaFormattedTime = convertToBanglaTime(englishDate);

      const banglaDateTimeElement = document.getElementById('banglaDateTime');
      banglaDateTimeElement.textContent = `${banglaFormattedDate} ${banglaFormattedTime}`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    
    // Initial update
    updateClock();
