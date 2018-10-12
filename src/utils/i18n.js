const messages = {
  en: {
    message: {
      bold: 'There is a <b>bold</b> text',
      cake: 'cake | cakes',
      candy: 'no candies | one candy | {count} candies',
      hello: 'hello world',
      namedExample: 'You owe me: $ {amount}'
    }
  },
  fr: {
    message: {
      bold: 'Il y a un texte en <b>gras</b>',
      cake: 'gâteau | gâteaux',
      candy: 'pas de bonbons | un bonbon | {count} bonbons',
      hello: 'Bonjour monde',
      namedExample: 'Vous me devez : {amount} $'
    }
  },
  th: {
    message: {
      bold: 'นี่คือข้อความ <b>bold</b>',
      cake: 'เค้ก | เค้ก',
      candy: 'ไม่มีลูกอม | 1 ลูกอม | {count} ลูกอม',
      hello: 'สวัสดีโลก',
      namedExample: 'คุณเป็นหนี้ฉัน : {amount} ฿'
    }
  }
}

const dateTimeFormats = {
  'en': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  },
  'th': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  },
  'fr': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD'
    },
    percent: {
      style: 'percent'
    }
  },
  'th': {
    currency: {
      style: 'currency', currency: 'THB'
    },
    percent: {
      style: 'percent'
    }
  },
  'fr': {
    currency: {
      style: 'currency', currency: 'EUR'
    },
    percent: {
      style: 'percent'
    }
  }
}

module.exports = {
  messages,
  dateTimeFormats,
  numberFormats
}
