import { createLocales } from '@fullcalendar/core'

const tamilLocale = {
  code: 'ta',
  week: {
    dow: 0, // Sunday is the first day of the week
    doy: 6  // The week that contains Jan 1st is the first week of the year
  },
  buttonText: {
    prev: 'முந்தைய',
    next: 'அடுத்த',
    today: 'இன்று',
    month: 'மாதம்',
    week: 'அவாரம்',
    day: 'நாள்',
    list: 'அணி'
  },
  weekText: 'வாரம்',
  allDayText: 'அனைத்து நாளும்',
  moreLinkText: 'மேலும்',
  noEventsText: 'அந்த நிகழ்வுகள் இல்லை',
  month: {
    format: {
      // Short and long month names
      names: [
        'ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்',
        'ஜூலை', 'ஆகஸ்ட்', 'செப்டெம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'
      ],
      shortNames: [
        'ஜன', 'பிப்', 'மார்', 'ஏப்', 'மே', 'ஜூன்',
        'ஜூலை', 'ஆக', 'செப்', 'அக்', 'நவ', 'டிச'
      ]
    }
  },
  day: {
    format: {
      // Short and long day names
      names: [
        'ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'
      ],
      shortNames: [
        'ஞா', 'திங்', 'செவ்', 'புத', 'வியா', 'வெள்', 'சனி'
      ]
    }
  }
}

export default tamilLocale
