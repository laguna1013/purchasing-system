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
      "id": 3569,
      "name": "Mini Taro balls",
      "image": "http://placehold.it/200x200",
      "description": "Esse quis aliqua dolor anim adipisicing pariatur veniam velit enim amet. Ex sint ullamco veniam esse ex Lorem anim voluptate esse. Fugiat Lorem nisi Lorem exercitation dolor tempor amet ut. Aliqua exercitation consequat mollit tempor ea sunt id labore nisi fugiat mollit. Incididunt est proident officia anim voluptate reprehenderit nisi nostrud.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 6
    },
    {
      "id": 1838,
      "name": "Q Mochi - Original",
      "image": "https://loremflickr.com/200/200",
      "description": "Voluptate adipisicing qui proident exercitation nulla in consectetur cillum velit commodo. Culpa ullamco et sunt incididunt sunt exercitation adipisicing sint in adipisicing fugiat. Do culpa eu culpa incididunt laborum nisi irure reprehenderit. Esse aliquip cupidatat do exercitation veniam reprehenderit id sit officia amet minim nisi ex sit.\r\n",
      "cost": 2,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 5
    },
    {
      "id": 1647,
      "name": "Rice balls",
      "image": "http://placehold.it/300x300",
      "description": "Nostrud cupidatat consectetur culpa est laboris velit qui ut excepteur id incididunt proident. Culpa enim amet amet velit commodo occaecat est voluptate aliqua qui eu. Exercitation anim in fugiat elit irure. Aliqua labore cupidatat nostrud qui ea consequat anim deserunt proident velit consequat id enim. Officia elit proident magna velit occaecat est dolore dolore ea quis duis. Eiusmod minim sunt pariatur ullamco. Ex dolore laborum exercitation in veniam id labore.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 1
    },
    {
      "id": 3114,
      "name": "Q Mochi - Brown Sugar ",
      "image": "https://loremflickr.com/200/200",
      "description": "Sint sunt ea dolore amet labore culpa velit nulla veniam nisi aliqua id. Laboris aliqua reprehenderit voluptate aute nisi sint voluptate qui. Voluptate sunt magna nisi elit elit amet aliquip pariatur dolor ullamco. Occaecat ad veniam cupidatat amet minim excepteur aliqua consectetur irure. Quis adipisicing velit reprehenderit commodo eiusmod eiusmod consequat culpa non. Reprehenderit do esse eiusmod eu aute consectetur ad.\r\n",
      "cost": 1.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 4
    },
    {
      "id": 1443,
      "name": "Barley",
      "image": "https://loremflickr.com/200/200",
      "description": "Consectetur laborum cillum amet labore ut est officia voluptate irure consequat cillum elit laboris. Laboris enim aliqua adipisicing velit anim. Ullamco anim enim laboris sit. Anim enim exercitation qui fugiat esse mollit culpa deserunt elit cillum culpa. Eu irure irure laborum laborum nostrud proident et esse ea do.\r\n",
      "cost": 3.7,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 5
    },
    {
      "id": 3124,
      "name": "Raw Soy Milk",
      "image": "http://placehold.it/180x180",
      "description": "Eu fugiat magna laborum aute nostrud esse nostrud. Adipisicing esse excepteur exercitation est enim voluptate do ipsum excepteur fugiat anim enim adipisicing. Consequat aute occaecat voluptate sunt dolor.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 7
    },
    {
      "id": 8969,
      "name": "Passion Fruit Syrup",
      "image": "https://picsum.photos/200/200",
      "description": "Eu magna ipsum sit deserunt pariatur culpa nisi adipisicing proident. Qui veniam ipsum ex et. Minim mollit magna velit excepteur amet velit sit. Occaecat ea nostrud mollit enim aliquip veniam veniam Lorem exercitation nisi ad aute aute. Aute do elit eiusmod laboris ullamco aute esse incididunt dolor sunt Lorem exercitation. Sit nulla ut ut nulla ea excepteur deserunt proident nostrud Lorem magna in aliqua sit.\r\n",
      "cost": 1.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 5
    },
    {
      "id": 2705,
      "name": "Q Mochi - Brown Sugar ",
      "image": "https://loremflickr.com/200/200",
      "description": "Ullamco labore id dolor quis nulla excepteur ut pariatur deserunt deserunt. Exercitation elit dolor sit esse et anim eu proident. Sint enim dolor est esse aliquip officia cupidatat velit Lorem. Sint officia eiusmod officia ullamco do in quis consectetur proident sint ullamco. Dolore pariatur aute ea culpa ea laborum est nisi officia amet et consequat. Ea pariatur dolore exercitation aliquip velit in. Dolor elit est veniam aliqua ex proident cillum aliqua proident anim eiusmod ad anim officia.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 2
    },
    {
      "id": 2152,
      "name": "Sweet potato Taro balls",
      "image": "http://placehold.it/180x180",
      "description": "Est exercitation do commodo sint nulla dolore dolore aute eu sint ad laboris. Nisi nostrud magna et Lorem. Id aliqua voluptate esse eiusmod. Ex commodo pariatur eiusmod ullamco. Pariatur veniam aliqua consectetur minim reprehenderit mollit cupidatat. Cupidatat officia incididunt voluptate magna duis id consequat dolore ullamco laborum. Fugiat nisi nostrud nisi ex cillum in minim nostrud.\r\n",
      "cost": 1.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 3
    },
    {
      "id": 4951,
      "name": "Lemon Syrup",
      "image": "http://placehold.it/180x180",
      "description": "Ut consectetur anim laborum amet aliqua ex pariatur. Enim officia sint excepteur irure excepteur. Labore commodo sunt nulla excepteur consectetur laboris quis aute. Magna aliqua mollit mollit labore nisi. Exercitation ut consectetur esse duis quis. Duis nisi exercitation Lorem culpa irure reprehenderit consequat incididunt id.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 7
    },
    {
      "id": 3369,
      "name": "Sesame Rice Balls",
      "image": "http://placehold.it/200x200",
      "description": "Mollit duis commodo pariatur voluptate laboris nulla ad ullamco commodo sit voluptate ad veniam. Laboris officia ea exercitation in consequat sit et tempor ex esse fugiat. Anim amet commodo proident aute cillum reprehenderit adipisicing occaecat sint dolore occaecat.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 3
    },
    {
      "id": 7911,
      "name": "Refined Sugar",
      "image": "https://loremflickr.com/200/200",
      "description": "In Lorem ut minim ullamco proident incididunt anim tempor ea eiusmod dolore nostrud esse anim. Pariatur nisi enim ad dolor pariatur ea ut nulla labore. Enim minim elit amet consequat sint laboris cupidatat. Tempor qui fugiat id officia laborum ipsum mollit eu eiusmod nostrud. Non cillum magna sint non quis ipsum incididunt mollit ut aliqua id. Enim sint ea deserunt ea ex adipisicing cillum ipsum labore non fugiat eu.\r\n",
      "cost": 1.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 6
    },
    {
      "id": 7455,
      "name": "Q Mochi - Brown Sugar ",
      "image": "http://placehold.it/300x300",
      "description": "Velit consectetur sit amet ad ut velit. Est ipsum amet reprehenderit ad velit et ad do. Sunt ex laboris ex est id fugiat mollit eiusmod ipsum ea qui qui. Et aliqua sit aute sit. Occaecat occaecat ad officia commodo enim sunt incididunt consectetur laboris excepteur.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 5
    },
    {
      "id": 9220,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/200x200",
      "description": "Fugiat consectetur sit esse incididunt est aute ex ut tempor cillum sint occaecat. Est tempor eu adipisicing tempor laborum et tempor laborum sunt. Quis quis dolore consectetur consequat labore velit est Lorem non commodo. Ullamco incididunt reprehenderit irure anim minim incididunt ad magna commodo do consequat consectetur cupidatat. Non eiusmod veniam et id Lorem id labore nulla do minim consequat labore sit.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 1
    },
    {
      "id": 3893,
      "name": "Mung Bean Cake",
      "image": "https://loremflickr.com/200/200",
      "description": "Aute dolor sunt sunt ex dolore magna culpa exercitation elit aliquip eiusmod. Minim adipisicing voluptate magna fugiat ad reprehenderit tempor est exercitation. Minim cupidatat culpa cillum reprehenderit culpa commodo laborum consectetur qui et. Commodo in excepteur ex laboris cillum laborum velit officia labore.\r\n",
      "cost": 2,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6
    },
    {
      "id": 6586,
      "name": "Raw Soy Milk",
      "image": "http://placehold.it/300x300",
      "description": "Veniam sunt eu qui aliquip pariatur esse eiusmod irure. Ut irure dolor consectetur nulla aute excepteur pariatur velit anim. Lorem ullamco eiusmod incididunt qui cillum quis laborum. Ad pariatur excepteur nulla sunt deserunt velit non nulla. Est officia et enim aliqua proident velit pariatur adipisicing velit laborum. Est sint excepteur eu ad velit aute sunt et qui cupidatat excepteur veniam. Cupidatat laboris velit ex ea est.\r\n",
      "cost": 3.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6
    },
    {
      "id": 5886,
      "name": "Sesame Rice Balls",
      "image": "http://placehold.it/180x180",
      "description": "Nisi ut est incididunt et dolore culpa ea do cupidatat consectetur est. Culpa qui aute proident consequat duis ea laborum occaecat et commodo velit. Ea consequat id sunt ipsum proident mollit adipisicing laboris.\r\n",
      "cost": 3.7,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 4
    },
    {
      "id": 4151,
      "name": "Brown Sugar & Sesame Mochi",
      "image": "https://picsum.photos/200/200",
      "description": "Cillum voluptate excepteur nostrud irure cillum aliqua exercitation aute cillum ut minim voluptate minim. Est voluptate sint tempor proident aliquip. Culpa proident ex do nisi laboris laboris. Reprehenderit commodo elit Lorem incididunt exercitation veniam duis. Mollit sint deserunt incididunt est non excepteur id laborum enim.\r\n",
      "cost": 3.7,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 7
    },
    {
      "id": 1812,
      "name": "Sweet potato Taro balls",
      "image": "http://placehold.it/200x200",
      "description": "Quis nulla aliquip proident officia pariatur ipsum sint minim amet deserunt ut voluptate exercitation ipsum. Do do occaecat elit irure Lorem officia in commodo non fugiat aliqua. Consequat enim ea labore consequat nisi nisi et amet ea et. Eiusmod ea non cillum proident ullamco aliqua aliqua cillum sit cupidatat reprehenderit incididunt incididunt est.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 4
    },
    {
      "id": 5961,
      "name": "Jelly Noodle",
      "image": "http://placehold.it/300x300",
      "description": "Pariatur qui elit id anim occaecat labore esse nostrud duis tempor magna laboris nulla. Consectetur veniam ullamco eu mollit ullamco nostrud nisi. Sint enim deserunt qui ad anim sint aliqua velit ut id id ex aliqua. Quis do ullamco sunt anim laborum consectetur laboris amet eiusmod.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 1
    },
    {
      "id": 8440,
      "name": "Passion Fruit Syrup",
      "image": "https://loremflickr.com/200/200",
      "description": "Magna labore laboris exercitation ut. Tempor aliquip Lorem aute aliqua ea enim labore nulla. Labore et proident anim laboris sit non. Cillum culpa adipisicing ex laborum. Adipisicing irure deserunt quis Lorem elit tempor adipisicing eu duis nisi voluptate sit velit est. Sunt dolor occaecat consequat commodo reprehenderit labore aute eiusmod dolor nulla quis occaecat nisi.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 6
    },
    {
      "id": 6859,
      "name": "Passion Fruit Syrup",
      "image": "http://placehold.it/180x180",
      "description": "Reprehenderit id aliquip aute eiusmod commodo voluptate do nostrud veniam mollit. Minim aute ea sunt consectetur. Culpa amet esse cupidatat elit. Nostrud fugiat ut incididunt ipsum adipisicing id dolore. Consequat dolor do est ex laborum irure Lorem voluptate veniam et nisi enim. Labore laboris ullamco et aliqua minim. Pariatur tempor cupidatat ex excepteur occaecat fugiat esse duis irure veniam.\r\n",
      "cost": 2.6,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 3
    },
    {
      "id": 3716,
      "name": "Refined Sugar",
      "image": "https://loremflickr.com/200/200",
      "description": "Dolore exercitation nulla pariatur et non cupidatat commodo occaecat. Mollit quis in ut enim tempor ipsum labore ad sint adipisicing ea deserunt. Et magna magna magna elit esse laboris deserunt. Ad est veniam pariatur commodo Lorem consequat laborum. Eiusmod adipisicing eu minim quis esse do dolor ullamco cupidatat labore duis velit. Consectetur esse Lorem proident velit sunt tempor incididunt labore.\r\n",
      "cost": 4.2,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 6
    },
    {
      "id": 8555,
      "name": "Sesame Rice Balls",
      "image": "http://placehold.it/180x180",
      "description": "Nisi Lorem sit dolore elit occaecat in aliquip aliquip est ad labore veniam do. Pariatur dolor minim non laboris amet cupidatat. Labore occaecat sint est dolore est consectetur aute excepteur ea veniam deserunt do ad eiusmod.\r\n",
      "cost": 3.5,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 5
    },
    {
      "id": 2388,
      "name": "Mini Taro balls",
      "image": "https://picsum.photos/200/200",
      "description": "Amet fugiat ex nostrud ad incididunt ea nisi incididunt laborum eiusmod. Culpa laboris amet in officia consectetur deserunt laboris aliqua voluptate. Ex elit consequat veniam officia sit aute aliqua non incididunt ut. Anim ut elit commodo exercitation nisi cillum elit. Dolor eiusmod do ex et minim ullamco ad ullamco. Adipisicing esse irure occaecat sint pariatur ad qui quis aliqua dolor id officia.\r\n",
      "cost": 1.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 3
    },
    {
      "id": 8660,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/180x180",
      "description": "Incididunt laboris dolore eu veniam minim do. Excepteur incididunt id in dolore minim. Cupidatat culpa consectetur in occaecat ut cupidatat sunt veniam aliqua. Deserunt nisi quis esse est sint non ipsum sint ullamco consequat enim. Do non mollit elit ipsum nisi ad ex minim elit. Enim irure eu dolor sunt. Eu sint deserunt est veniam proident et officia dolor enim occaecat velit minim adipisicing.\r\n",
      "cost": 2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 6
    },
    {
      "id": 5274,
      "name": "Taro balls",
      "image": "https://picsum.photos/200/200",
      "description": "Do aliqua eu eu minim adipisicing elit commodo minim in nostrud labore elit amet. Enim sunt ad aliqua consequat laborum labore nisi pariatur quis et et cupidatat. In reprehenderit amet in fugiat labore. Ipsum ipsum adipisicing irure sunt fugiat adipisicing amet fugiat. Pariatur eiusmod laboris sit reprehenderit tempor sit consequat eu consequat veniam.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 7
    },
    {
      "id": 7535,
      "name": "Sesame Rice Balls",
      "image": "https://picsum.photos/200/200",
      "description": "Pariatur laboris consequat incididunt cillum cillum eiusmod. Id esse tempor do ea incididunt eu ut do proident ex dolore laboris. Non est minim consequat consequat cillum deserunt eu. Aliquip aliqua incididunt quis minim commodo dolor nostrud anim adipisicing ullamco veniam. Cupidatat occaecat ea officia incididunt sit commodo. Ullamco est do consequat veniam qui minim duis dolore enim nostrud culpa nisi. Sunt incididunt enim officia sit enim reprehenderit dolore.\r\n",
      "cost": 3.7,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6
    },
    {
      "id": 8709,
      "name": "Taro balls",
      "image": "http://placehold.it/300x300",
      "description": "Proident laborum deserunt fugiat proident tempor laboris deserunt nisi esse amet. Proident dolore irure magna duis dolore. Magna incididunt aliquip exercitation fugiat anim dolor magna. Nulla eiusmod tempor exercitation anim dolor dolor ea tempor ad elit dolor eu ut dolore. Elit ad ad sunt dolor excepteur quis non ex minim Lorem. Do mollit eu est nisi sint. Id reprehenderit exercitation exercitation elit cillum do do enim sunt commodo.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6
    },
    {
      "id": 9256,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/200x200",
      "description": "Ad ea cillum officia exercitation esse. Fugiat in fugiat do sint ullamco adipisicing. Consequat sint officia fugiat mollit laborum veniam aliqua cupidatat. Laboris cupidatat laborum qui cillum occaecat excepteur sunt. Sunt sunt reprehenderit sint ipsum cillum reprehenderit minim non.\r\n",
      "cost": 3.7,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 1
    },
    {
      "id": 9274,
      "name": "Jelly Noodle",
      "image": "http://placehold.it/300x300",
      "description": "Do cupidatat eu aliqua in nostrud. Minim duis incididunt voluptate ad pariatur laborum. Nulla cupidatat nulla fugiat anim qui excepteur. Minim nisi nulla qui deserunt veniam commodo ullamco officia pariatur. Mollit ullamco dolor sit qui consectetur laboris eu non magna enim magna in. Ad id fugiat sit do.\r\n",
      "cost": 3.5,
      "package_info": "1kg/bag 6bags/ctn",
      "sku": 3
    },
    {
      "id": 4480,
      "name": "Q Mochi - Brown Sugar ",
      "image": "http://placehold.it/180x180",
      "description": "Ullamco ullamco ipsum culpa voluptate nulla veniam eu veniam. Et adipisicing sint velit in fugiat occaecat dolor magna aute dolor magna. Ipsum eiusmod amet nisi nisi do amet pariatur qui in. Tempor consectetur veniam voluptate aliquip voluptate commodo amet elit labore. Consectetur laboris ad velit culpa cupidatat quis ex aute deserunt sit ex. Proident incididunt labore aliqua excepteur. Duis consequat pariatur eiusmod nostrud sint ullamco commodo velit qui nisi commodo quis commodo.\r\n",
      "cost": 3.7,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 1
    },
    {
      "id": 6797,
      "name": "Lemon Syrup",
      "image": "http://placehold.it/200x200",
      "description": "Laborum labore ex aliqua voluptate duis proident consequat culpa ut id irure. Ex sunt anim culpa amet anim proident ex cillum voluptate dolore dolor tempor eu. Exercitation ullamco deserunt eu adipisicing ut deserunt ipsum ea. Culpa quis nostrud consequat magna. Lorem amet nisi deserunt sit et eiusmod quis cupidatat et esse et Lorem id proident. Laborum id laboris sunt mollit eu sunt.\r\n",
      "cost": 4.2,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 2
    },
    {
      "id": 6472,
      "name": "Jelly Noodle",
      "image": "https://picsum.photos/200/200",
      "description": "Tempor ut proident cillum dolore proident. Culpa magna officia excepteur aliqua duis laboris sunt officia quis laborum commodo magna dolore. Enim sunt excepteur culpa elit tempor nostrud. Nisi Lorem in anim amet duis ad laborum ipsum excepteur labore sit sint ex.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 4
    },
    {
      "id": 8346,
      "name": "Q Mochi - Brown Sugar ",
      "image": "https://loremflickr.com/200/200",
      "description": "Irure sunt amet cillum esse non. Duis aute nisi esse magna pariatur proident quis do. Irure minim eiusmod nisi nulla ea velit. Sunt elit consectetur reprehenderit labore est. Do aliquip esse ipsum irure ad duis id fugiat. Labore ad in non amet nostrud reprehenderit fugiat quis labore ex cupidatat enim proident cillum. Labore dolore ex fugiat proident.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 5
    },
    {
      "id": 1606,
      "name": "Q Mochi - Brown Sugar ",
      "image": "http://placehold.it/200x200",
      "description": "Nostrud Lorem deserunt amet est amet ut pariatur. Occaecat enim culpa dolore nostrud dolor. Aliqua qui exercitation exercitation sit quis officia anim do deserunt adipisicing dolor tempor. Tempor reprehenderit non Lorem ex aute dolor nisi irure non eu eu. Fugiat fugiat dolore consequat duis aute. Excepteur nulla voluptate dolor elit Lorem nostrud ea.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 6
    },
    {
      "id": 8029,
      "name": "Brown Sugar & Peanut Mochi",
      "image": "http://placehold.it/200x200",
      "description": "Ex ut magna commodo cillum. Amet elit fugiat Lorem reprehenderit est. Esse sint cillum consequat aute culpa eiusmod.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 1
    },
    {
      "id": 4851,
      "name": "Passion Fruit Syrup",
      "image": "http://placehold.it/300x300",
      "description": "Anim laborum laboris non sit ut mollit est. Laborum amet eiusmod enim eu aliquip tempor in non. Culpa fugiat non ad enim ipsum velit cupidatat. Mollit voluptate consequat cupidatat sit ut esse pariatur commodo. Nulla ipsum pariatur laboris consectetur ut nisi dolor culpa ea est aliquip sit laborum.\r\n",
      "cost": 3.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 1
    },
    {
      "id": 5597,
      "name": "Taro",
      "image": "http://placehold.it/180x180",
      "description": "Pariatur incididunt officia magna dolor do elit culpa. Adipisicing ex adipisicing ipsum cupidatat minim officia sint Lorem deserunt commodo Lorem eu pariatur. Ipsum enim aute eiusmod quis. Qui occaecat fugiat mollit non eiusmod deserunt velit. Eiusmod ex consectetur velit nulla nisi irure Lorem sunt reprehenderit. Voluptate id laboris nulla eu veniam Lorem qui eiusmod laborum incididunt ullamco ex. Anim dolore qui laborum consequat consectetur adipisicing proident eu.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 6
    },
    {
      "id": 4408,
      "name": "Raw Soy Milk",
      "image": "http://placehold.it/300x300",
      "description": "Velit et ipsum deserunt duis ut veniam esse cupidatat labore labore eiusmod officia reprehenderit. Amet ad eu enim quis duis. Nostrud excepteur do mollit reprehenderit. Elit sint do sint mollit in tempor amet sint. Magna proident aliqua laborum aute labore. Culpa deserunt veniam esse minim id adipisicing magna. Ullamco excepteur ad consequat tempor ex irure est id in mollit id mollit est reprehenderit.\r\n",
      "cost": 3.5,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 6
    },
    {
      "id": 7930,
      "name": "Q Mochi - Original",
      "image": "https://loremflickr.com/200/200",
      "description": "Ad commodo cupidatat ipsum velit cillum cillum labore. Voluptate Lorem nulla id irure exercitation officia exercitation eu non. Aliquip anim qui non tempor cupidatat ex magna irure. Ex irure minim aliquip nisi pariatur sunt id. Cupidatat minim ex esse esse dolore irure dolore. Laboris consequat esse proident consectetur enim exercitation ut commodo excepteur fugiat elit sunt aute.\r\n",
      "cost": 2.6,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 7
    },
    {
      "id": 9895,
      "name": "Taro",
      "image": "http://placehold.it/300x300",
      "description": "Non ut in ullamco consequat occaecat exercitation Lorem tempor. Anim proident amet ex tempor ipsum do. Voluptate aute officia laboris eiusmod quis qui voluptate fugiat in deserunt. Magna proident eu voluptate laborum quis voluptate. Occaecat qui enim non esse ullamco fugiat do.\r\n",
      "cost": 1.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 5
    },
    {
      "id": 3656,
      "name": "Refined Sugar",
      "image": "https://picsum.photos/200/200",
      "description": "Voluptate mollit magna sunt occaecat aute culpa eu minim. Enim sit culpa id reprehenderit labore nostrud ipsum. Do quis magna qui deserunt sunt eu quis ad qui voluptate voluptate in aute. Et voluptate esse officia ea occaecat sunt est aliquip veniam exercitation duis. Non tempor laboris ea voluptate esse ullamco.\r\n",
      "cost": 3.3,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 4
    },
    {
      "id": 4238,
      "name": "Passion Fruit Syrup",
      "image": "http://placehold.it/300x300",
      "description": "Aute magna occaecat aute elit et. Irure aute commodo incididunt proident ex esse dolor enim consectetur occaecat consequat magna. Sunt amet tempor eiusmod quis labore velit do duis adipisicing eu. Sunt excepteur officia anim esse eiusmod laborum irure et exercitation laboris qui. Consequat cupidatat aute minim non nostrud ut consectetur minim non do.\r\n",
      "cost": 4.2,
      "package_info": "1.2kg/bag 12bags/ctn",
      "sku": 4
    },
    {
      "id": 2218,
      "name": "Sesame Rice Balls",
      "image": "http://placehold.it/200x200",
      "description": "Ex dolore nulla et ullamco ex veniam. Ut proident aliquip pariatur id. In id exercitation do eiusmod laborum consequat qui eiusmod exercitation ad.\r\n",
      "cost": 3.5,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 3
    },
    {
      "id": 3554,
      "name": "Mung Bean Cake",
      "image": "http://placehold.it/180x180",
      "description": "Officia esse reprehenderit ut aliqua labore dolor non laborum minim mollit dolor. Enim adipisicing aliqua cupidatat eiusmod anim veniam cillum voluptate. Duis qui nostrud enim fugiat eu enim dolore mollit in eu sunt. Do velit qui cillum eu excepteur sunt in nostrud ipsum excepteur ullamco ad eiusmod. Deserunt pariatur et ut sunt duis dolore officia proident qui irure veniam quis.\r\n",
      "cost": 2.6,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 6
    },
    {
      "id": 9596,
      "name": "Barley",
      "image": "http://placehold.it/180x180",
      "description": "Esse tempor officia ex ipsum ad enim. Commodo proident anim nostrud consequat. Velit sint dolor adipisicing enim consequat irure enim duis mollit culpa.\r\n",
      "cost": 4.2,
      "package_info": "12pcs/box 18boxes/ctn",
      "sku": 2
    },
    {
      "id": 4066,
      "name": "Taro",
      "image": "http://placehold.it/200x200",
      "description": "Fugiat Lorem laborum elit ullamco id nisi dolor non. Magna irure laboris dolor est. Aute consectetur dolor dolor excepteur fugiat laboris aliquip velit sunt. Tempor nulla fugiat irure pariatur proident veniam ex duis officia in officia. Consectetur aliqua cillum duis exercitation in labore amet tempor pariatur non nostrud. Consectetur eiusmod anim cupidatat Lorem irure mollit nulla nisi anim veniam esse.\r\n",
      "cost": 3.5,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 5
    },
    {
      "id": 2913,
      "name": "Passion Fruit Syrup",
      "image": "https://loremflickr.com/200/200",
      "description": "Laborum magna aliqua ad sunt incididunt enim laboris magna commodo ut esse. Occaecat occaecat adipisicing aliqua cillum labore velit et tempor aliqua. Voluptate tempor aliquip commodo ut cillum est et tempor. Sit id enim duis ex laboris amet Lorem officia. Culpa esse eiusmod nulla quis quis enim in occaecat enim duis occaecat. Eiusmod anim reprehenderit labore elit commodo non in cillum incididunt irure magna nulla. Enim excepteur mollit esse labore quis elit non laboris nostrud quis.\r\n",
      "cost": 3.5,
      "package_info": "0.6kg/bag 24bags/ctn",
      "sku": 7
    },
    {
      "id": 9233,
      "name": "Sesame Rice Balls",
      "image": "https://loremflickr.com/200/200",
      "description": "Ad aliqua laborum dolor veniam eiusmod. Velit ad elit sunt sint exercitation veniam ad enim esse esse esse aute. Qui sit minim ipsum consectetur ad veniam pariatur in quis Lorem. Nulla nulla excepteur ut anim reprehenderit sit id irure amet laborum voluptate qui exercitation. Aliqua do sunt nisi ea consectetur cillum amet anim. Est anim pariatur proident cillum.\r\n",
      "cost": 3.7,
      "package_info": "600ml/bottle 20 bottles/ctn",
      "sku": 5
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
          qty: this.selected_item['added_qty']
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
