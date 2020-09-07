import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  items: Array<Object> = [
    {
      "id": 9270,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=43",
      "description": "Est dolor enim non adipisicing nulla proident qui. Magna veniam veniam ullamco esse voluptate ex in tempor elit occaecat irure esse laborum. Amet ipsum enim adipisicing duis sunt sint ex.\r\n",
      "cost": 3.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 60,
      "main_unit": "box",
      "base_unit": "kg",
      "min_order_qty": 5,
      "max_order_qty": 60
    },
    {
      "id": 1907,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=31",
      "description": "Pariatur voluptate incididunt officia ullamco ea ex ullamco irure pariatur laborum. Proident dolor mollit nulla nostrud veniam nisi sit magna nisi commodo culpa labore fugiat. Ullamco qui cillum nisi aute nostrud laborum.\r\n",
      "cost": 3.3,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 60,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 4,
      "max_order_qty": 20
    },
    {
      "id": 9451,
      "name": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=31",
      "description": "Magna ullamco ut id aliquip ea nostrud ea. Consectetur fugiat aliqua deserunt aute sit cupidatat duis. Quis dolor ex aliquip ad culpa. Culpa aute pariatur duis proident velit labore exercitation nulla. Nulla deserunt elit qui anim voluptate voluptate aliquip elit adipisicing do proident duis Lorem. Cupidatat reprehenderit est nostrud sunt ut sunt nulla tempor adipisicing consequat enim elit consequat anim.\r\n",
      "cost": 2,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 20,
      "main_unit": "box",
      "base_unit": "g",
      "min_order_qty": 2,
      "max_order_qty": 30
    },
    {
      "id": 6148,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=46",
      "description": "Est laborum et aliquip non sint velit et dolor. Cupidatat enim ullamco enim eu officia cillum enim fugiat dolor. Aliqua sunt incididunt et qui consectetur reprehenderit duis id eiusmod voluptate proident. Sint reprehenderit irure incididunt do non anim reprehenderit velit voluptate incididunt velit ad consectetur aliquip. Officia laboris occaecat et Lorem duis reprehenderit. Aliqua aliqua pariatur eu elit commodo quis sit aliquip incididunt ad nisi in exercitation nostrud. Commodo cillum amet reprehenderit do reprehenderit Lorem.\r\n",
      "cost": 2,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 2,
      "max_order_qty": 60
    },
    {
      "id": 6287,
      "name": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=50",
      "description": "Sunt proident pariatur anim tempor id et Lorem et. In eu labore enim fugiat sit officia eiusmod. Officia est reprehenderit non mollit consequat sunt labore.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 20,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 5,
      "max_order_qty": 10
    },
    {
      "id": 1936,
      "name": "Barley",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=74",
      "description": "Id eiusmod proident aute ad incididunt et est pariatur ullamco culpa. Excepteur labore aute consequat voluptate consequat aute non dolor occaecat ea. Esse eu eu dolore labore id non ut aliqua ad amet esse ea. Aute et elit proident est ex ut exercitation qui in eiusmod labore laborum do anim.\r\n",
      "cost": 3.3,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 20,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 3,
      "max_order_qty": 40
    },
    {
      "id": 4855,
      "name": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=37",
      "description": "Esse deserunt sit minim anim officia dolore ut cillum veniam nulla velit excepteur et mollit. Magna eu id deserunt enim sint ex amet proident dolore. Voluptate ut elit labore minim exercitation pariatur tempor. Incididunt culpa minim ea velit qui ipsum laboris. Ex quis exercitation Lorem dolor ut voluptate ea. Ut aute officia duis duis dolore duis exercitation dolore veniam esse nisi sunt.\r\n",
      "cost": 4.2,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 20,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 3,
      "max_order_qty": 10
    },
    {
      "id": 6062,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=82",
      "description": "Eu enim nostrud aliquip tempor nulla sunt cillum tempor aute aliqua. Dolore minim Lorem proident exercitation aliqua ex laboris id laboris velit laboris amet magna. Ipsum commodo proident laboris fugiat. Deserunt incididunt in excepteur tempor deserunt do dolor magna.\r\n",
      "cost": 4.2,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 50,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 4,
      "max_order_qty": 50
    },
    {
      "id": 3906,
      "name": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=38",
      "description": "Exercitation culpa sunt laboris ad labore aliqua voluptate. Qui quis laborum esse minim esse magna eiusmod anim Lorem incididunt. Ex amet cillum duis voluptate mollit in labore. Commodo sunt est adipisicing est ut. Reprehenderit nisi deserunt nostrud consequat do. Aliqua officia commodo pariatur quis est nisi ut laboris. Magna ut consectetur nulla exercitation ex esse dolore proident ipsum eu ex Lorem.\r\n",
      "cost": 3.5,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 30,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 5,
      "max_order_qty": 50
    },
    {
      "id": 5373,
      "name": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=91",
      "description": "Cupidatat est est commodo dolore anim ullamco. Aute aliquip Lorem eiusmod magna consequat aliquip. Reprehenderit enim magna dolore culpa enim fugiat. Consequat ad nulla voluptate labore aute quis id esse deserunt mollit.\r\n",
      "cost": 3.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 40,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 3,
      "max_order_qty": 10
    },
    {
      "id": 5997,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=39",
      "description": "Fugiat id sit aute Lorem laboris ut deserunt adipisicing cupidatat et. Eu irure elit deserunt ea aliquip esse nulla labore fugiat. Nisi proident voluptate eiusmod occaecat dolor. Lorem nisi tempor mollit eu elit amet laborum do enim. Laboris ut cupidatat nisi magna officia qui ullamco ad. Laborum in nulla mollit nisi elit velit occaecat laborum aliquip sit elit aliquip non laboris. Qui ad et amet cillum enim consequat Lorem.\r\n",
      "cost": 3.3,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 60,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 2,
      "max_order_qty": 10
    },
    {
      "id": 1151,
      "name": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=51",
      "description": "Commodo minim enim et consectetur labore eiusmod nisi sint ullamco. Quis magna dolore irure veniam. Non ullamco non laboris consectetur ipsum. Cupidatat anim nisi voluptate consectetur id labore id aute excepteur qui. Voluptate Lorem incididunt duis nisi in et quis magna culpa. Culpa elit laboris ea et do velit sint exercitation cupidatat veniam ullamco enim.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 6,
      "max_order_qty": 40
    },
    {
      "id": 5237,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=94",
      "description": "Aute exercitation duis consectetur consequat dolore Lorem consequat qui ullamco culpa laboris. Duis est et consectetur est in. Nulla commodo ex proident nisi fugiat cillum laboris esse sint incididunt nisi in. Mollit in cillum Lorem aliquip nostrud pariatur magna sint commodo ex ad exercitation eu sunt. Adipisicing qui tempor eiusmod nulla eu quis aliqua consectetur voluptate qui nulla deserunt nostrud ullamco.\r\n",
      "cost": 1.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 70,
      "main_unit": "box",
      "base_unit": "g",
      "min_order_qty": 2,
      "max_order_qty": 30
    },
    {
      "id": 5405,
      "name": "Refined Sugar",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=78",
      "description": "Exercitation nulla sint est minim reprehenderit. Reprehenderit deserunt magna elit reprehenderit magna cupidatat deserunt do exercitation commodo occaecat tempor do. Dolore minim officia cupidatat officia veniam do id voluptate tempor.\r\n",
      "cost": 3.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 70,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 6,
      "max_order_qty": 60
    },
    {
      "id": 8026,
      "name": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=21",
      "description": "Ullamco aute reprehenderit eiusmod est reprehenderit fugiat elit ipsum do amet elit aliquip nulla. Adipisicing id est magna irure officia. Sint cupidatat nulla sit enim. Eu ad cupidatat aute id labore tempor commodo sint labore occaecat dolore esse ut voluptate. Minim occaecat laborum cupidatat officia. Consequat esse aute aliquip nulla laborum veniam velit officia aliqua. Ex exercitation ea voluptate id nisi cillum officia qui adipisicing id irure sunt nulla fugiat.\r\n",
      "cost": 3.7,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 20
    },
    {
      "id": 7591,
      "name": "Q Mochi - Original",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=71",
      "description": "Cillum elit incididunt nisi adipisicing pariatur laboris minim eu adipisicing fugiat nulla. Ad eiusmod magna laborum officia est eiusmod amet enim ad et eiusmod ex in. Reprehenderit exercitation aute aliqua cillum pariatur nisi cupidatat qui sint non aliqua. Eu Lorem ullamco est est ea anim laborum magna quis id in ut.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 70,
      "main_unit": "box",
      "base_unit": "kg",
      "min_order_qty": 3,
      "max_order_qty": 40
    },
    {
      "id": 1927,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=5",
      "description": "Ex aliqua qui enim fugiat eiusmod et excepteur incididunt minim. Ex do culpa nulla irure dolore. Duis fugiat ad culpa est ipsum laboris ea duis velit enim pariatur tempor. Laborum officia incididunt et aute. Nostrud tempor qui occaecat non. Occaecat deserunt fugiat consectetur proident commodo.\r\n",
      "cost": 2.6,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 60,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 4,
      "max_order_qty": 30
    },
    {
      "id": 8131,
      "name": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=96",
      "description": "Voluptate ut amet officia tempor commodo cupidatat consequat. Sint in mollit aliquip esse velit in et officia Lorem et consectetur. Laboris mollit pariatur culpa aute aliquip ex Lorem et. Deserunt tempor velit ea nisi velit excepteur deserunt culpa consectetur mollit dolore ex.\r\n",
      "cost": 2.6,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 40,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 1,
      "max_order_qty": 50
    },
    {
      "id": 5098,
      "name": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=62",
      "description": "Excepteur fugiat ad aliqua exercitation esse et nisi sit sint est consectetur. Cillum esse incididunt anim cillum anim aliqua ut ex aliquip ad labore aute minim. Proident laboris do do elit dolore ad irure. Id elit sit mollit commodo cillum consequat anim officia enim deserunt deserunt proident mollit adipisicing. Labore veniam dolor tempor proident cupidatat culpa ad dolor pariatur nisi.\r\n",
      "cost": 3.3,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 30,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 6,
      "max_order_qty": 10
    },
    {
      "id": 5196,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=16",
      "description": "Aliquip aute magna laborum nisi enim sint incididunt cillum ex pariatur irure quis veniam. Adipisicing eiusmod enim ut Lorem. Ipsum eiusmod ut in exercitation sint qui reprehenderit culpa ex sit eiusmod irure duis. Anim sunt do excepteur nostrud magna cupidatat ipsum culpa qui adipisicing ad enim culpa velit. Minim labore laborum sunt enim excepteur commodo ea laboris. Cupidatat quis commodo eu cupidatat sit aliquip aliqua labore est ullamco.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 30,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 1,
      "max_order_qty": 60
    },
    {
      "id": 2088,
      "name": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=28",
      "description": "Cillum et proident deserunt deserunt do sint culpa Lorem magna minim cillum. Commodo cillum dolore deserunt anim. Commodo excepteur in nisi eiusmod consectetur do exercitation tempor. Tempor minim eiusmod nisi quis pariatur laborum mollit nisi. Ipsum ad in adipisicing velit culpa. Cillum sint ex amet incididunt. Enim occaecat aute qui culpa laboris fugiat quis dolore anim consequat ad et in.\r\n",
      "cost": 3.3,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 50,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 1,
      "max_order_qty": 20
    },
    {
      "id": 6337,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=51",
      "description": "Duis tempor pariatur duis Lorem velit tempor cupidatat cupidatat nostrud non in voluptate. Cupidatat irure dolor eu ex. Nulla excepteur incididunt eiusmod tempor anim est labore nulla. Qui ut ipsum labore mollit ut elit commodo incididunt sunt. Ut elit nulla nostrud adipisicing fugiat commodo laborum dolore. Eiusmod minim proident deserunt reprehenderit occaecat eu ut.\r\n",
      "cost": 4.2,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 10,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 3,
      "max_order_qty": 50
    },
    {
      "id": 1193,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=55",
      "description": "Cupidatat proident non proident nulla qui in. Dolor ex ex minim sint ea laborum reprehenderit incididunt ea pariatur ad. Laborum ea qui anim nostrud qui commodo esse adipisicing sint. Incididunt incididunt do qui adipisicing. Excepteur veniam esse culpa cupidatat pariatur incididunt. Culpa esse qui nisi Lorem reprehenderit magna nostrud ex voluptate.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 70,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 20
    },
    {
      "id": 3465,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=77",
      "description": "Deserunt laborum ex fugiat magna ullamco eu veniam. Tempor ad excepteur quis duis eu anim consequat non ut. Sunt dolore occaecat elit sint sunt ipsum excepteur velit. Consectetur adipisicing aute tempor esse deserunt dolor enim. Amet exercitation ea cupidatat minim labore voluptate.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 60,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 4,
      "max_order_qty": 40
    },
    {
      "id": 9561,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=40",
      "description": "Ex commodo ut adipisicing occaecat fugiat labore non cupidatat sint duis dolor officia. Anim cillum sint quis nulla. Commodo laborum dolor fugiat sit exercitation incididunt aliqua proident. Occaecat veniam anim velit cupidatat nulla qui cillum Lorem ipsum labore aliqua veniam. Sit nostrud non qui magna proident.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 40,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 6,
      "max_order_qty": 70
    },
    {
      "id": 5152,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=40",
      "description": "Enim sint irure non ullamco sunt. Occaecat aliquip ad ullamco sint mollit minim ipsum magna laborum adipisicing reprehenderit aute excepteur. Duis commodo irure ullamco mollit officia reprehenderit veniam id incididunt irure sit ipsum. Minim ea deserunt cillum voluptate quis laborum exercitation magna reprehenderit officia cupidatat.\r\n",
      "cost": 1.5,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 60,
      "main_unit": "box",
      "base_unit": "g",
      "min_order_qty": 1,
      "max_order_qty": 40
    },
    {
      "id": 4150,
      "name": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=68",
      "description": "Deserunt adipisicing aliqua excepteur elit ipsum. Lorem labore ex fugiat cillum sint ea amet irure minim culpa. Reprehenderit non enim officia velit proident cupidatat reprehenderit enim. Non eu id ipsum minim labore esse do.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 70,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 3,
      "max_order_qty": 10
    },
    {
      "id": 1816,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=87",
      "description": "Qui mollit commodo reprehenderit sit dolore ea est do aliqua adipisicing elit nisi dolor ea. Ipsum est et cupidatat nisi. Excepteur aliqua velit anim irure. Id non consequat ullamco culpa nostrud ex non nulla sunt nisi irure quis ullamco labore. Mollit ex irure dolore velit eiusmod eu qui reprehenderit tempor sint ex.\r\n",
      "cost": 2,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 40,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 4,
      "max_order_qty": 20
    },
    {
      "id": 2630,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=1",
      "description": "Proident est velit et ipsum non proident sit magna ad dolore laboris. Laborum mollit et laborum sunt cupidatat anim ipsum officia aliquip eu commodo. Occaecat qui minim labore qui tempor elit do. Id deserunt dolor elit aliqua ullamco fugiat eiusmod. Eiusmod proident pariatur velit veniam ad ipsum dolor dolore veniam veniam reprehenderit laboris commodo ad. Incididunt dolore ea veniam pariatur ea esse cillum minim magna elit occaecat.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 2,
      "max_order_qty": 70
    },
    {
      "id": 8902,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=75",
      "description": "Non sunt commodo id anim. Occaecat cupidatat culpa proident ex officia occaecat minim velit ut proident anim aute. Reprehenderit culpa sit ex aute. Amet non Lorem ea amet nisi qui id ad excepteur veniam dolore do. Consequat exercitation nulla consequat sit velit pariatur duis excepteur. Ullamco reprehenderit amet officia pariatur elit ea consequat amet laboris. Anim enim pariatur labore cillum voluptate nostrud minim reprehenderit.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "in_stock": 50,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 5,
      "max_order_qty": 70
    },
    {
      "id": 6485,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=49",
      "description": "Voluptate do est duis fugiat reprehenderit laboris excepteur do sunt minim dolor. Deserunt nostrud magna irure esse proident proident proident sint sint laborum proident in. Exercitation nostrud labore est tempor minim cillum. Commodo Lorem velit consequat mollit do aliqua. Qui aliquip laborum minim deserunt laboris culpa minim aliquip velit. Eiusmod nulla voluptate magna ut anim dolore ad commodo cupidatat sint ut. Consectetur in officia elit cupidatat laborum et ex sint Lorem excepteur duis pariatur.\r\n",
      "cost": 1.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 40,
      "main_unit": "box",
      "base_unit": "ml",
      "min_order_qty": 3,
      "max_order_qty": 60
    },
    {
      "id": 3896,
      "name": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=75",
      "description": "Commodo pariatur esse aliquip pariatur nostrud anim proident sint sit ut eiusmod minim. Magna sint do duis tempor reprehenderit voluptate aliqua non minim non cillum. Reprehenderit nisi nostrud veniam enim in. Est proident ipsum in fugiat consectetur dolor mollit veniam consectetur et et. Elit cillum ad tempor deserunt id sit consectetur consequat.\r\n",
      "cost": 3.7,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 60,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 60
    },
    {
      "id": 9504,
      "name": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=82",
      "description": "Aliquip proident cupidatat reprehenderit mollit sit quis anim. Amet reprehenderit qui voluptate ea eu magna ullamco. Labore fugiat velit id consequat sint esse. Pariatur minim do sit laborum labore. Do proident sint tempor reprehenderit aliquip nulla proident veniam consequat pariatur nisi ullamco velit. Magna fugiat magna culpa laborum aliqua amet velit. Eu laborum duis exercitation tempor irure Lorem adipisicing laboris.\r\n",
      "cost": 2.6,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 50,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 3,
      "max_order_qty": 50
    },
    {
      "id": 5383,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=86",
      "description": "Incididunt pariatur minim consectetur deserunt deserunt mollit amet irure. Ullamco incididunt adipisicing fugiat do laborum officia cillum sint. Dolore magna fugiat elit cillum ipsum dolore nulla. Consectetur voluptate ex est consectetur non exercitation sit. Proident est eiusmod in minim ipsum sunt dolor ex sunt quis minim occaecat aliqua non. Aute eu reprehenderit irure consequat. Lorem amet cillum magna cillum consectetur id incididunt pariatur pariatur ullamco et magna nostrud.\r\n",
      "cost": 2,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 70,
      "main_unit": "box",
      "base_unit": "kg",
      "min_order_qty": 4,
      "max_order_qty": 50
    },
    {
      "id": 3164,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=12",
      "description": "Adipisicing dolor exercitation dolore minim ut. Pariatur do officia veniam qui non amet consectetur ullamco ex voluptate. Proident minim est ipsum veniam deserunt dolore esse non laboris qui non mollit. Consectetur minim culpa veniam reprehenderit et duis ea et. Do ullamco aliquip qui sint. Duis deserunt officia dolor cillum in laboris sunt esse culpa eiusmod ad. Cillum laborum laborum nisi nulla id eu occaecat fugiat ut occaecat laboris exercitation.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 70,
      "main_unit": "bag",
      "base_unit": "g",
      "min_order_qty": 5,
      "max_order_qty": 20
    },
    {
      "id": 5919,
      "name": "Barley",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=79",
      "description": "Quis in adipisicing sunt eiusmod labore est ea Lorem quis anim laboris fugiat. Do laborum reprehenderit velit in esse non consectetur reprehenderit aute dolore cupidatat laboris cupidatat sint. Ex ullamco culpa incididunt eu et veniam excepteur laborum adipisicing enim cupidatat qui amet. Culpa consequat consequat est velit commodo exercitation labore. Cupidatat qui commodo ea nisi esse et quis consequat.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 6,
      "max_order_qty": 40
    },
    {
      "id": 9753,
      "name": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=34",
      "description": "Occaecat fugiat aliqua fugiat excepteur ipsum velit. Adipisicing esse tempor irure sint sunt commodo. Laboris enim occaecat in amet in ex do exercitation. Et do eiusmod veniam eiusmod consequat consequat officia tempor Lorem veniam est proident occaecat. Laborum exercitation reprehenderit esse eu et Lorem et nulla ea. Cillum ea cillum eu enim nostrud.\r\n",
      "cost": 3.3,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 70,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 5,
      "max_order_qty": 30
    },
    {
      "id": 4967,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=93",
      "description": "Et incididunt consequat culpa occaecat est amet in est. Veniam non consectetur cillum ut laborum voluptate aliquip tempor nostrud minim eu mollit enim nisi. Elit consequat ipsum nisi ut occaecat exercitation minim commodo cillum consectetur labore magna ad fugiat. Nisi pariatur pariatur eiusmod dolore laborum elit esse mollit nulla proident qui sunt. Culpa exercitation aliqua anim sit consequat proident. Laborum ipsum mollit esse nostrud laborum ea aliquip.\r\n",
      "cost": 3.7,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 50,
      "main_unit": "box",
      "base_unit": "kg",
      "min_order_qty": 1,
      "max_order_qty": 70
    },
    {
      "id": 6377,
      "name": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=79",
      "description": "Consectetur amet mollit est culpa reprehenderit non Lorem et occaecat laborum in velit. Labore deserunt aliqua aliqua eu culpa occaecat duis ad ex ad. Non non non et laboris non anim irure Lorem.\r\n",
      "cost": 2,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 50,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 2,
      "max_order_qty": 70
    },
    {
      "id": 3117,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=18",
      "description": "Duis officia esse ullamco anim laboris laboris tempor enim sint est dolore. Aute voluptate voluptate dolore do mollit sint aliqua et ex amet id Lorem. Esse aute ipsum sunt quis.\r\n",
      "cost": 3.7,
      "package_info": "0.6kg/bag 24bags/ctn",
      "in_stock": 20,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 3,
      "max_order_qty": 50
    },
    {
      "id": 1895,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=38",
      "description": "Proident officia anim aliquip ut et dolor Lorem aute. Laborum nisi culpa quis ipsum anim cupidatat nostrud cillum nulla. Dolor id occaecat nostrud elit proident incididunt voluptate deserunt culpa nisi et. Cupidatat duis ut officia quis velit ad magna nostrud sit. Culpa aliquip dolore aliquip laborum mollit Lorem. Lorem pariatur mollit dolor minim laboris qui laboris consectetur Lorem.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 30,
      "main_unit": "box",
      "base_unit": "g",
      "min_order_qty": 4,
      "max_order_qty": 50
    },
    {
      "id": 7508,
      "name": "Barley",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=45",
      "description": "Proident tempor veniam dolore pariatur minim ipsum occaecat dolor officia officia velit ea est. Aliqua in do ex dolor esse. Anim pariatur sint fugiat laborum consequat labore irure nostrud occaecat.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 40,
      "main_unit": "box",
      "base_unit": "ml",
      "min_order_qty": 3,
      "max_order_qty": 30
    },
    {
      "id": 4309,
      "name": "Refined Sugar",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=6",
      "description": "Ipsum ea aliqua minim aliquip consectetur dolor qui consectetur non nulla aute nulla sint. Enim dolore occaecat sunt velit enim id Lorem nisi mollit quis. Irure ipsum irure sint veniam laboris exercitation aliquip ut magna in eu officia dolor. Eu officia aute aliqua est ex est tempor velit. Ipsum ipsum voluptate laboris sint ea pariatur. Esse officia dolore cillum non elit ea dolor commodo magna occaecat. Dolor fugiat incididunt labore ipsum deserunt consectetur deserunt sunt incididunt id.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "in_stock": 40,
      "main_unit": "box",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 70
    },
    {
      "id": 5633,
      "name": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=34",
      "description": "Occaecat ipsum culpa minim veniam amet. Id cupidatat in cillum et qui sint ad aliqua cupidatat id sunt excepteur dolor. Veniam sunt exercitation nostrud sunt minim tempor aute do ipsum. Consectetur voluptate consectetur laboris esse laborum velit duis sit ullamco incididunt magna dolor. Magna dolor culpa cillum exercitation do cupidatat ullamco fugiat pariatur.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 20,
      "main_unit": "box",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 50
    },
    {
      "id": 5130,
      "name": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=79",
      "description": "Nostrud eu occaecat et aliqua velit sit. Incididunt Lorem laborum dolor ut incididunt laborum aute adipisicing consectetur do aute minim. Esse proident elit eu aute velit minim pariatur eiusmod Lorem sint. Anim quis incididunt labore nisi.\r\n",
      "cost": 3.5,
      "package_info": "1kg/bag 6bags/ctn",
      "in_stock": 70,
      "main_unit": "bottle",
      "base_unit": "kg",
      "min_order_qty": 6,
      "max_order_qty": 60
    },
    {
      "id": 6011,
      "name": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=94",
      "description": "Et sunt dolore sint sint elit cillum ut ad labore deserunt proident ipsum incididunt consectetur. Elit duis anim eu occaecat deserunt excepteur nisi ut reprehenderit nulla dolor dolore labore. Aute et Lorem sint eiusmod cupidatat occaecat ullamco commodo ea reprehenderit sunt qui adipisicing enim. Sunt quis nulla sit labore duis dolor adipisicing aliquip fugiat magna. Duis aliqua magna aute mollit. Irure deserunt tempor non sunt.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "in_stock": 10,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 5,
      "max_order_qty": 10
    },
    {
      "id": 7059,
      "name": "Q Mochi - Original",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=35",
      "description": "Aliquip dolor in commodo reprehenderit minim magna reprehenderit eu pariatur ea cupidatat laborum. Laboris sit commodo sit adipisicing ipsum in Lorem. Mollit fugiat proident mollit ipsum id ad anim. Exercitation pariatur et irure irure ullamco laborum occaecat enim.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 30,
      "main_unit": "bottle",
      "base_unit": "ml",
      "min_order_qty": 5,
      "max_order_qty": 30
    },
    {
      "id": 1313,
      "name": "Mung Bean Cake",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=39",
      "description": "Officia enim consequat ex ea. Aliqua dolor amet minim mollit fugiat aute ipsum. Nostrud elit do non ullamco est est eiusmod et.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "in_stock": 50,
      "main_unit": "bottle",
      "base_unit": "g",
      "min_order_qty": 1,
      "max_order_qty": 40
    },
    {
      "id": 9212,
      "name": "Passion Fruit Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=11",
      "description": "Elit sint sit laborum aliqua magna excepteur. Cillum fugiat sit anim ea amet proident amet ipsum aliquip cillum. Laboris exercitation commodo id proident esse id.\r\n",
      "cost": 2.6,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 50,
      "main_unit": "bag",
      "base_unit": "kg",
      "min_order_qty": 1,
      "max_order_qty": 10
    },
    {
      "id": 2360,
      "name": "Refined Sugar",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=66",
      "description": "Nulla nulla et est non incididunt ad deserunt est magna nulla ex ex aliquip aliquip. Do Lorem proident eiusmod consequat aute sint enim aliqua dolor incididunt excepteur dolor. Pariatur nulla ipsum ex commodo eiusmod enim consequat labore. Quis deserunt et dolor culpa dolore deserunt velit. Do nostrud esse officia veniam veniam aliqua Lorem do pariatur sint. Duis sit velit fugiat labore non eiusmod. Do aliqua ullamco nulla excepteur reprehenderit eu ex cupidatat sint cillum ipsum magna aute.\r\n",
      "cost": 2.6,
      "package_info": "1.2kg/bag 12bags/ctn",
      "in_stock": 50,
      "main_unit": "bag",
      "base_unit": "ml",
      "min_order_qty": 6,
      "max_order_qty": 50
    }
  ]


  item_display_style: String = 'list';

  ordered_item: Array<Object> = [];

  selected_item: Object;
  selected_ordered_item: Object;

  ngOnInit(): void {
  }

  item_display_style_change = style => {
    this.item_display_style = style;
  }

  select_item = item => {
    this.selected_item = item;
    if(this.selected_item['in_stock'] == 0){
      this.selected_item['added_qty'] = 0;
    }else{
      this.selected_item['added_qty'] = this.selected_item['min_order_qty'];
    }
  }

  select_ordered_item = item => {
    this.selected_item = null;
    this.selected_ordered_item = item;
    this.items.forEach(item => {
      if(item['id'] == this.selected_ordered_item['id']){
        this.selected_item = item;
      }
    })
  }

  increase_selected_item = () => {
    if(this.selected_item['added_qty'] < this.selected_item['in_stock']){
      this.selected_item['added_qty'] += this.selected_item['min_order_qty'];
    }else{
      // Show error alert
    }
  }
  decrease_selected_item = () => {
    if(0 < this.selected_item['added_qty']){
      this.selected_item['added_qty'] -= this.selected_item['min_order_qty'];
    }
  }

  order_item = () => {
    this.selected_ordered_item = null;
    if(this.selected_item['added_qty'] != 0){
      if(this.ordered_item.length != 0){
        this.ordered_item.forEach(item => {
          if(item['id'] == this.selected_item['id']){
            this.selected_ordered_item = item;
          }
        })
      }
      if(this.selected_ordered_item){
        this.selected_ordered_item['ordered_qty'] += this.selected_item['added_qty'];
        this.selected_item['in_stock'] -= this.selected_item['added_qty'];
      }else{
        this.selected_item['in_stock'] -= this.selected_item['added_qty'];
        this.ordered_item.push({
          id: this.selected_item['id'],
          name: this.selected_item['name'],
          image: this.selected_item['image'],
          description: this.selected_item['description'],
          cost: this.selected_item['cost'],
          package_info: this.selected_item['package_info'],
          added_qty: this.selected_item['added_qty'],
          base_unit: this.selected_item['base_unit'],
          main_unit: this.selected_item['main_unit'],
        })
      }
    }else{
      // Show error alert
    }
    this.selected_item['added_qty'] = 0;
  }

  remove_ordered_item = () => {
    this.selected_item['in_stock'] += this.selected_ordered_item['ordered_qty'];
    this.ordered_item = [...this.ordered_item.filter(item => item['id'] != this.selected_ordered_item['id'])];
    this.selected_ordered_item = null;
  }

  clear_ordered_items = () => {
    this.ordered_item = [];
  }

  sum_total_price = () => {
    let sum = 0;
    if(this.ordered_item.length != 0){
      this.ordered_item.forEach(item => {
        sum += item['cost'] * item['ordered_qty'];
      })
    }
    return sum;
  }
}
