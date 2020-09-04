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
      "id": 3486,
      "name": "Taro",
      "image": "http://placehold.it/180x180",
      "description": "Velit labore voluptate reprehenderit excepteur est sint ipsum. Minim irure cillum sit magna excepteur officia ullamco elit ullamco. Labore amet pariatur proident in sit anim nostrud ad eu esse excepteur anim commodo exercitation. Amet fugiat tempor laboris elit et nisi occaecat sunt laboris ipsum in deserunt. Minim et culpa anim aliquip pariatur consequat. Deserunt duis elit voluptate irure eu ad laborum eu est. Nisi voluptate Lorem voluptate commodo minim culpa sit.\r\n",
      "cost": 3.7,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 7818,
      "name": "Refined Sugar",
      "image": "http://placehold.it/180x180",
      "description": "Esse ut dolore consectetur non ex. Eiusmod labore excepteur sint ea nulla cupidatat nulla minim. Sit incididunt sunt ea ea esse deserunt nulla tempor tempor enim laboris magna. Veniam est excepteur laborum incididunt veniam aliquip cupidatat tempor et Lorem reprehenderit dolor sint culpa. Nostrud elit sit magna esse mollit pariatur cupidatat proident et exercitation dolor proident ullamco ullamco. Ex consequat nulla nisi et proident sint labore labore ut reprehenderit veniam nostrud aute. Mollit enim deserunt in enim reprehenderit et aliqua.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 5,
      "unit": "bottle"
    },
    {
      "id": 6426,
      "name": "Q Mochi - Brown Sugar ",
      "image": "http://placehold.it/180x180",
      "description": "Aliquip deserunt Lorem quis aliqua minim tempor Lorem veniam velit minim culpa. Non voluptate magna Lorem in fugiat est sit ad aute deserunt. Anim et minim pariatur et ipsum minim excepteur enim tempor ipsum dolore deserunt consequat sint. Dolor ipsum pariatur laborum ea enim aute magna commodo dolore est occaecat ipsum fugiat consequat. Irure cupidatat voluptate dolor aliquip cupidatat id laborum nostrud id. Anim eiusmod non minim duis do elit eiusmod anim elit consequat labore elit proident laborum. Aliquip voluptate in irure et nulla sunt non in ullamco veniam sit nisi.\r\n",
      "cost": 2.6,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 3,
      "unit": "bottle"
    },
    {
      "id": 3254,
      "name": "Barley",
      "image": "http://placehold.it/180x180",
      "description": "Quis eiusmod tempor qui proident laboris aute. Consequat nostrud ullamco enim commodo eu minim. Non sunt fugiat magna fugiat dolore amet et minim ea culpa nulla. Quis consectetur laboris dolor mollit quis aute. Incididunt voluptate ad ex cillum sunt pariatur. Est incididunt velit ea do ad sunt ipsum. Reprehenderit id nulla fugiat excepteur cillum veniam officia et minim laboris pariatur incididunt.\r\n",
      "cost": 4.2,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 2,
      "unit": "bottle"
    },
    {
      "id": 9206,
      "name": "Lemon Syrup",
      "image": "http://placehold.it/300x300",
      "description": "Anim qui labore cillum deserunt fugiat enim pariatur labore esse aliqua veniam eiusmod. Amet consequat fugiat et est magna minim mollit adipisicing reprehenderit et occaecat non. Ipsum esse nisi enim ad cillum duis dolor eu adipisicing incididunt tempor adipisicing adipisicing.\r\n",
      "cost": 2,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6,
      "unit": "box"
    },
    {
      "id": 5265,
      "name": "Passion Fruit Syrup",
      "image": "http://placehold.it/300x300",
      "description": "Eu eu nostrud eu Lorem consequat irure ea proident cupidatat. Mollit qui consectetur exercitation incididunt. Aliqua cupidatat non in in cillum irure elit elit magna eiusmod ex velit. Laborum veniam Lorem ipsum velit fugiat amet ad excepteur.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 6,
      "unit": "bottle"
    },
    {
      "id": 9819,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "https://loremflickr.com/200/200",
      "description": "Proident deserunt reprehenderit aliqua nulla duis fugiat ipsum consectetur Lorem irure dolor id. Officia tempor ut irure et adipisicing cillum id non. Et laboris quis deserunt laboris ad Lorem ad culpa duis incididunt. Et elit officia dolor sunt et aliquip. Quis incididunt id ad cillum non reprehenderit exercitation nulla commodo ipsum deserunt aliquip. Amet do nostrud elit dolore. Nostrud non dolore sint tempor id enim.\r\n",
      "cost": 3.3,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 1,
      "unit": "bag"
    },
    {
      "id": 1018,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "http://placehold.it/180x180",
      "description": "Voluptate ullamco dolore aliquip tempor proident dolore tempor. Cillum aliqua ipsum consectetur esse cillum sit commodo sunt anim. Deserunt sit aliquip Lorem ad in nostrud. Occaecat ipsum consectetur exercitation minim.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 5,
      "unit": "bottle"
    },
    {
      "id": 1751,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/180x180",
      "description": "Dolor incididunt sunt ut ipsum proident amet officia exercitation dolore sint ipsum. In consequat occaecat consequat qui voluptate non ad velit elit dolore. Irure esse et id tempor ex magna voluptate nostrud sit est minim aliquip. Deserunt elit pariatur mollit eu excepteur reprehenderit mollit voluptate veniam aliqua aliqua cupidatat non duis. Dolor fugiat mollit anim non dolore labore nulla. Excepteur nostrud Lorem irure cupidatat consequat voluptate id consectetur duis. Mollit dolore enim sit Lorem consectetur anim.\r\n",
      "cost": 2.6,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 5,
      "unit": "box"
    },
    {
      "id": 9139,
      "name": "Mung Bean Cake",
      "image": "https://picsum.photos/200/200",
      "description": "Et incididunt magna deserunt culpa nulla laborum laboris anim commodo consectetur minim. Adipisicing aliquip enim pariatur quis minim ea sint mollit voluptate duis excepteur proident. Sint velit dolor nisi reprehenderit qui.\r\n",
      "cost": 3.7,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 3791,
      "name": "Refined Sugar",
      "image": "https://picsum.photos/200/200",
      "description": "Nisi mollit nostrud pariatur sit aliquip aliqua aliqua labore voluptate do. Anim ea nostrud nisi esse ad laboris officia consectetur excepteur ea est. Qui velit ut excepteur id incididunt laboris mollit dolor deserunt enim officia mollit. Tempor deserunt consequat occaecat pariatur ea elit ea veniam nostrud mollit qui commodo cillum.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 6,
      "unit": "box"
    },
    {
      "id": 3252,
      "name": "Refined Sugar",
      "image": "https://loremflickr.com/200/200",
      "description": "Consectetur ullamco nostrud non fugiat duis dolore quis aute incididunt elit aliqua consectetur. Velit pariatur qui sit eu. Labore est minim id ad ea consequat fugiat pariatur reprehenderit voluptate ut quis in ad. Aliqua ex occaecat cupidatat nostrud reprehenderit.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 1,
      "unit": "box"
    },
    {
      "id": 1293,
      "name": "Raw Soy Milk",
      "image": "http://placehold.it/180x180",
      "description": "Pariatur ullamco occaecat qui sit non incididunt laboris cillum. Non reprehenderit aliquip nulla nostrud. Ipsum duis proident pariatur voluptate sit veniam officia in aute velit culpa dolore Lorem.\r\n",
      "cost": 3.3,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6,
      "unit": "bag"
    },
    {
      "id": 7675,
      "name": "Passion Fruit Syrup",
      "image": "https://loremflickr.com/200/200",
      "description": "Excepteur id consectetur consectetur sit irure cupidatat pariatur ullamco culpa consectetur occaecat elit. Occaecat duis labore occaecat elit aliquip duis velit qui qui. Tempor sunt elit cillum aliquip anim dolore elit incididunt quis culpa minim adipisicing excepteur. Labore incididunt veniam est dolore occaecat anim minim irure ullamco. Sunt est elit velit magna amet magna anim eiusmod mollit tempor tempor sit sint minim. Occaecat laborum et sunt nisi cupidatat ut officia exercitation do consectetur dolore ut ex. Occaecat nulla ex occaecat ut consectetur aliqua anim consectetur est fugiat laborum excepteur nostrud duis.\r\n",
      "cost": 2,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 2,
      "unit": "box"
    },
    {
      "id": 7385,
      "name": "Rice balls",
      "image": "http://placehold.it/300x300",
      "description": "Amet ea cillum ullamco aliquip enim adipisicing sint irure aliquip deserunt proident. Esse ipsum veniam excepteur laboris consectetur. Labore veniam anim consectetur quis ea ea amet incididunt do nisi. Exercitation et consequat magna eiusmod sunt aliquip dolore laborum laboris adipisicing sit. Eiusmod adipisicing ullamco laboris ut qui dolore nulla nulla sit laboris est aute dolore.\r\n",
      "cost": 3.3,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 1,
      "unit": "bag"
    },
    {
      "id": 7400,
      "name": "Passion Fruit Syrup",
      "image": "https://picsum.photos/200/200",
      "description": "Nulla veniam proident eiusmod commodo occaecat amet commodo incididunt. Do magna incididunt id nostrud nostrud amet non fugiat nostrud tempor cupidatat nostrud. Ea tempor aute ullamco reprehenderit fugiat aute minim id pariatur veniam duis laborum. Culpa eiusmod eu sit laborum enim velit minim aliqua.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 7425,
      "name": "Mung Bean Cake",
      "image": "http://placehold.it/180x180",
      "description": "Cillum dolor aliquip exercitation veniam sint. Commodo consequat esse minim voluptate dolore et mollit enim. Ullamco voluptate exercitation non laboris exercitation incididunt eu et Lorem reprehenderit cupidatat. Laboris irure occaecat commodo ea aute culpa culpa labore aliqua ad est.\r\n",
      "cost": 1.5,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 6,
      "unit": "bag"
    },
    {
      "id": 9876,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/200x200",
      "description": "Aliquip voluptate dolore proident magna. Magna do labore pariatur incididunt officia fugiat laborum et fugiat veniam voluptate. Aliquip quis commodo aliquip anim cupidatat. Voluptate deserunt ipsum ea nisi occaecat mollit aliquip amet. Ullamco amet cillum eiusmod sunt elit. Ex exercitation pariatur esse officia occaecat qui velit duis amet nisi.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 2,
      "unit": "bag"
    },
    {
      "id": 5624,
      "name": "Passion Fruit Syrup",
      "image": "http://placehold.it/200x200",
      "description": "Deserunt minim in occaecat proident. Esse eiusmod ad aliquip consequat ea deserunt. In aliquip id exercitation aute tempor et pariatur est nisi cupidatat. Labore anim ex commodo quis exercitation enim dolore enim culpa voluptate cillum cupidatat ad nulla. Et duis mollit consectetur cupidatat velit deserunt cillum labore minim aliquip minim.\r\n",
      "cost": 2.6,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 1,
      "unit": "bag"
    },
    {
      "id": 3098,
      "name": "Barley",
      "image": "https://loremflickr.com/200/200",
      "description": "Mollit aliqua duis eu dolor qui in qui reprehenderit voluptate. Aliquip cupidatat id deserunt occaecat mollit commodo ipsum eu. Adipisicing fugiat cillum dolor cillum aliqua. Consectetur elit do qui non aute velit adipisicing in id. Mollit anim in ad qui elit voluptate cupidatat ullamco ipsum. Excepteur est irure anim consectetur tempor do aliqua nulla aliquip ea aliquip. Amet minim non aute officia mollit dolore sint mollit Lorem deserunt.\r\n",
      "cost": 3.7,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 3,
      "unit": "box"
    },
    {
      "id": 4832,
      "name": "Q Mochi - Brown Sugar ",
      "image": "http://placehold.it/180x180",
      "description": "Nulla minim dolore irure id incididunt culpa quis nostrud. Ullamco minim ut sint culpa. Eiusmod cupidatat eiusmod consequat magna Lorem eu dolore dolore est aliquip. Ad aliqua nostrud nulla consectetur culpa. Commodo qui laboris aliqua duis pariatur consectetur ea. Irure eu laborum officia culpa culpa aute officia aute et. Ut laborum adipisicing esse id tempor laboris laboris esse Lorem ex commodo nisi nisi.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6,
      "unit": "box"
    },
    {
      "id": 5591,
      "name": "Passion Fruit Syrup",
      "image": "https://picsum.photos/200/200",
      "description": "Est velit cupidatat aliquip id aliquip sunt sunt quis dolore aliqua consectetur nulla fugiat in. Irure do laborum magna officia nisi quis. Dolor nisi nostrud minim labore cillum pariatur dolor. Excepteur sunt ea in qui sunt et quis duis exercitation incididunt magna ea. Qui eiusmod tempor occaecat commodo reprehenderit fugiat fugiat sit sit dolor dolore ex culpa do.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 4,
      "unit": "bag"
    },
    {
      "id": 9910,
      "name": "Mung Bean Cake",
      "image": "http://placehold.it/300x300",
      "description": "Ad magna sunt cupidatat qui excepteur sit nostrud ea adipisicing pariatur labore laborum. Eiusmod non commodo cillum sint aute eiusmod ad pariatur nulla ad dolore magna. Consectetur minim Lorem tempor nostrud. Occaecat dolore cillum magna enim adipisicing ut Lorem pariatur quis sint enim. Sit labore tempor dolor eu. Consequat nisi enim aliquip magna enim adipisicing culpa veniam velit pariatur. Pariatur tempor do est reprehenderit ex duis velit proident qui ex enim Lorem laboris aliquip.\r\n",
      "cost": 3.3,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 5750,
      "name": "Jelly Noodle",
      "image": "http://placehold.it/200x200",
      "description": "Consectetur tempor ex esse veniam ad deserunt. Deserunt velit dolore officia commodo pariatur fugiat cillum. Minim amet ipsum cupidatat minim cillum duis exercitation est tempor irure nostrud. Eiusmod nisi dolore dolore excepteur ex sint et officia officia. Nulla ex ea aliquip ut consequat amet culpa. Aliqua est aliqua ut adipisicing excepteur elit.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 4678,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/180x180",
      "description": "Sit ipsum id enim cupidatat fugiat in duis commodo commodo nulla fugiat fugiat consectetur pariatur. Esse sunt in mollit et voluptate. Eiusmod est in officia quis aliqua reprehenderit quis mollit consectetur mollit Lorem. Occaecat incididunt est quis do eiusmod culpa.\r\n",
      "cost": 4.2,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 1,
      "unit": "bag"
    },
    {
      "id": 5269,
      "name": "Refined Sugar",
      "image": "https://picsum.photos/200/200",
      "description": "Minim proident laboris proident cupidatat. Quis occaecat ea exercitation in laborum dolore incididunt amet commodo. Sint do nulla irure magna irure voluptate adipisicing exercitation amet aliquip adipisicing. Voluptate dolor dolore veniam minim dolor sunt id cupidatat. Consectetur ex tempor fugiat nostrud mollit sunt.\r\n",
      "cost": 3.5,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 4,
      "unit": "box"
    },
    {
      "id": 2441,
      "name": "Lemon Syrup",
      "image": "https://picsum.photos/200/200",
      "description": "Nostrud exercitation dolor ad consequat cupidatat cillum amet. Do veniam officia labore pariatur et dolor magna consectetur. Aliquip amet eu do Lorem amet consectetur eu voluptate.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 1,
      "unit": "bottle"
    },
    {
      "id": 1076,
      "name": "Jelly Noodle",
      "image": "http://placehold.it/300x300",
      "description": "Ullamco exercitation irure est occaecat sit proident deserunt dolore culpa. Eu proident excepteur aliqua elit elit deserunt aute. Cillum id irure occaecat consectetur ipsum ad ex exercitation. Esse ex anim in tempor dolore nisi ut deserunt magna anim laboris amet anim. Magna nisi fugiat sit dolore exercitation non anim esse exercitation.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 4,
      "unit": "box"
    },
    {
      "id": 1305,
      "name": "Sweet potato Taro balls",
      "image": "http://placehold.it/300x300",
      "description": "Cillum ut deserunt consequat Lorem amet ad quis proident minim deserunt nisi culpa. Lorem ullamco labore voluptate fugiat. Ex eiusmod minim amet sint veniam eu officia non mollit anim dolor occaecat duis. Minim fugiat sunt irure magna minim nisi veniam sint exercitation minim officia Lorem. Dolor laboris elit sint elit incididunt incididunt sint ea excepteur nostrud.\r\n",
      "cost": 1.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 7,
      "unit": "bottle"
    },
    {
      "id": 3632,
      "name": "Taro balls",
      "image": "http://placehold.it/200x200",
      "description": "Cupidatat tempor dolor tempor aute. Minim et sit consequat dolor deserunt reprehenderit nostrud ad. Excepteur aute ullamco velit consequat quis ad aliquip nulla aute veniam. Qui eu qui dolor exercitation proident sit eu deserunt.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6,
      "unit": "bag"
    },
    {
      "id": 2301,
      "name": "Lemon Syrup",
      "image": "http://placehold.it/300x300",
      "description": "Ea nostrud magna dolor exercitation velit aliqua aute laboris eiusmod anim sunt deserunt deserunt mollit. Incididunt laborum mollit proident minim minim occaecat dolor. Do qui et laborum non. Exercitation ea excepteur voluptate in enim dolor dolore est est reprehenderit ullamco. Nostrud pariatur reprehenderit duis dolore ullamco voluptate aliqua officia eiusmod voluptate laborum. Consequat nisi eiusmod exercitation ea duis commodo dolor in dolor enim nulla aliquip.\r\n",
      "cost": 3.7,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 2,
      "unit": "bottle"
    },
    {
      "id": 6539,
      "name": "Q Mochi - Brown Sugar ",
      "image": "https://loremflickr.com/200/200",
      "description": "Qui non nisi aliqua officia culpa amet. Mollit do nostrud et labore sit ex id enim eiusmod commodo proident sit culpa adipisicing. Elit ullamco et eu do Lorem in ut aute.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 2,
      "unit": "bag"
    },
    {
      "id": 5386,
      "name": "Jelly Noodle",
      "image": "http://placehold.it/180x180",
      "description": "Laborum amet reprehenderit aliquip exercitation aute laborum officia quis eiusmod culpa elit. Sunt officia commodo magna fugiat sint proident laborum sit aute culpa. Laboris nostrud ad exercitation qui ad sunt pariatur cupidatat elit consectetur proident aliqua. Sint ut nulla voluptate labore cupidatat adipisicing elit adipisicing veniam. Cupidatat deserunt officia reprehenderit ullamco veniam laboris sunt exercitation.\r\n",
      "cost": 3.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 5,
      "unit": "bag"
    },
    {
      "id": 1965,
      "name": "Rice balls",
      "image": "https://picsum.photos/200/200",
      "description": "Ut Lorem nulla laborum nisi. Ad aliquip est ipsum ad non nulla incididunt sint ipsum. Enim laborum Lorem ut ex amet cillum. Ipsum sunt enim in ad nostrud id do culpa. Mollit ut Lorem occaecat ex ex proident quis duis fugiat mollit. Laboris veniam pariatur velit enim.\r\n",
      "cost": 3.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 7,
      "unit": "bag"
    },
    {
      "id": 4113,
      "name": "Lemon Syrup",
      "image": "https://picsum.photos/200/200",
      "description": "Ipsum magna excepteur quis tempor excepteur ullamco et non cillum. Culpa dolor pariatur ut sit ex deserunt labore minim ipsum officia et nostrud ea. Ex esse magna pariatur laboris fugiat minim anim ipsum reprehenderit non culpa. Nisi id ex deserunt enim ea elit sunt excepteur dolore magna dolor dolore elit elit.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 4,
      "unit": "box"
    },
    {
      "id": 9929,
      "name": "Mini Taro balls",
      "image": "http://placehold.it/300x300",
      "description": "Eu consectetur magna irure nulla ad ullamco officia cupidatat adipisicing incididunt non nostrud ex. Commodo sint ipsum enim cillum eiusmod. Lorem cillum veniam laboris labore. Irure eu mollit sint laboris nostrud sint.\r\n",
      "cost": 2,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 3,
      "unit": "bottle"
    },
    {
      "id": 4102,
      "name": "Mung Bean Cake",
      "image": "http://placehold.it/200x200",
      "description": "Ex mollit irure nisi aliqua sunt excepteur ad tempor. Deserunt dolore sit velit ex quis. Mollit ea eu laborum deserunt ex dolor mollit non officia duis. Ex veniam exercitation irure velit Lorem officia aute ipsum enim irure irure ex. Est cupidatat et cillum aliquip sunt tempor eiusmod pariatur. Commodo do magna duis nisi fugiat consequat sit pariatur. Ex elit minim velit consequat nisi aute Lorem nostrud pariatur quis cillum eiusmod culpa sit.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 4,
      "unit": "box"
    },
    {
      "id": 1349,
      "name": "Q Mochi - Original",
      "image": "http://placehold.it/180x180",
      "description": "In eu dolor non ex ullamco ipsum. Ut enim mollit nisi dolor excepteur nisi id dolor. Commodo labore occaecat anim reprehenderit sunt ad sunt eiusmod in aute mollit. Magna eu reprehenderit nostrud sint non cillum pariatur eu id occaecat exercitation.\r\n",
      "cost": 3.3,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 1,
      "unit": "bottle"
    },
    {
      "id": 1405,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "http://placehold.it/300x300",
      "description": "Ipsum occaecat exercitation ipsum in quis proident. Lorem sunt sint adipisicing tempor cillum elit veniam sit ipsum proident. Magna amet id aliquip dolore qui eiusmod ad ipsum esse veniam. Quis occaecat officia veniam voluptate nulla mollit do incididunt veniam ut fugiat id culpa. Anim Lorem esse nisi velit exercitation reprehenderit. Consequat eiusmod exercitation commodo minim enim exercitation. Veniam quis aliqua ad laborum magna dolore do incididunt.\r\n",
      "cost": 2.6,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 5,
      "unit": "bottle"
    },
    {
      "id": 7156,
      "name": "Lemon Syrup",
      "image": "http://placehold.it/200x200",
      "description": "Consequat deserunt laboris id amet deserunt. Cillum laborum sunt aute dolor ut est id magna sint ipsum labore magna sint. Fugiat consequat ut proident sit eiusmod commodo. Cillum duis mollit consequat consectetur eiusmod non. Ex eu est ullamco occaecat et reprehenderit amet aliqua. Nisi minim eiusmod nulla aute ex.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 4,
      "unit": "bag"
    },
    {
      "id": 7361,
      "name": "Raw Soy Milk",
      "image": "https://loremflickr.com/200/200",
      "description": "Id cupidatat culpa pariatur ea anim qui est sunt nisi mollit ad ad id. Officia laborum enim non elit mollit eiusmod exercitation voluptate cupidatat aute eu. Ad eiusmod ut fugiat veniam quis fugiat occaecat aute ullamco magna dolor elit culpa consectetur. Dolor officia duis duis mollit irure occaecat id.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6,
      "unit": "bottle"
    },
    {
      "id": 5212,
      "name": "Rice balls",
      "image": "http://placehold.it/180x180",
      "description": "Ea reprehenderit voluptate nulla eu proident aliquip do dolore et consectetur mollit enim. Aliqua aliquip fugiat cillum aliqua minim minim adipisicing ex do nisi ullamco. Qui incididunt amet excepteur incididunt nulla aliqua tempor nisi enim laborum aliquip. Dolor nulla eiusmod minim cupidatat commodo. Reprehenderit enim minim commodo culpa in aute tempor sunt dolor reprehenderit.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 2,
      "unit": "box"
    },
    {
      "id": 4064,
      "name": "Mini Taro balls",
      "image": "https://picsum.photos/200/200",
      "description": "Labore ex sint ad nisi aliquip do dolor nisi dolor est amet proident incididunt laborum. Fugiat mollit duis magna minim proident excepteur elit in labore nulla enim. Adipisicing deserunt laborum est laboris duis.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6,
      "unit": "box"
    },
    {
      "id": 6063,
      "name": "Rice balls",
      "image": "https://loremflickr.com/200/200",
      "description": "Voluptate culpa cillum mollit voluptate cillum dolor. Commodo sit magna laboris enim occaecat adipisicing sint. Incididunt pariatur laboris id nulla pariatur pariatur elit deserunt reprehenderit. Labore aute duis ullamco nisi adipisicing consectetur aute eiusmod cupidatat consequat aliquip consequat esse ullamco. Ut commodo enim in dolore ad non. Irure laborum mollit nisi dolor nisi velit ullamco aute quis. Commodo sunt labore velit nostrud quis pariatur.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6,
      "unit": "box"
    },
    {
      "id": 9431,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "http://placehold.it/300x300",
      "description": "Excepteur ad commodo dolor dolore pariatur consequat amet minim aute est elit. Nisi do et sunt irure exercitation esse laborum adipisicing consectetur amet officia culpa velit culpa. Consequat enim minim aliquip deserunt amet in cillum adipisicing laboris aute.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 7,
      "unit": "bottle"
    },
    {
      "id": 2799,
      "name": "Mung Bean Cake",
      "image": "https://loremflickr.com/200/200",
      "description": "Occaecat qui do quis duis ipsum in. Amet ullamco fugiat dolor laboris laborum enim. Ad magna aute exercitation enim cillum consectetur. Voluptate consectetur aliqua ipsum elit exercitation ipsum. Pariatur qui non cupidatat commodo deserunt est sint. Elit cillum ad Lorem dolor laboris pariatur ad et in ipsum est ea. Nostrud exercitation sunt do adipisicing commodo nostrud aute veniam deserunt.\r\n",
      "cost": 3.7,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 2,
      "unit": "box"
    },
    {
      "id": 6796,
      "name": "Mini Taro balls",
      "image": "http://placehold.it/200x200",
      "description": "Elit aute quis dolor cupidatat elit commodo aute consequat aliqua consectetur qui ex elit. Culpa elit est ut qui labore nisi deserunt excepteur consectetur et. Pariatur cupidatat minim labore esse occaecat deserunt aute ullamco sint laborum labore aliquip. Cillum adipisicing elit labore tempor consequat velit consequat pariatur labore aliquip eu officia nulla pariatur. Dolor sint ut ipsum aliqua nostrud consequat.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 1,
      "unit": "bag"
    },
    {
      "id": 7065,
      "name": "Raw Soy Milk",
      "image": "http://placehold.it/200x200",
      "description": "Ex exercitation dolor do qui irure reprehenderit magna proident. Consectetur amet cillum amet exercitation labore ea non ipsum duis proident adipisicing anim quis culpa. Deserunt aliquip occaecat nisi Lorem deserunt exercitation eiusmod anim cupidatat ex dolore aliqua excepteur culpa. Labore excepteur minim in elit elit nisi reprehenderit ad culpa fugiat consectetur anim proident.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 1,
      "unit": "bottle"
    },
    {
      "id": 9179,
      "name": "Raw Soy Milk",
      "image": "https://picsum.photos/200/200",
      "description": "Ipsum id incididunt proident tempor. Dolor aliquip consequat amet pariatur et in aute sit veniam aute. Fugiat ex proident qui nostrud aute.\r\n",
      "cost": 3.3,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 4,
      "unit": "box"
    },
    {
      "id": 9007,
      "name": "Mini Taro balls",
      "image": "http://placehold.it/200x200",
      "description": "Amet amet consectetur eiusmod reprehenderit. Mollit voluptate culpa anim est nisi id minim. Aliquip cillum ipsum occaecat reprehenderit laborum mollit Lorem amet proident ea aliqua. Laborum culpa ullamco elit et pariatur irure qui non. Excepteur duis Lorem tempor labore deserunt veniam non cupidatat.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 1,
      "unit": "bag"
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
    if(this.selected_item['sku'] == 0){
      this.selected_item['added_qty'] = 0;
    }else{
      this.selected_item['added_qty'] = 1;
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
    if(this.selected_item['added_qty'] < this.selected_item['sku']){
      this.selected_item['added_qty']++;
    }else{
      // Show error alert
    }
  }
  decrease_selected_item = () => {
    if(0 < this.selected_item['added_qty']){
      this.selected_item['added_qty']--;
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
        this.selected_ordered_item['qty'] += this.selected_item['added_qty'];
        this.selected_item['sku'] -= this.selected_item['added_qty'];
      }else{
        this.selected_item['sku'] -= this.selected_item['added_qty'];
        this.ordered_item.push({
          id: this.selected_item['id'],
          name: this.selected_item['name'],
          image: this.selected_item['image'],
          description: this.selected_item['description'],
          cost: this.selected_item['cost'],
          package_info: this.selected_item['package_info'],
          qty: this.selected_item['added_qty'],
          unit: this.selected_item['unit']
        })
      }
    }else{
      // Show error alert
    }
    this.selected_item['added_qty'] = 0;
  }

  remove_ordered_item = () => {
    this.selected_item['sku'] += this.selected_ordered_item['qty'];
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
        sum += item['cost'] * item['qty'];
      })
    }
    return sum;
  }
}
