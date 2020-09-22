export class Item {
  inventory_id: string = 'D20200102'
  created_user_id: string
  branch: string = 'Meetfresh'
  gross_weight: string = '10'
  category: string = 'dry'
  vendor_description: string = '鮮芋仙紅茶'
  description: string = 'Black Tea'
  image: any = []
  packing_info: string = '130g/bag 50bags/ctn'
  uom: string = 'ctn'
  price: string = '80'
  cbm: string = '0.4'
  qty: string = '200'
  moq: string = '9'
  status: any = true
  qty_display: any = true
  user_access: string = 'all'

  public reset(){
    this.inventory_id = ''
    this.created_user_id = ''
    this.branch = ''
    this.gross_weight = ''
    this.category = ''
    this.vendor_description = ''
    this.description = ''
    this.image = ''
    this.packing_info = ''
    this.uom = ''
    this.price = ''
    this.cbm = ''
    this.qty = ''
    this.moq = ''
    this.status = ''
    this.qty_display = ''
    this.user_access = ''
  }
}
