export const brandInfo = {
  nameAr: 'بن المزاج',
  nameEn: 'AL-MAZAJ COFFEE',
  tagline: 'طعم القهوة اللي يضبط المزاج',
  subtitle: 'نقدم أجود أنواع البن والقهوة المختصة بلمسة عربية أصيلة.',
  established: '2023',
  whatsapp: '+966556354954',
  whatsappDisplay: '+966 55 635 4954',
  phone: '+966556354954',
  phoneDisplay: '+966 55 635 4954',
  instagram: 'https://www.instagram.com/',
  mapsUrl: 'https://maps.app.goo.gl/9t5eTfL2PqUvHqri6',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.123456789!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa',
  hours: {
    weekdays: 'السبت - الخميس: ٧ صباحاً - ١٢ منتصف الليل',
    friday: 'الجمعة: ١ ظهراً - ١٢ منتصف الليل',
  },
};

export const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'منتجاتنا', href: '#products' },
  { label: 'تجربتنا', href: '#experience' },
  { label: 'موقعنا', href: '#location' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const products = [
  {
    id: 1,
    name: 'قهوة عربية',
    nameEn: 'Arabic Coffee',
    description: 'قهوة عربية أصيلة بالهيل والزعفران، تحضّر بالطريقة السعودية التقليدية',
    price: '١٥ ريال',
    image: '/images/arabic-coffee.jpg',
    icon: '☕',
    tag: 'الأكثر طلباً',
    color: 'from-amber-900 to-amber-700',
  },
  {
    id: 2,
    name: 'بن مختص',
    nameEn: 'Specialty Coffee',
    description: 'بن مختص من أجود المزارع العالمية، يُحضَّر بعناية فائقة لإبراز نكهاته الفريدة',
    price: '٢٢ ريال',
    image: '/images/specialty-coffee.jpg',
    icon: '🫘',
    tag: 'مميز',
    color: 'from-stone-800 to-stone-600',
  },
  {
    id: 3,
    name: 'اسبريسو',
    nameEn: 'Espresso',
    description: 'اسبريسو غني وقوي بطبقة كريما ذهبية مثالية، من أجود حبوب البن الإيطالية',
    price: '١٨ ريال',
    image: '/images/espresso.jpg',
    icon: '⚡',
    tag: 'كلاسيك',
    color: 'from-zinc-900 to-zinc-700',
  },
  {
    id: 4,
    name: 'قهوة سعودية',
    nameEn: 'Saudi Coffee',
    description: 'قهوة سعودية بنكهة التمر والهيل، مقدمة بأسلوب عصري يجمع الأصالة والتميز',
    price: '١٦ ريال',
    image: '/images/arabic-coffee.jpg',
    icon: '🌟',
    tag: 'أصيل',
    color: 'from-yellow-900 to-amber-800',
  },
  {
    id: 5,
    name: 'مشروبات باردة',
    nameEn: 'Cold Drinks',
    description: 'تشكيلة متنوعة من القهوة المثلجة والكولد برو المحضرة بعناية فائقة',
    price: '٢٠ ريال',
    image: '/images/cold-drinks.jpg',
    icon: '🧊',
    tag: 'منعش',
    color: 'from-blue-900 to-slate-700',
  },
  {
    id: 6,
    name: 'حبوب بن فاخرة',
    nameEn: 'Premium Beans',
    description: 'حبوب بن فاخرة من أجود مناطق الإنتاج، محمصة بخبرة وإتقان لنكهة لا تُنسى',
    price: '٨٥ ريال / ٢٥٠جم',
    image: '/images/coffee-beans.jpg',
    icon: '🫘',
    tag: 'فاخر',
    color: 'from-brown-900 to-amber-900',
  },
];

export const features = [
  {
    icon: '🌿',
    title: 'بن طازج',
    description: 'نستخدم أجود أنواع حبوب البن المحمصة طازجاً يومياً',
  },
  {
    icon: '🏆',
    title: 'جودة فائقة',
    description: 'معايير صارمة في الاختيار والتحضير لضمان أفضل تجربة',
  },
  {
    icon: '🤝',
    title: 'ضيافة أصيلة',
    description: 'نرحب بضيوفنا بأحلى ضيافة سعودية أصيلة ودافئة',
  },
  {
    icon: '⚗️',
    title: 'تحضير احترافي',
    description: 'باريستا محترفون يحضرون كل كوب بحب وإتقان عالي',
  },
];

export const experienceFeatures = [
  { icon: '🫖', text: 'دلّة عربية أصيلة' },
  { icon: '🌙', text: 'أجواء مضيافة دافئة' },
  { icon: '🍂', text: 'تمر وبن محمص' },
  { icon: '🎨', text: 'ديكور عربي فاخر' },
  { icon: '🪑', text: 'جلسات مريحة بطابع عربي' },
  { icon: '✨', text: 'تجربة لا تُنسى' },
];
