//1

const customer = {
   firstName: 'Ivan',
   lastName: 'Petrenko',
   email: 'ivan@example.com',
   password: 'qwerty123',
   phone: '+380631112233',
   address: {
      city: 'Kyiv',
      street: 'Khreshchatyk',
      house: 12,
      flat: 45
   },
   isMale: true,

   showAddress() {
      const a = this.address;
      return `${a.city}, вул. ${a.street}, буд. ${a.house}, кв. ${a.flat}`;
   },

   changePhone(newPhone) {
      this.phone = newPhone;
   }
};

// Видалити адресу:
delete customer.address;

// Копії об'єкта:
const copy1 = { ...customer };

//2

const cat = {
   name: 'Murka',
   color: 'black',
   isMale: false,
   isFurnitureDemage: true
};

for (let key in cat) {
   console.log(`${key}: ${cat[key]}`);
}

//3

function Book(author, title, year, publisher, price) {
   this.author = author;
   this.title = title;
   this.year = year;
   this.publisher = publisher;
   this.price = price;
}

Book.prototype.getAge = function () {
   const currentYear = new Date().getFullYear();
   return currentYear - this.year;
};

Book.prototype.setPrice = function (newPrice) {
   this.price = newPrice;
};

const book1 = new Book(
   'Ліна Костенко',
   'Маруся Чурай',
   1979,
   {
      city: 'Київ',
      name: 'Дніпро'
   },
   150
);

console.log(book1.getAge());
book1.setPrice(200);
