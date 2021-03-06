const photos2 = ["../img/changing/chairs/chair1.jpg",
"../img/changing/chairs/chair2.jpg",
"../img/changing/chairs/chair3.jpg",
"../img/changing/chairs/chair4.jpg",
"../img/changing/desks/desk1.webp",
"../img/changing/desks/desk2.webp",
"../img/changing/desks/desk3.webp",
"../img/changing/desks/desk4.webp",
"../img/changing/elec/elec1.jpg",
"../img/changing/elec/elec2.jpg",
"../img/changing/elec/elec3.jpg",
"../img/changing/elec/elec4.jpg"];

const names2 = [
"Fotel biurowy Zira",
"Fotel biurowy Shine czarny",
"Fotel biurowy Shine biały",
"Fotel gabinetowy Corium",
"Biurko Mati grafit",
"Biurko Lofter LO9",
"Biurko Berg 6 crem/dąb złoty",
"136x66x18 Model 0 Czarny Low",
"Mysz APPLE Magic Mouse 2 Biała",
"Mysz LOGITECH MX Anywhere 3 Grafitowy",
"Logitech MX Keys",
"Logitech K270"
];

const links2=[
"../products/chairs/chair1.html",
"../products/chairs/chair2.html",
"../products/chairs/chair3.html",
"../products/chairs/chair4.html",
"../products/desks/desk1.html",
"../products/desks/desk2.html",
"../products/desks/desk3.html",
"../products/desks/desk4.html",
"../products/elec/elec1.html",
"../products/elec/elec2.html",
"../products/elec/elec3.html",
"../products/elec/elec4.html"
];

const prices = [
"1 999 PLN",
"1 335 PLN",
"1 966 PLN",
"2 220 PLN",
"369 PLN",
"439 PLN",
"399 PLN",
"289 PLN",
"400 PLN",
"360 PLN",
"499 PLN",
"139 PLN"
];

const desc = [
"Fotel gabinetowy Zira - zderzenie piękna z komfortem. Zaprojektowany przez studio Horn Design and Engineering fotel Zira przywodzi na myśl skojarzenia z prestiżowymi przestrzeniami. Stworzony z myślą o zapewnieniu najwyższego poziomu komfortu przy jednoczesnym zachowaniu estetyki. W efekcie powstał fotel, który nie tylko wygląda niesamowicie, ale również zapewnia wsparcie całego ciała. Wraz z intuicyjnym mechanizmem gwarantuje pełną ergonomię i komfort siedzenia na co dzień. Zira to z jednej strony minimalistyczny design, w którym nie ma żadnych zbędnych elementów ponad to co niezbędne.",
"Fotel Shine został zaprojektowany z myślą o osobach, które poza modą i stylowym designem zwracają uwage na pochodzenie materiałów. Minimalistyczna, a jednocześnie bardzo elegancka forma sprawia, że fotel biurowy Shine EFG 120BA, idealnie sprawdzi sie w domowym biurze jak i w firmie. Niemieccy projektanci w połączeniu z włoskim mechanizmem świartowej klasy sprawil, że koło fotela Shine nie da się przejsć obojętnie.",
"Fotel Shine został zaprojektowany z myślą o osobach, które poza modą i stylowym designem zwracają uwage na pochodzenie materiałów. Minimalistyczna, a jednocześnie bardzo elegancka forma sprawia, że fotel biurowy Shine EFG 120WA, idealnie sprawdzi sie w domowym biurze jak i w firmie. Niemieccy projektanci w połączeniu z włoskim mechanizmem świartowej klasy sprawil, że koło fotela Shine nie da się przejsć obojętnie.",
"Nowoczesny i zarazem elegancki design inspirowany prostymi liniami, w połączeniu z wieloma wariantami kolorystycznymi sprawia, że fotel Corium idealnie odnajdzie się w eleganckim biurze, ale też w zaciszu domowego biura.",
"Biurko MATI wykonane zostało z wysokiej jakości płyty laminowanej w wybarwieniu Biały oraz Grafit. Wyposażone w dwie pojemne szuflady.",
"Meble LOFTER to świetna propozycja do pokoju młodzieżowego jak i salonu. System składa się z 12 brył dzięki czemu każdy może dopasować zestaw według własnych potrzeb. Dzięki połączeniu betonu millenium z dębem wotan spełnią oczekiwania nawet najbardziej wymagających klientów.",
"Kolekcja Berg idealni spełni się w aranżacji salonu czy pokoju dziennego. Ciekawie połączenie jasnego cremu z ciepłym kolorem dąb złoty sprawia, że wnętrze nabierze niezwykłego wyglądu. Ryflowane obrzeża oraz małe, zgrabne uchwyty nadają meblom elegancji. Głównym atutem systemu Berg jest funkcjonalność, pakowność oraz minimalistyczna stylistyka. Materiały i solidne wykonanie świadczą o wysokiej jakości mebli Berg.",
"Biurka GAMINGOWE DAMING seria LOW są stworzone z myślą o graczach, youtuberach, a także wymagających użytkownikach, którzy cenią sobie jakość i desing. Nasze biurka GAMINGOWE nie dość że mają wyjątkowy wygląd są solidne i trwałe. Każde biurko robione jest przez doświadczonego stolarza a nie hurtowo, przez co biurka są najwyższej jakości. Posiada gruby wytrzymały blat, regulowane nogi,  taśmę led",
"Magic Mouse 2 to bezprzewodowa mysz renomowanej marki Apple. Stworzona została z myślą o użytkownikach komputerów MacBook. Mysz zaprojektowano z dbałością o najmniejszy szczegół i z niebywałą precyzją. Przyciski i kółka rozmieszczono tak, aby użytkownik mógł się cieszyć precyzyjnym sterowaniem i płynnym działaniem.",
"Potrzebujesz mobilnej myszki? MX Anywhere 3 to niewielka myszka zaprojektowana z myślą o pracy mobilnej. Korzystaj z niej w dowolnym miejscu - w domu, w pociągu czy kawiarni i nie trać na wydajności.",
"Logitech MX Keys to bezprzewodowa klawiatura z inteligentnym podświetleniem. Wklęsłe klawisze pracują cicho i dokładnie, szybko reagując na stuknięcia. Dzięki łączności Bluetooth klawiatura może pracować z kilkoma urządzeniami.",
"ogitech K270 to płaska, bezprzewodowa, pełnowymiarowa klawiatura w kolorze czarnym. Połączysz ją ze swoim komputerem poprzez mały adapter USB. Dzięki temu Twoje stanowisko pracy zyskuje dodatkową przestrzeń – nie zajmuje go zbędny kabel. Klawiatura posiada membranowy typ klawiszy, dzięki czemu ma niską wagę i stosunkowo ciche działanie. Wydzielona sekcja numeryczna ułatwia przeprowadzanie szybkich kalkulacji."
];

const bonus = [
"https://pim.elzap.eu/resource/wymiary-zira-1.png?w=700&amp;fit=crop&quot",
"https://pim.elzap.eu/resource/wymiary-shine-120.png?w=700&amp;fit=crop&quot",
"https://pim.elzap.eu/resource/wymiary-shine-120.png?w=700&amp",
"https://pim.elzap.eu/resource/wymiary-corium.png?w=700&amp",
"https://www.merkurymarket.pl/gfx/merkurymarket/_thumbs/sklep_oferta/84061/biurko_mati_grafit_3,bIp0v5mco1Tw4YiqmplnarJlg3V7k52q-jpg.webp",
"https://www.merkurymarket.pl/gfx/merkurymarket/_thumbs/sklep_oferta/87685/biurko_lofter_lo9_2,a4p0v5ebqFTw4YiqmplnarJphXd-kZ2p-jpg.webp",
"https://www.merkurymarket.pl/gfx/merkurymarket/_thumbs/sklep_oferta/26609/biurko_berg_6_cremdab_zloty,a4p0v5ebqFTw4Yiqmplna6lnhXt7mpqp-jpg.webp",
"https://www.merkurymarket.pl/gfx/merkurymarket/_thumbs/sklep_oferta/95659/biurko_gamingowe_136x66x18_model_0_czarny_low_3,a4p0v5ebqFTw4Yiqmplna6lpiXV_lZql-jpg.webp",
"https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/93/935780/5.jpg",
"https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/25/2561334/Mysz-LOGITECH-MX-Anywhere-3-Grafitowy-funkcje1.jpg",
"https://static.komputronik.pl/product-picture/6/KLLOGWIRDESMXKEYS-5.jpg",
"https://static.komputronik.pl/product-picture/6/KLLOGWIREK270-5.jpg"
];

