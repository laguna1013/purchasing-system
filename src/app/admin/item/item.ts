export class Item {
  public inventory_id: string
  public created_user_id: string
  public branch: string
  public gross_weight: string
  public category: string = 'dry'
  public description: string
  public vendor_description: string = ''
  public image: any = []
  public packing_info: string
  public uom: string
  public price: string
  public cbm: string
  public qty: string
  public moq: string
  public status: any = true;
  public qty_display: any = true;
  public user_access: string = 'all'
}
