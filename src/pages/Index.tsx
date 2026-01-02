import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState('Все');

  const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: '2 450 000',
      country: 'Япония',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/f9ea6c61-8232-40f0-a9f6-19f1c06ad19c.jpg',
      mileage: '0 км',
      engine: '2.5 л, 181 л.с.',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'RAV4',
      year: 2023,
      price: '2 850 000',
      country: 'Япония',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/6861b648-a741-4cc0-8ccd-0c2f578c2e52.jpg',
      mileage: '0 км',
      engine: '2.0 л, 149 л.с.',
    },
    {
      id: 3,
      brand: 'Hyundai',
      model: 'Tucson',
      year: 2023,
      price: '2 290 000',
      country: 'Корея',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/4c6e862e-3b90-4b7a-afd7-02bff3eb3c7c.jpg',
      mileage: '0 км',
      engine: '2.0 л, 150 л.с.',
    },
    {
      id: 4,
      brand: 'Hyundai',
      model: 'Santa Fe',
      year: 2023,
      price: '3 150 000',
      country: 'Корея',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/a70a1202-b651-43bc-94b2-642c76f582f8.jpg',
      mileage: '0 км',
      engine: '2.5 л, 180 л.с.',
    },
    {
      id: 5,
      brand: 'Kia',
      model: 'Sportage',
      year: 2023,
      price: '2 380 000',
      country: 'Корея',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/db7e93bd-acf1-4678-83de-679955da3c8f.jpg',
      mileage: '0 км',
      engine: '2.0 л, 150 л.с.',
    },
    {
      id: 6,
      brand: 'Mazda',
      model: 'CX-5',
      year: 2023,
      price: '2 650 000',
      country: 'Япония',
      image: 'https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/86bff898-1a0f-4c65-8f57-c6d87ed38b11.jpg',
      mileage: '0 км',
      engine: '2.5 л, 194 л.с.',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Иван',
      rating: 5,
      text: 'Заказал Camry из Японии. Привезли за 3 недели, всё оформили. Машина супер!',
      date: '28.12.2025',
    },
    {
      id: 2,
      name: 'Елена',
      rating: 5,
      text: 'Взяла Tucson для семьи. Цена ниже чем в салонах. Всем довольна, спасибо!',
      date: '27.11.2025',
    },
    {
      id: 3,
      name: 'Андрей',
      rating: 5,
      text: 'Купил Sportage через этих ребят. Быстро, честно, без проблем.',
      date: '25.11.2025',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Как купить автомобиль из Японии без рисков',
      description: 'Подробное руководство по покупке японских автомобилей с аукционов и из дилерских центров.',
      date: '01.01.2025',
    },
    {
      id: 2,
      title: 'Преимущества корейских автомобилей',
      description: 'Почему корейские авто становятся все популярнее на российском рынке.',
      date: '28.12.2024',
    },
    {
      id: 3,
      title: 'Электромобили из Китая: что нужно знать',
      description: 'Особенности эксплуатации китайских электромобилей в российских условиях.',
      date: '20.12.2024',
    },
  ];

  const brands = ['Все', 'Toyota', 'Hyundai', 'Kia', 'Mazda'];

  const filteredCars = selectedBrand === 'Все' 
    ? cars 
    : cars.filter(car => car.brand === selectedBrand);

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Japan Export 27</h1>
              <p className="text-xs text-muted-foreground">Автомобили без пробега</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-secondary transition-colors">Каталог</a>
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">О компании</a>
            <a href="#reviews" className="text-sm font-medium hover:text-secondary transition-colors">Отзывы</a>
            <a href="#articles" className="text-sm font-medium hover:text-secondary transition-colors">Статьи</a>
            <a href="#contacts" className="text-sm font-medium hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/60ad9bb6-1987-4b85-907f-4721de88c35d/files/4aa915b8-a3b0-4e37-881c-b34c748ed7d0.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <Badge className="mb-4 bg-secondary text-white hover:bg-secondary/90 animate-fade-in">
            Премиальные автомобили из Азии
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Авто без пробега из Кореи, Китая, Японии
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            Эксклюзивные автомобили с доставкой по всей России 🇷🇺
          </p>
          <p className="text-lg mb-8 text-white/80 animate-fade-in">
            Автоподбор в г. Хабаровск • Помощь в оформлении • Постановка на учет
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Icon name="Search" className="mr-2 h-5 w-5" />
              Подобрать автомобиль
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4">Автомобили в наличии</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Новые автомобили без пробега напрямую от производителей
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? 'default' : 'outline'}
                onClick={() => setSelectedBrand(brand)}
                className={selectedBrand === brand ? 'bg-secondary hover:bg-secondary/90' : ''}
              >
                {brand}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="relative h-64 overflow-hidden">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    {car.country}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{car.brand} {car.model}</CardTitle>
                  <CardDescription className="text-lg">{car.year} год</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Gauge" className="h-4 w-4 text-muted-foreground" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Fuel" className="h-4 w-4 text-muted-foreground" />
                      <span>{car.engine}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-secondary">{car.price} ₽</div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 bg-secondary hover:bg-secondary/90">
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    Узнать цену
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Профессиональный автоподбор</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полное сопровождение от выбора до получения ключей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'Search', title: 'Поиск автомобиля', description: 'Подбор по вашим критериям на аукционах и у дилеров' },
              { icon: 'FileCheck', title: 'Проверка документов', description: 'Полная юридическая проверка и история авто' },
              { icon: 'Ship', title: 'Доставка', description: 'Транспортировка по всей России под ключ' },
              { icon: 'ClipboardCheck', title: 'Оформление', description: 'Помощь в постановке на учет в ГИБДД' },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in hover:border-secondary">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Этапы работы</CardTitle>
              <CardDescription>Простой и прозрачный процесс покупки автомобиля</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: '01', title: 'Консультация', description: 'Обсуждаем ваши пожелания и бюджет' },
                  { step: '02', title: 'Подбор', description: 'Находим идеальный автомобиль' },
                  { step: '03', title: 'Оформление', description: 'Доставка и регистрация авто' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="text-6xl font-bold text-secondary/20 mb-2">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Japan Export 27</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на поставке новых автомобилей без пробега из Японии, Кореи и Китая. 
                Наша команда профессионалов в Хабаровске помогает клиентам по всей России приобрести 
                автомобиль мечты по выгодной цене.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: 'Award', text: 'Официальная гарантия' },
                  { icon: 'Shield', text: 'Юридическая чистота' },
                  { icon: 'TrendingDown', text: 'Цены от производителя' },
                  { icon: 'Headphones', text: 'Поддержка 24/7' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name={item.icon} className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500+', label: 'Довольных клиентов' },
                { number: '2 года', label: 'Опыт работы' },
                { number: '100%', label: 'Легальность' },
                { number: '14-20 дней', label: 'Срок доставки' },
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Реальные отзывы довольных владельцев автомобилей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Статьи и советы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полезная информация о покупке автомобилей из-за рубежа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.description}</p>
                  <Button variant="link" className="text-secondary p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Готовы помочь вам подобрать идеальный автомобиль. 
                Оставьте заявку, и мы перезвоним в течение 15 минут.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: 'MapPin', title: 'Адрес', text: 'г. Хабаровск, ул. Примерная, 27' },
                  { icon: 'Phone', title: 'Телефон', text: '+7 (909) 431-06-21' },
                  { icon: 'Phone', title: 'Телефон 2', text: '+7 (924) 210-84-35' },
                  { icon: 'Send', title: 'Telegram', text: '@Export_auto27', link: 'https://t.me/Export_auto27' },
                  { icon: 'Mail', title: 'Email', text: 'info@japanexport27.ru' },
                  { icon: 'Clock', title: 'Время работы', text: 'Пн-Пт: 9:00 - 18:00' },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      {contact.link ? (
                        <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">{contact.text}</a>
                      ) : (
                        <div className="text-muted-foreground">{contact.text}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите, какой автомобиль вас интересует" rows={4} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-bold">Japan Export 27</h3>
                  <p className="text-xs text-white/70">Автомобили без пробега</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Профессиональный автоподбор и доставка автомобилей из Азии по всей России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Японские авто</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Корейские авто</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Китайские авто</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Электромобили</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Услуги</a></li>
                <li><a href="#reviews" className="hover:text-secondary transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3 mb-4">
                {[
                  { icon: 'MessageCircle', link: 'https://t.me/ExportNumber1' },
                  { icon: 'Instagram', link: '#' },
                  { icon: 'Youtube', link: '#' }
                ].map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                    <Icon name={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2025 Japan Export 27. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;