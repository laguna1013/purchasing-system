export class Item {
  inventory_id: string = ''
  company: string = ''
  shop: string = ''
  gross_weight: string = '0'
  category: string = ''
  vendor_description: string = ''
  description: string = ''
  image: any = ''
  packing_info: string = ''
  unit: string = ''
  price: string = '0'
  cbf: string = '0'
  qty: string = '0'
  moq: string = '0'
  status: any = 'true'
  qty_display: any = 'true'
  user_access: string = 'all'

  public reset() {
    this.inventory_id = ''
    this.company = ''
    this.shop = ''
    this.gross_weight = '0'
    this.category = ''
    this.vendor_description = ''
    this.description = ''
    this.image = ''
    this.packing_info = ''
    this.unit = ''
    this.price = '0'
    this.cbf = '0'
    this.qty = '0'
    this.moq = '0'
    this.status = 'true'
    this.qty_display = 'true'
    this.user_access = 'all'
  }
}