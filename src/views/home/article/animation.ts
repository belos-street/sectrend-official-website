class RowAnimation {
  private rowDom
  private isHovered: boolean
  private rowHeightMax = 520
  private rowHeightMin = 260
  private initHeight = 0
  private currentHeight = 0
  constructor(rowDom: HTMLDivElement, isHovered: boolean) {
    this.rowDom = rowDom
    this.isHovered = isHovered
  }
  record() {
    this.initHeight = this.rowDom.getBoundingClientRect().height
    return this
  }
  change() {
    this.currentHeight = this.isHovered ? this.rowHeightMax : this.rowHeightMin
    this.rowDom.style.height = this.currentHeight + 'px'
    return this
  }
  play() {
    if (this.initHeight === this.currentHeight) return this
    let animates: Keyframe[] = []
    if (this.isHovered) {
      animates = [{ height: this.rowHeightMin + 'px' }, { height: this.rowHeightMax + 'px' }]
    } else {
      animates = [{ height: this.rowHeightMax + 'px' }, { height: this.rowHeightMin + 'px' }]
    }
    this.rowDom.animate(animates, {
      duration: 300,
      easing: 'ease-out'
    })
    return this
  }
}

class ItemAnimation {
  private dom
  private isHovered: boolean
  private flexMax = '4'
  private flexMin = '1'
  private initFlex = ''
  private currentFlex = ''
  constructor(dom: HTMLDivElement, isHovered: boolean) {
    this.dom = dom
    this.isHovered = isHovered
  }
  record() {
    this.initFlex = getComputedStyle(this.dom).getPropertyValue('flex')
    return this
  }
  change() {
    this.currentFlex = this.isHovered ? this.flexMax : this.flexMin
    this.dom.style.flex = this.currentFlex
    return this
  }
  play() {
    if (this.currentFlex === this.initFlex) return this
    let animates: Keyframe[] = []
    if (this.isHovered) {
      animates = [{ flex: this.flexMin }, { flex: this.flexMax }]
    } else {
      animates = [{ flex: this.flexMax }, { flex: this.flexMin }]
    }
    this.dom.animate(animates, {
      duration: 300,
      easing: 'ease-out'
    })
    return this
  }
}

export { RowAnimation, ItemAnimation }
