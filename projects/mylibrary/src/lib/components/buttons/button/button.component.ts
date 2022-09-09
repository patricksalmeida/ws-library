import { Component, Input } from '@angular/core';

@Component({
  selector: 'ml-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input('label') label = 'button works!'
  @Input('variation') variation: 'primary' | 'secondary' = 'primary'
  @Input('rounded') isRounded = false
  @Input('enabled') isEnabled = true

  get isDefault(): boolean {
    return !this.isRounded
  }

  get isPrimary(): boolean {
    return this.variation === 'primary'
  }

  get isSecondary(): boolean {
    return this.variation === 'secondary'
  }

  get isDisabled(): boolean {
    return !this.isEnabled
  }
}
